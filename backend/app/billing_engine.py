import datetime
from dateutil.relativedelta import relativedelta
from typing import List, Tuple, Optional
from sqlalchemy.orm import Session
from .models import (
    Subscription, SubscriptionStatus, Invoice, InvoiceLine, InvoiceStatus,
    Plan, BillingInterval, DiscountRule, DiscountType, DiscountAppliesTo
)

def add_interval(d: datetime.date, interval: str) -> datetime.date:
    if interval == BillingInterval.DAILY:
        return d + datetime.timedelta(days=1)
    elif interval == BillingInterval.WEEKLY:
        return d + datetime.timedelta(weeks=1)
    elif interval == BillingInterval.MONTHLY:
        return d + relativedelta(months=1)
    elif interval == BillingInterval.YEARLY:
        return d + relativedelta(years=1)
    return d + relativedelta(months=1)

def parse_payment_terms_days(terms: str) -> int:
    terms_lower = (terms or "").lower().strip()
    if "immediate" in terms_lower:
        return 0
    elif "15" in terms_lower:
        return 15
    elif "30" in terms_lower:
        return 30
    elif "60" in terms_lower:
        return 60
    elif "90" in terms_lower:
        return 90
    return 30 # default 30 days

def generate_invoice_for_subscription(
    db: Session,
    subscription: Subscription,
    billing_date: Optional[datetime.date] = None,
    force: bool = False
) -> Tuple[Optional[Invoice], Optional[str]]:
    """
    Generates a draft invoice from an active subscription.
    Ensures idempotency: checks that an invoice hasn't already been issued
    for this subscription covering the current period.
    """
    if billing_date is None:
        billing_date = datetime.date.today()

    if subscription.status != SubscriptionStatus.ACTIVE and not force:
        return None, f"Subscription {subscription.subscription_number} is not active (status: {subscription.status})"

    # Check plan validity & auto close
    plan = subscription.plan
    if plan and plan.auto_close_on_end and subscription.expiry_date and billing_date >= subscription.expiry_date:
        subscription.status = SubscriptionStatus.CLOSED
        db.commit()
        return None, f"Subscription {subscription.subscription_number} reached expiry and was auto-closed as per plan policy"

    period_start = subscription.last_billing_date or subscription.start_date
    period_end = add_interval(period_start, plan.billing_interval if plan else BillingInterval.MONTHLY)

    # Check idempotency: has an invoice already been generated for this exact period start?
    existing_invoice = db.query(Invoice).filter(
        Invoice.subscription_id == subscription.id,
        Invoice.billing_period_start == period_start,
        Invoice.status != InvoiceStatus.CANCELLED
    ).first()

    if existing_invoice and not force:
        return None, f"Invoice already generated for subscription {subscription.subscription_number} for period starting {period_start}"

    # Calculate invoice number
    count = db.query(Invoice).count() + 1
    invoice_num = f"INV-{datetime.date.today().year}-{count:05d}"
    # Ensure unique
    while db.query(Invoice).filter(Invoice.invoice_number == invoice_num).first() is not None:
        count += 1
        invoice_num = f"INV-{datetime.date.today().year}-{count:05d}"

    # Due date calculation
    term_days = parse_payment_terms_days(subscription.payment_terms)
    due_date = billing_date + datetime.timedelta(days=term_days)

    # Prepare Discount Rule if any
    discount_rule: Optional[DiscountRule] = subscription.discount
    discount_applicable = False
    if discount_rule and discount_rule.is_active:
        # Check dates
        if discount_rule.start_date <= billing_date <= discount_rule.end_date:
            # Check usage limit
            if discount_rule.usage_limit is None or discount_rule.used_count < discount_rule.usage_limit:
                discount_applicable = True

    # Build Invoice Lines
    untaxed_total = 0.0
    tax_total = 0.0
    discount_total = 0.0

    # First pass: calculate total quantity and base untaxed amount to check discount conditions
    total_qty = sum(line.quantity for line in subscription.lines)
    subtotal_before_discount = sum(line.quantity * line.unit_price for line in subscription.lines)

    if discount_applicable:
        if discount_rule.min_quantity > 0 and total_qty < discount_rule.min_quantity:
            discount_applicable = False
        if discount_rule.min_purchase_amount > 0 and subtotal_before_discount < discount_rule.min_purchase_amount:
            discount_applicable = False

    invoice = Invoice(
        invoice_number=invoice_num,
        subscription_id=subscription.id,
        customer_id=subscription.customer_id,
        status=InvoiceStatus.DRAFT,
        issue_date=billing_date,
        due_date=due_date,
        billing_period_start=period_start,
        billing_period_end=period_end,
        notes=f"Recurring billing for {subscription.subscription_number} ({period_start} to {period_end})"
    )
    db.add(invoice)
    db.flush() # get invoice.id

    for sub_line in subscription.lines:
        line_base = sub_line.quantity * sub_line.unit_price
        line_disc = 0.0

        if discount_applicable:
            if discount_rule.applies_to == DiscountAppliesTo.WHOLE_SUBSCRIPTION:
                if discount_rule.discount_type == DiscountType.PERCENTAGE:
                    line_disc = line_base * (discount_rule.discount_value / 100.0)
                elif discount_rule.discount_type == DiscountType.FIXED:
                    # Distribute fixed discount proportionally
                    if subtotal_before_discount > 0:
                        line_disc = (line_base / subtotal_before_discount) * discount_rule.discount_value
            elif discount_rule.applies_to == DiscountAppliesTo.SPECIFIC_PRODUCT:
                if discount_rule.product_id == sub_line.product_id:
                    if discount_rule.discount_type == DiscountType.PERCENTAGE:
                        line_disc = line_base * (discount_rule.discount_value / 100.0)
                    elif discount_rule.discount_type == DiscountType.FIXED:
                        line_disc = min(discount_rule.discount_value, line_base)

        line_tax = (line_base - line_disc) * (sub_line.tax_rate / 100.0)
        line_final = (line_base - line_disc) + line_tax

        untaxed_total += line_base
        discount_total += line_disc
        tax_total += line_tax

        # Description
        prod_name = sub_line.product.name if sub_line.product else "Service Item"
        if sub_line.variant:
            prod_name += f" ({sub_line.variant.attribute_name}: {sub_line.variant.attribute_value})"

        inv_line = InvoiceLine(
            invoice_id=invoice.id,
            product_id=sub_line.product_id,
            variant_id=sub_line.variant_id,
            description=prod_name,
            quantity=sub_line.quantity,
            unit_price=sub_line.unit_price,
            tax_rate=sub_line.tax_rate,
            discount_amount=round(line_disc, 2),
            amount=round(line_final, 2)
        )
        db.add(inv_line)

    # If discount applied, increment its used_count
    if discount_applicable and discount_total > 0:
        discount_rule.used_count += 1
        db.add(discount_rule)

    invoice.untaxed_amount = round(untaxed_total, 2)
    invoice.tax_amount = round(tax_total, 2)
    invoice.discount_amount = round(discount_total, 2)
    invoice.total_amount = round((untaxed_total - discount_total) + tax_total, 2)
    invoice.amount_paid = 0.0
    invoice.amount_due = invoice.total_amount

    # Update subscription billing dates
    subscription.last_billing_date = billing_date
    subscription.next_billing_date = add_interval(billing_date, plan.billing_interval if plan else BillingInterval.MONTHLY)
    
    # Check if subscription reaches end date
    if plan and plan.auto_close_on_end and subscription.expiry_date and subscription.next_billing_date > subscription.expiry_date:
        subscription.status = SubscriptionStatus.CLOSED

    db.add(subscription)
    db.commit()
    db.refresh(invoice)

    return invoice, None

def run_billing_day(db: Session, target_date: Optional[datetime.date] = None) -> dict:
    """
    Executes batch billing day:
    Finds all active subscriptions due on or before target_date.
    Generates invoices, ensures idempotency, and updates next billing dates.
    """
    if target_date is None:
        target_date = datetime.date.today()

    active_subs = db.query(Subscription).filter(
        Subscription.status == SubscriptionStatus.ACTIVE,
        Subscription.next_billing_date <= target_date
    ).all()

    generated_invoices = []
    errors = []

    for sub in active_subs:
        inv, err = generate_invoice_for_subscription(db, sub, billing_date=target_date)
        if inv:
            generated_invoices.append(inv)
        elif err:
            errors.append(err)

    return {
        "target_date": str(target_date),
        "subscriptions_evaluated": len(active_subs),
        "invoices_generated": len(generated_invoices),
        "invoice_ids": [inv.id for inv in generated_invoices],
        "errors": errors
    }
