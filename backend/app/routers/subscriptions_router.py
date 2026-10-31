import datetime
from dateutil.relativedelta import relativedelta
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import (
    Subscription, SubscriptionLine, SubscriptionStatus,
    Plan, Product, ProductVariant, DiscountRule, User, UserRole,
    Invoice
)
from ..schemas import SubscriptionCreate, SubscriptionResponse, SubscriptionStatusUpdate
from ..auth import get_current_user, require_staff_or_admin
from ..billing_engine import add_interval, generate_invoice_for_subscription

router = APIRouter(prefix="/api/subscriptions", tags=["subscriptions"])

@router.get("/", response_model=List[SubscriptionResponse])
def get_subscriptions(
    status: Optional[str] = None,
    customer_id: Optional[int] = None,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    query = db.query(Subscription)
    
    # If customer, strictly restrict to their own subscriptions
    if current_user.role == UserRole.CUSTOMER:
        query = query.filter(Subscription.customer_id == current_user.id)
    elif customer_id:
        query = query.filter(Subscription.customer_id == customer_id)

    if status:
        query = query.filter(Subscription.status == status)

    return query.order_by(Subscription.id.desc()).all()

@router.get("/{sub_id}", response_model=SubscriptionResponse)
def get_subscription(
    sub_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    sub = db.query(Subscription).filter(Subscription.id == sub_id).first()
    if not sub:
        raise HTTPException(status_code=404, detail="Subscription not found")

    if current_user.role == UserRole.CUSTOMER and sub.customer_id != current_user.id:
        raise HTTPException(status_code=403, detail="You do not have permission to view this subscription")

    return sub

@router.post("/", response_model=SubscriptionResponse)
def create_subscription(
    req: SubscriptionCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Customer can only create for themselves, staff/admin can create for any customer
    target_customer_id = req.customer_id
    if current_user.role == UserRole.CUSTOMER:
        target_customer_id = current_user.id

    plan = db.query(Plan).filter(Plan.id == req.plan_id).first()
    if not plan:
        raise HTTPException(status_code=404, detail="Plan not found")

    # Validate minimum quantity
    total_qty = sum(l.quantity for l in req.lines)
    if total_qty < plan.min_quantity:
        raise HTTPException(
            status_code=400,
            detail=f"Total quantity ({total_qty}) does not meet minimum quantity for this plan ({plan.min_quantity})"
        )

    # Validate discount code if provided
    discount = None
    if req.discount_code:
        discount = db.query(DiscountRule).filter(
            DiscountRule.code == req.discount_code.upper().strip(),
            DiscountRule.is_active == True
        ).first()
        if not discount:
            raise HTTPException(status_code=400, detail="Invalid or inactive discount code")

    # Generate sequential unique subscription number
    count = db.query(Subscription).count() + 1
    sub_number = f"SUB-{datetime.date.today().year}-{count:05d}"
    while db.query(Subscription).filter(Subscription.subscription_number == sub_number).first() is not None:
        count += 1
        sub_number = f"SUB-{datetime.date.today().year}-{count:05d}"

    # Default expiry: 1 year from start date if not provided
    expiry = req.expiry_date
    if not expiry:
        expiry = req.start_date + relativedelta(years=1)

    quote_validity = None
    if req.quotation_validity_days:
        quote_validity = req.start_date + datetime.timedelta(days=req.quotation_validity_days)

    initial_status = req.status or SubscriptionStatus.DRAFT

    sub = Subscription(
        subscription_number=sub_number,
        customer_id=target_customer_id,
        plan_id=plan.id,
        discount_id=discount.id if discount else None,
        status=initial_status,
        start_date=req.start_date,
        expiry_date=expiry,
        quotation_expiry_date=quote_validity,
        payment_terms=req.payment_terms,
        next_billing_date=req.start_date,
        notes=req.notes
    )
    db.add(sub)
    db.flush()

    total_untaxed = 0.0
    total_tax = 0.0
    for l in req.lines:
        line_base = l.quantity * l.unit_price
        line_tax = line_base * (l.tax_rate / 100.0)
        line_total = line_base + line_tax

        total_untaxed += line_base
        total_tax += line_tax

        sub_line = SubscriptionLine(
            subscription_id=sub.id,
            product_id=l.product_id,
            variant_id=l.variant_id,
            quantity=l.quantity,
            unit_price=l.unit_price,
            tax_rate=l.tax_rate,
            amount=round(line_total, 2)
        )
        db.add(sub_line)

    sub.total_untaxed = round(total_untaxed, 2)
    sub.total_tax = round(total_tax, 2)
    sub.total_amount = round(total_untaxed + total_tax, 2)

    db.commit()
    db.refresh(sub)
    return sub

@router.post("/{sub_id}/status", response_model=SubscriptionResponse)
def update_subscription_status(
    sub_id: int,
    req: SubscriptionStatusUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    sub = db.query(Subscription).filter(Subscription.id == sub_id).first()
    if not sub:
        raise HTTPException(status_code=404, detail="Subscription not found")

    new_status = req.status
    plan = sub.plan

    # Role validation
    if current_user.role == UserRole.CUSTOMER:
        if sub.customer_id != current_user.id:
            raise HTTPException(status_code=403, detail="Forbidden")
        
        # Check plan policies if customer initiates state changes
        if new_status == SubscriptionStatus.PAUSED and not plan.allow_pause:
            raise HTTPException(status_code=400, detail="This plan does not permit pausing")
        if new_status == SubscriptionStatus.CLOSED and not plan.allow_early_close:
            raise HTTPException(status_code=400, detail="This plan does not permit early closure")
        if new_status == SubscriptionStatus.ACTIVE and sub.status == SubscriptionStatus.CLOSED and not plan.allow_renew:
            raise HTTPException(status_code=400, detail="This plan does not permit renewals")

    # Workflow validations
    # Draft -> Quotation -> Confirmed -> Active -> Closed (or Paused)
    valid_transitions = {
        SubscriptionStatus.DRAFT: [SubscriptionStatus.QUOTATION, SubscriptionStatus.CONFIRMED, SubscriptionStatus.CLOSED],
        SubscriptionStatus.QUOTATION: [SubscriptionStatus.CONFIRMED, SubscriptionStatus.CLOSED, SubscriptionStatus.DRAFT],
        SubscriptionStatus.CONFIRMED: [SubscriptionStatus.ACTIVE, SubscriptionStatus.CLOSED],
        SubscriptionStatus.ACTIVE: [SubscriptionStatus.PAUSED, SubscriptionStatus.CLOSED],
        SubscriptionStatus.PAUSED: [SubscriptionStatus.ACTIVE, SubscriptionStatus.CLOSED],
        SubscriptionStatus.CLOSED: [SubscriptionStatus.ACTIVE] # Renew
    }

    if new_status not in valid_transitions.get(sub.status, []):
        raise HTTPException(
            status_code=400,
            detail=f"Cannot transition from {sub.status} to {new_status}"
        )

    # If transitioning to Active, ensure initial invoice is generated if not yet billed
    sub.status = new_status
    if new_status == SubscriptionStatus.ACTIVE:
        if sub.last_billing_date is None:
            # Generate initial invoice
            generate_invoice_for_subscription(db, sub, billing_date=datetime.date.today(), force=True)

    db.commit()
    db.refresh(sub)
    return sub

@router.post("/{sub_id}/generate-invoice")
def generate_invoice(
    sub_id: int,
    current_user: User = Depends(require_staff_or_admin),
    db: Session = Depends(get_db)
):
    sub = db.query(Subscription).filter(Subscription.id == sub_id).first()
    if not sub:
        raise HTTPException(status_code=404, detail="Subscription not found")

    invoice, error = generate_invoice_for_subscription(db, sub, billing_date=datetime.date.today(), force=True)
    if error:
        raise HTTPException(status_code=400, detail=error)

    return {"message": "Invoice generated successfully", "invoice_id": invoice.id, "invoice_number": invoice.invoice_number}
