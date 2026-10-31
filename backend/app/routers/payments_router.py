from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import Invoice, InvoiceStatus, Payment, User, UserRole
from ..schemas import PaymentCreate, PaymentResponse
from ..auth import get_current_user, require_staff_or_admin

router = APIRouter(prefix="/api/payments", tags=["payments"])

@router.post("/invoices/{invoice_id}", response_model=PaymentResponse)
def record_payment(
    invoice_id: int,
    req: PaymentCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    inv = db.query(Invoice).filter(Invoice.id == invoice_id).first()
    if not inv:
        raise HTTPException(status_code=404, detail="Invoice not found")

    if current_user.role == UserRole.CUSTOMER and inv.customer_id != current_user.id:
        raise HTTPException(status_code=403, detail="Forbidden")

    if inv.status == InvoiceStatus.CANCELLED:
        raise HTTPException(status_code=400, detail="Cannot pay a cancelled invoice")

    if req.amount <= 0:
        raise HTTPException(status_code=400, detail="Payment amount must be greater than zero")

    if req.amount > inv.amount_due + 0.001:
        raise HTTPException(
            status_code=400,
            detail=f"Payment amount (${req.amount:.2f}) exceeds outstanding amount due (${inv.amount_due:.2f})"
        )

    payment = Payment(
        invoice_id=inv.id,
        payment_method=req.payment_method,
        amount=req.amount,
        payment_date=req.payment_date,
        reference_note=req.reference_note,
        recorded_by_id=current_user.id
    )
    db.add(payment)

    # Update invoice paid and due amounts
    inv.amount_paid = round(inv.amount_paid + req.amount, 2)
    inv.amount_due = round(max(0.0, inv.total_amount - inv.amount_paid), 2)

    # If amount due is 0, update invoice to Paid
    if inv.amount_due <= 0.001:
        inv.status = InvoiceStatus.PAID
    elif inv.status == InvoiceStatus.DRAFT:
        # If paying a draft, confirm it
        inv.status = InvoiceStatus.CONFIRMED

    db.commit()
    db.refresh(payment)
    db.refresh(inv)
    return payment

@router.get("/invoices/{invoice_id}", response_model=List[PaymentResponse])
def get_invoice_payments(
    invoice_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    inv = db.query(Invoice).filter(Invoice.id == invoice_id).first()
    if not inv:
        raise HTTPException(status_code=404, detail="Invoice not found")

    if current_user.role == UserRole.CUSTOMER and inv.customer_id != current_user.id:
        raise HTTPException(status_code=403, detail="Forbidden")

    return db.query(Payment).filter(Payment.invoice_id == invoice_id).order_by(Payment.payment_date.desc()).all()
