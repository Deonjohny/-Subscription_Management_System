import datetime
from sqlalchemy.orm import Session
from .database import engine, Base, SessionLocal
from .models import (
    User, UserRole, Product, ProductVariant, Plan, BillingInterval,
    TaxRule, DiscountRule, DiscountType, DiscountAppliesTo,
    QuotationTemplate, QuotationTemplateLine,
    Subscription, SubscriptionLine, SubscriptionStatus,
    Invoice, InvoiceLine, InvoiceStatus, Payment
)
from .auth import hash_password

def seed_database():
    Base.metadata.create_all(bind=engine)
    db: Session = SessionLocal()

    try:
        # Check if already seeded
        if db.query(User).filter(User.email == "admin@brightloop.io").first():
            print("Database already seeded.")
            return

        print("Seeding Brightloop Software database...")

        # 1. Users
        admin = User(
            email="admin@brightloop.io",
            password_hash=hash_password("BrightloopAdmin!2026"),
            name="Alexander Vance (Admin)",
            role=UserRole.ADMIN,
            company_name="Brightloop Software HQ",
            phone="+1 (800) 555-0199"
        )
        staff = User(
            email="sarah.sales@brightloop.io",
            password_hash=hash_password("StaffMember!2026"),
            name="Sarah Jenkins (Sales Rep)",
            role=UserRole.STAFF,
            company_name="Brightloop Software",
            phone="+1 (800) 555-0144"
        )
        cust1 = User(
            email="alice@techflow.com",
            password_hash=hash_password("CustomerPass!2026"),
            name="Alice Morgan",
            role=UserRole.CUSTOMER,
            company_name="TechFlow Solutions LLC",
            phone="+1 (415) 555-7821",
            address="100 Market St, Suite 400, San Francisco, CA"
        )
        cust2 = User(
            email="bob@retailhub.io",
            password_hash=hash_password("CustomerPass!2026"),
            name="Bob Henderson",
            role=UserRole.CUSTOMER,
            company_name="RetailHub Omnichannel",
            phone="+1 (212) 555-9311",
            address="450 Broadway, New York, NY"
        )
        cust3 = User(
            email="charlie@logistics.net",
            password_hash=hash_password("CustomerPass!2026"),
            name="Charlie Liu",
            role=UserRole.CUSTOMER,
            company_name="Rapid Logistics Group",
            phone="+1 (312) 555-4819",
            address="789 Industrial Pkwy, Chicago, IL"
        )
        db.add_all([admin, staff, cust1, cust2, cust3])
        db.flush()

        # 2. Tax Rules
        tax_vat = TaxRule(name="VAT Standard (15%)", rate_percent=15.0, country="Global", is_active=True)
        tax_us = TaxRule(name="Sales Tax (8%)", rate_percent=8.0, country="USA", is_active=True)
        tax_zero = TaxRule(name="Zero Tax (0%)", rate_percent=0.0, country="Global", is_active=True)
        db.add_all([tax_vat, tax_us, tax_zero])
        db.flush()

        # 3. Products & Variants (including Odoo brand +560 requirement!)
        p1 = Product(
            name="Brightloop Cloud ERP",
            type="software",
            sales_price=1200.0,
            cost_price=250.0,
            notes="Unified enterprise management core platform.",
            is_active=True
        )
        p2 = Product(
            name="Brightloop CRM Pro",
            type="software",
            sales_price=450.0,
            cost_price=60.0,
            notes="Customer relationship & deal tracking suite.",
            is_active=True
        )
        p3 = Product(
            name="Priority 24/7 SLA Support",
            type="service",
            sales_price=300.0,
            cost_price=50.0,
            notes="Round-the-clock dedicated technical assistance.",
            is_active=True
        )
        p4 = Product(
            name="Analytics & Business Intelligence",
            type="addon",
            sales_price=250.0,
            cost_price=40.0,
            notes="Real-time KPI reports and automated forecasting.",
            is_active=True
        )
        db.add_all([p1, p2, p3, p4])
        db.flush()

        # Specific variant requirement: choosing Odoo brand adds 560 to price!
        v1_odoo = ProductVariant(
            product_id=p1.id,
            attribute_name="Brand",
            attribute_value="Odoo Edition",
            extra_price=560.0
        )
        v1_std = ProductVariant(
            product_id=p1.id,
            attribute_name="Brand",
            attribute_value="Standard Edition",
            extra_price=0.0
        )
        db.add_all([v1_odoo, v1_std])
        db.flush()

        # 4. Plans
        plan_monthly = Plan(
            name="Standard Monthly Plan",
            description="Billed each month. Flexible cancellation and pausing.",
            cost=450.0,
            billing_interval=BillingInterval.MONTHLY,
            min_quantity=1,
            start_date=datetime.date(2026, 1, 1),
            auto_close_on_end=False,
            allow_early_close=True,
            allow_pause=True,
            allow_renew=True
        )
        plan_yearly = Plan(
            name="Enterprise Yearly Contract",
            description="Annual commitment for high-volume enterprises.",
            cost=4800.0,
            billing_interval=BillingInterval.YEARLY,
            min_quantity=5, # large customer seats requirement
            start_date=datetime.date(2026, 1, 1),
            auto_close_on_end=False,
            allow_early_close=False, # yearly contract
            allow_pause=True,
            allow_renew=True
        )
        plan_weekly = Plan(
            name="Weekly Sprint Pilot",
            description="Short-cycle billing for trials and pilot projects.",
            cost=150.0,
            billing_interval=BillingInterval.WEEKLY,
            min_quantity=1,
            start_date=datetime.date(2026, 1, 1),
            auto_close_on_end=True, # Auto closes when period ends
            allow_early_close=True,
            allow_pause=False,
            allow_renew=False
        )
        db.add_all([plan_monthly, plan_yearly, plan_weekly])
        db.flush()

        # 5. Discount Rules
        disc_seats = DiscountRule(
            code="VOLUME20",
            description="20% discount for orders taking 5 or more seats",
            discount_type=DiscountType.PERCENTAGE,
            discount_value=20.0,
            min_purchase_amount=0.0,
            min_quantity=5,
            start_date=datetime.date(2026, 1, 1),
            end_date=datetime.date(2026, 12, 31),
            usage_limit=50,
            used_count=3,
            applies_to=DiscountAppliesTo.WHOLE_SUBSCRIPTION,
            is_active=True
        )
        disc_fixed = DiscountRule(
            code="WELCOME100",
            description="$100 credit for contracts exceeding $1,000",
            discount_type=DiscountType.FIXED,
            discount_value=100.0,
            min_purchase_amount=1000.0,
            min_quantity=1,
            start_date=datetime.date(2026, 1, 1),
            end_date=datetime.date(2026, 12, 31),
            usage_limit=100,
            used_count=8,
            applies_to=DiscountAppliesTo.WHOLE_SUBSCRIPTION,
            is_active=True
        )
        db.add_all([disc_seats, disc_fixed])
        db.flush()

        # 6. Quotation Template
        tpl_enterprise = QuotationTemplate(
            name="Enterprise Cloud ERP Template",
            plan_id=plan_yearly.id,
            validity_days=30,
            payment_terms="Net 30",
            notes="Default package for large corporate clients."
        )
        db.add(tpl_enterprise)
        db.flush()

        tpl_line1 = QuotationTemplateLine(
            template_id=tpl_enterprise.id,
            product_id=p1.id,
            variant_id=v1_odoo.id,
            quantity=5,
            unit_price=1760.0 # 1200 + 560 Odoo brand variant
        )
        tpl_line2 = QuotationTemplateLine(
            template_id=tpl_enterprise.id,
            product_id=p3.id,
            quantity=1,
            unit_price=300.0
        )
        db.add_all([tpl_line1, tpl_line2])
        db.flush()

        # 7. Subscriptions & Invoices for TechFlow Solutions (Alice)
        today = datetime.date.today()
        sub1 = Subscription(
            subscription_number="SUB-2026-00001",
            customer_id=cust1.id,
            plan_id=plan_yearly.id,
            discount_id=disc_seats.id,
            status=SubscriptionStatus.ACTIVE,
            start_date=today - datetime.timedelta(days=90),
            expiry_date=today + datetime.timedelta(days=275),
            payment_terms="Net 30",
            last_billing_date=today - datetime.timedelta(days=90),
            next_billing_date=today + datetime.timedelta(days=275),
            total_untaxed=8800.0,
            total_tax=1056.0,
            total_discount=1760.0,
            total_amount=8096.0,
            notes="Annual enterprise subscription with Odoo brand variant."
        )
        db.add(sub1)
        db.flush()

        sub1_line = SubscriptionLine(
            subscription_id=sub1.id,
            product_id=p1.id,
            variant_id=v1_odoo.id,
            quantity=5,
            unit_price=1760.0,
            tax_rate=15.0,
            amount=8096.0
        )
        db.add(sub1_line)
        db.flush()

        # Invoices for sub1: One PAID invoice
        inv1 = Invoice(
            invoice_number="INV-2026-00001",
            subscription_id=sub1.id,
            customer_id=cust1.id,
            status=InvoiceStatus.PAID,
            issue_date=today - datetime.timedelta(days=90),
            due_date=today - datetime.timedelta(days=60),
            billing_period_start=today - datetime.timedelta(days=90),
            billing_period_end=today + datetime.timedelta(days=275),
            untaxed_amount=8800.0,
            tax_amount=1056.0,
            discount_amount=1760.0,
            total_amount=8096.0,
            amount_paid=8096.0,
            amount_due=0.0,
            sent_at=datetime.datetime.utcnow() - datetime.timedelta(days=90),
            notes="Paid in full via Bank Transfer."
        )
        db.add(inv1)
        db.flush()

        inv1_line = InvoiceLine(
            invoice_id=inv1.id,
            product_id=p1.id,
            variant_id=v1_odoo.id,
            description="Brightloop Cloud ERP (Brand: Odoo Edition)",
            quantity=5,
            unit_price=1760.0,
            tax_rate=15.0,
            discount_amount=1760.0,
            amount=8096.0
        )
        db.add(inv1_line)
        db.flush()

        pay1 = Payment(
            invoice_id=inv1.id,
            payment_method="Bank Transfer",
            amount=8096.0,
            payment_date=today - datetime.timedelta(days=65),
            reference_note="Ref: WIRE-TECHFLOW-9921",
            recorded_by_id=staff.id
        )
        db.add(pay1)

        # 8. Subscription & OVERDUE Invoice for RetailHub (Bob)
        sub2 = Subscription(
            subscription_number="SUB-2026-00002",
            customer_id=cust2.id,
            plan_id=plan_monthly.id,
            status=SubscriptionStatus.ACTIVE,
            start_date=today - datetime.timedelta(days=45),
            expiry_date=today + datetime.timedelta(days=320),
            payment_terms="Net 15",
            last_billing_date=today - datetime.timedelta(days=45),
            next_billing_date=today - datetime.timedelta(days=15), # Overdue for billing
            total_untaxed=700.0,
            total_tax=105.0,
            total_discount=0.0,
            total_amount=805.0,
            notes="Monthly CRM and Analytics suite."
        )
        db.add(sub2)
        db.flush()

        sub2_line1 = SubscriptionLine(
            subscription_id=sub2.id,
            product_id=p2.id,
            quantity=1,
            unit_price=450.0,
            tax_rate=15.0,
            amount=517.5
        )
        sub2_line2 = SubscriptionLine(
            subscription_id=sub2.id,
            product_id=p4.id,
            quantity=1,
            unit_price=250.0,
            tax_rate=15.0,
            amount=287.5
        )
        db.add_all([sub2_line1, sub2_line2])
        db.flush()

        # Overdue Invoice for sub2
        inv2 = Invoice(
            invoice_number="INV-2026-00002",
            subscription_id=sub2.id,
            customer_id=cust2.id,
            status=InvoiceStatus.CONFIRMED,
            issue_date=today - datetime.timedelta(days=30),
            due_date=today - datetime.timedelta(days=15), # Past due!
            billing_period_start=today - datetime.timedelta(days=30),
            billing_period_end=today,
            untaxed_amount=700.0,
            tax_amount=105.0,
            discount_amount=0.0,
            total_amount=805.0,
            amount_paid=0.0,
            amount_due=805.0, # OVERDUE!
            sent_at=datetime.datetime.utcnow() - datetime.timedelta(days=29),
            notes="Overdue monthly invoice. Please follow up."
        )
        db.add(inv2)
        db.flush()

        inv2_line1 = InvoiceLine(
            invoice_id=inv2.id,
            product_id=p2.id,
            description="Brightloop CRM Pro",
            quantity=1,
            unit_price=450.0,
            tax_rate=15.0,
            discount_amount=0.0,
            amount=517.5
        )
        inv2_line2 = InvoiceLine(
            invoice_id=inv2.id,
            product_id=p4.id,
            description="Analytics & Business Intelligence",
            quantity=1,
            unit_price=250.0,
            tax_rate=15.0,
            discount_amount=0.0,
            amount=287.5
        )
        db.add_all([inv2_line1, inv2_line2])

        # 9. Quotation for Charlie (Rapid Logistics)
        sub3 = Subscription(
            subscription_number="SUB-2026-00003",
            customer_id=cust3.id,
            plan_id=plan_yearly.id,
            discount_id=disc_fixed.id,
            status=SubscriptionStatus.QUOTATION, # In Quotation stage
            start_date=today,
            expiry_date=today + datetime.timedelta(days=365),
            quotation_expiry_date=today + datetime.timedelta(days=30),
            payment_terms="Net 30",
            next_billing_date=today,
            total_untaxed=1500.0,
            total_tax=112.0,
            total_discount=100.0,
            total_amount=1512.0,
            notes="Special quotation prepared from Enterprise template."
        )
        db.add(sub3)
        db.flush()

        sub3_line = SubscriptionLine(
            subscription_id=sub3.id,
            product_id=p1.id,
            variant_id=v1_std.id,
            quantity=1,
            unit_price=1200.0,
            tax_rate=8.0,
            amount=1296.0
        )
        db.add(sub3_line)

        db.commit()
        print("Brightloop Software database successfully seeded with initial demo data!")

    except Exception as e:
        db.rollback()
        print(f"Error seeding database: {e}")
        raise
    finally:
        db.close()

if __name__ == "__main__":
    seed_database()
