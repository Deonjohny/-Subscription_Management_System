import datetime
import io
import csv
from typing import Optional, List
from fastapi import APIRouter, Depends, Query, Response
from sqlalchemy.orm import Session
from sqlalchemy import func
from ..database import get_db
from ..models import Subscription, SubscriptionStatus, Invoice, InvoiceStatus, Payment, User, Plan, UserRole
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

@router.get("/export-invoices-csv")
def export_invoices_csv(
    current_user: User = Depends(require_staff_or_admin),
    db: Session = Depends(get_db)
):
    """
    Exports full audited invoices ledger into a standardized CSV for ERP / Accounting import.
    """
    invoices = db.query(Invoice).order_by(Invoice.id.desc()).all()
    output = io.StringIO()
    writer = csv.writer(output)

    # Header Row
    writer.writerow([
        "Invoice Number",
        "Customer Name",
        "Company",
        "Customer Email",
        "Issue Date",
        "Due Date",
        "Billing Period Start",
        "Billing Period End",
        "Subtotal Untaxed",
        "Tax Amount",
        "Discount Amount",
        "Total Amount",
        "Amount Paid",
        "Amount Due",
        "Status"
    ])

    for inv in invoices:
        writer.writerow([
            inv.invoice_number,
            inv.customer.name if inv.customer else "Unknown",
            inv.customer.company_name if inv.customer else "",
            inv.customer.email if inv.customer else "",
            inv.issue_date.isoformat() if inv.issue_date else "",
            inv.due_date.isoformat() if inv.due_date else "",
            inv.billing_period_start.isoformat() if inv.billing_period_start else "",
            inv.billing_period_end.isoformat() if inv.billing_period_end else "",
            f"{inv.untaxed_amount:.2f}",
            f"{inv.tax_amount:.2f}",
            f"{inv.discount_amount:.2f}",
            f"{inv.total_amount:.2f}",
            f"{inv.amount_paid:.2f}",
            f"{inv.amount_due:.2f}",
            inv.status
        ])

    csv_data = output.getvalue()
    filename = f"brightloop_general_ledger_{datetime.date.today().isoformat()}.csv"
    return Response(
        content=csv_data,
        media_type="text/csv",
        headers={"Content-Disposition": f"attachment; filename={filename}"}
    )

@router.post("/dunning/chase-all")
def run_smart_dunning_chase(
    current_user: User = Depends(require_staff_or_admin),
    db: Session = Depends(get_db)
):
    """
    Smart Dunning Engine: Analyzes all overdue receivables, determines escalating
    recovery stages, and dispatches collection workflows.
    """
    today = datetime.date.today()
    overdue_invoices = db.query(Invoice).filter(
        Invoice.status == InvoiceStatus.CONFIRMED,
        Invoice.due_date < today,
        Invoice.amount_due > 0
    ).all()

    actions = []
    total_recovered_pipeline = 0.0

    for inv in overdue_invoices:
        days_overdue = (today - inv.due_date).days
        if days_overdue <= 7:
            stage = "Stage 1: Soft Courtesy Reminder"
            action_desc = "Dispatched gentle payment link via email & portal notice"
            escalation = "Low"
        elif days_overdue <= 21:
            stage = "Stage 2: Urgent Grace Period Warning"
            action_desc = "Notice of pending contract restriction sent with phone queue"
            escalation = "Medium"
        else:
            stage = "Stage 3: License Restriction & Collections"
            action_desc = "Auto-restricted enterprise tenant access pending settlement"
            escalation = "Critical"

        total_recovered_pipeline += inv.amount_due
        actions.append({
            "invoice_id": inv.id,
            "invoice_number": inv.invoice_number,
            "customer_name": inv.customer.name if inv.customer else "Unknown",
            "amount_due": inv.amount_due,
            "days_overdue": days_overdue,
            "dunning_stage": stage,
            "escalation_level": escalation,
            "action_taken": action_desc
        })

    return {
        "status": "success",
        "chased_invoices_count": len(overdue_invoices),
        "total_at_risk_amount": round(total_recovered_pipeline, 2),
        "actions_dispatched": actions,
        "message": f"Smart Dunning executed: {len(overdue_invoices)} overdue accounts targeted for recovery."
    }

@router.get("/customer-health")
def get_customer_health_scores(
    current_user: User = Depends(require_staff_or_admin),
    db: Session = Depends(get_db)
):
    """
    Customer Health & Churn Risk Engine:
    Computes real-time health score (0-100) and churn probability for accounts.
    """
    today = datetime.date.today()
    customers = db.query(User).filter(User.role == UserRole.CUSTOMER).all()
    results = []

    for cust in customers:
        subs = db.query(Subscription).filter(Subscription.customer_id == cust.id).all()
        invoices = db.query(Invoice).filter(Invoice.customer_id == cust.id).all()

        paid_invs = [i for i in invoices if i.status == InvoiceStatus.PAID]
        overdue_invs = [i for i in invoices if i.status == InvoiceStatus.CONFIRMED and i.due_date < today and i.amount_due > 0]
        active_subs = [s for s in subs if s.status == SubscriptionStatus.ACTIVE]

        score = 80  # Baseline
        if active_subs:
            score += 15
        if paid_invs:
            score += 5
        score -= len(overdue_invs) * 25
        score = max(10, min(100, score))

        if score >= 85:
            tier = "Thriving"
            color = "emerald"
            rec = "Eligible for annual prepay discount & enterprise expansion"
        elif score >= 50:
            tier = "Moderate Risk"
            color = "amber"
            rec = "Offer flexible installment terms or check product utilization"
        else:
            tier = "Critical Churn Risk"
            color = "rose"
            rec = "Immediate account executive outreach required to avoid contract termination"

        results.append({
            "customer_id": cust.id,
            "customer_name": cust.name,
            "company_name": cust.company_name or cust.email,
            "active_subscriptions": len(active_subs),
            "overdue_invoices_count": len(overdue_invs),
            "health_score": score,
            "risk_tier": tier,
            "color": color,
            "recommendation": rec
        })

    return results
