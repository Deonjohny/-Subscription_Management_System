import datetime
from typing import Optional
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from sqlalchemy import func
from ..database import get_db
from ..models import Subscription, SubscriptionStatus, Invoice, InvoiceStatus, Payment, User, Plan
from ..schemas import FinanceSummary
from ..auth import require_staff_or_admin
from ..billing_engine import run_billing_day

router = APIRouter(prefix="/api/finance", tags=["finance"])

@router.get("/summary", response_model=FinanceSummary)
def get_finance_summary(
    start_date: Optional[datetime.date] = None,
    end_date: Optional[datetime.date] = None,
    plan_id: Optional[int] = None,
    current_user: User = Depends(require_staff_or_admin),
    db: Session = Depends(get_db)
):
    today = datetime.date.today()

    # 1. Active Subscriptions Count
    active_subs_q = db.query(Subscription).filter(Subscription.status == SubscriptionStatus.ACTIVE)
    if plan_id:
        active_subs_q = active_subs_q.filter(Subscription.plan_id == plan_id)
    active_count = active_subs_q.count()
    total_subs_count = db.query(Subscription).count()

    # Calculate MRR (Monthly Recurring Revenue) & ARR
    # For active subscriptions, normalize billing intervals
    mrr = 0.0
    active_subs = active_subs_q.all()
    for s in active_subs:
        interval = s.plan.billing_interval if s.plan else "monthly"
        sub_total = s.total_amount
        if interval == "daily":
            mrr += sub_total * 30.0
        elif interval == "weekly":
            mrr += sub_total * 4.33
        elif interval == "monthly":
            mrr += sub_total
        elif interval == "yearly":
            mrr += sub_total / 12.0

    arr = mrr * 12.0

    # 2. Payments (Revenue Collected)
    payments_q = db.query(func.coalesce(func.sum(Payment.amount), 0.0))
    if start_date:
        payments_q = payments_q.filter(Payment.payment_date >= start_date)
    if end_date:
        payments_q = payments_q.filter(Payment.payment_date <= end_date)
    total_revenue_collected = float(payments_q.scalar() or 0.0)

    # 3. Total Outstanding / Still Owed (from confirmed invoices)
    outstanding_q = db.query(func.coalesce(func.sum(Invoice.amount_due), 0.0)).filter(
        Invoice.status.in_([InvoiceStatus.CONFIRMED, InvoiceStatus.DRAFT]),
        Invoice.amount_due > 0
    )
    if start_date:
        outstanding_q = outstanding_q.filter(Invoice.issue_date >= start_date)
    if end_date:
        outstanding_q = outstanding_q.filter(Invoice.issue_date <= end_date)
    total_outstanding_amount = float(outstanding_q.scalar() or 0.0)

    # 4. Overdue Invoices
    overdue_q = db.query(Invoice).filter(
        Invoice.status == InvoiceStatus.CONFIRMED,
        Invoice.due_date < today,
        Invoice.amount_due > 0
    )
    overdue_count = overdue_q.count()
    overdue_amount_q = db.query(func.coalesce(func.sum(Invoice.amount_due), 0.0)).filter(
        Invoice.status == InvoiceStatus.CONFIRMED,
        Invoice.due_date < today,
        Invoice.amount_due > 0
    )
    overdue_amount = float(overdue_amount_q.scalar() or 0.0)

    # 5. Paid vs Unpaid counts
    paid_count = db.query(Invoice).filter(Invoice.status == InvoiceStatus.PAID).count()
    unpaid_count = db.query(Invoice).filter(
        Invoice.status == InvoiceStatus.CONFIRMED,
        Invoice.amount_due > 0
    ).count()

    return {
        "active_subscriptions_count": active_count,
        "total_subscriptions_count": total_subs_count,
        "total_revenue_collected": round(total_revenue_collected, 2),
        "total_outstanding_amount": round(total_outstanding_amount, 2),
        "overdue_invoices_count": overdue_count,
        "overdue_invoices_amount": round(overdue_amount, 2),
        "mrr": round(mrr, 2),
        "arr": round(arr, 2),
        "paid_invoices_count": paid_count,
        "unpaid_invoices_count": unpaid_count
    }

@router.post("/trigger-billing-day")
def trigger_billing_day(
    target_date: Optional[datetime.date] = None,
    current_user: User = Depends(require_staff_or_admin),
    db: Session = Depends(get_db)
):
    """
    Simulates or executes automated billing day.
    """
    result = run_billing_day(db, target_date=target_date)
    return result
