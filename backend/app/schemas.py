import re
from typing import List, Optional
from datetime import date, datetime
from pydantic import BaseModel, field_validator

# --- Auth & User Schemas ---
def validate_email_format(v: str) -> str:
    v = v.strip().lower()
    if not re.match(r"^[^@]+@[^@]+\.[^@]+$", v):
        raise ValueError("Invalid email format")
    return v

def validate_password_strength(v: str) -> str:
    if len(v) <= 8:
        raise ValueError("Password must be more than 8 characters long")
    if not re.search(r"[A-Z]", v):
        raise ValueError("Password must contain at least one uppercase letter")
    if not re.search(r"[a-z]", v):
        raise ValueError("Password must contain at least one lowercase letter")
    if not re.search(r"[!@#$%^&*(),.?\":{}|<>]", v):
        raise ValueError("Password must contain at least one special character")
    return v

class UserRegister(BaseModel):
    email: str
    password: str
    name: str
    company_name: Optional[str] = None
    phone: Optional[str] = None
    address: Optional[str] = None

    @field_validator("email")
    @classmethod
    def check_email(cls, v):
        return validate_email_format(v)

    @field_validator("password")
    @classmethod
    def check_password(cls, v):
        return validate_password_strength(v)

class StaffCreate(BaseModel):
    email: str
    password: str
    name: str
    phone: Optional[str] = None

    @field_validator("email")
    @classmethod
    def check_email(cls, v):
        return validate_email_format(v)

    @field_validator("password")
    @classmethod
    def check_password(cls, v):
        return validate_password_strength(v)

class UserLogin(BaseModel):
    email: str
    password: str

class ForgotPasswordRequest(BaseModel):
    email: str

class ResetPasswordRequest(BaseModel):
    email: str
    reset_token: str
    new_password: str

    @field_validator("new_password")
    @classmethod
    def check_password(cls, v):
        return validate_password_strength(v)

class UserResponse(BaseModel):
    id: int
    email: str
    name: str
    role: str
    company_name: Optional[str] = None
    phone: Optional[str] = None
    address: Optional[str] = None
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse

# --- Product & Variant Schemas ---
class ProductVariantBase(BaseModel):
    attribute_name: str
    attribute_value: str
    extra_price: float = 0.0

class ProductVariantCreate(ProductVariantBase):
    pass

class ProductVariantResponse(ProductVariantBase):
    id: int
    product_id: int

    class Config:
        from_attributes = True

class ProductBase(BaseModel):
    name: str
    type: str = "software"
    sales_price: float
    cost_price: float = 0.0
    notes: Optional[str] = None
    is_active: bool = True

class ProductCreate(ProductBase):
    variants: List[ProductVariantCreate] = []

class ProductUpdate(BaseModel):
    name: Optional[str] = None
    type: Optional[str] = None
    sales_price: Optional[float] = None
    cost_price: Optional[float] = None
    notes: Optional[str] = None
    is_active: Optional[bool] = None

class ProductResponse(ProductBase):
    id: int
    created_at: Optional[datetime] = None
    variants: List[ProductVariantResponse] = []

    class Config:
        from_attributes = True

# --- Plan Schemas ---
class PlanBase(BaseModel):
    name: str
    description: Optional[str] = None
    cost: float
    billing_interval: str # daily, weekly, monthly, yearly
    min_quantity: int = 1
    start_date: date
    end_date: Optional[date] = None
    auto_close_on_end: bool = False
    allow_early_close: bool = True
    allow_pause: bool = True
    allow_renew: bool = True
    is_active: bool = True

class PlanCreate(PlanBase):
    pass

class PlanUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    cost: Optional[float] = None
    billing_interval: Optional[str] = None
    min_quantity: Optional[int] = None
    start_date: Optional[date] = None
    end_date: Optional[date] = None
    auto_close_on_end: Optional[bool] = None
    allow_early_close: Optional[bool] = None
    allow_pause: Optional[bool] = None
    allow_renew: Optional[bool] = None
    is_active: Optional[bool] = None

class PlanResponse(PlanBase):
    id: int
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True

# --- Tax Rule Schemas ---
class TaxRuleBase(BaseModel):
    name: str
    rate_percent: float
    country: Optional[str] = None
    is_active: bool = True

class TaxRuleCreate(TaxRuleBase):
    pass

class TaxRuleResponse(TaxRuleBase):
    id: int

    class Config:
        from_attributes = True

# --- Discount Rule Schemas ---
class DiscountRuleBase(BaseModel):
    code: str
    description: Optional[str] = None
    discount_type: str # percentage or fixed
    discount_value: float
    min_purchase_amount: float = 0.0
    min_quantity: int = 0
    start_date: date
    end_date: date
    usage_limit: Optional[int] = None
    applies_to: str = "whole_subscription" # whole_subscription or specific_product
    product_id: Optional[int] = None
    is_active: bool = True

class DiscountRuleCreate(DiscountRuleBase):
    pass

class DiscountRuleResponse(DiscountRuleBase):
    id: int
    used_count: int = 0
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True

# --- Quotation Template Schemas ---
class QuotationTemplateLineBase(BaseModel):
    product_id: int
    variant_id: Optional[int] = None
    quantity: int = 1
    unit_price: float

class QuotationTemplateLineCreate(QuotationTemplateLineBase):
    pass

class QuotationTemplateLineResponse(QuotationTemplateLineBase):
    id: int
    product: Optional[ProductResponse] = None
    variant: Optional[ProductVariantResponse] = None

    class Config:
        from_attributes = True

class QuotationTemplateBase(BaseModel):
    name: str
    plan_id: int
    validity_days: int = 30
    payment_terms: str = "Net 30"
    notes: Optional[str] = None

class QuotationTemplateCreate(QuotationTemplateBase):
    lines: List[QuotationTemplateLineCreate] = []

class QuotationTemplateResponse(QuotationTemplateBase):
    id: int
    plan: Optional[PlanResponse] = None
    lines: List[QuotationTemplateLineResponse] = []
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True

# --- Subscription Schemas ---
class SubscriptionLineBase(BaseModel):
    product_id: int
    variant_id: Optional[int] = None
    quantity: int = 1
    unit_price: float
    tax_rate: float = 0.0

class SubscriptionLineCreate(SubscriptionLineBase):
    pass

class SubscriptionLineResponse(SubscriptionLineBase):
    id: int
    amount: float
    product: Optional[ProductResponse] = None
    variant: Optional[ProductVariantResponse] = None

    class Config:
        from_attributes = True

class SubscriptionCreate(BaseModel):
    customer_id: int
    plan_id: int
    discount_code: Optional[str] = None
    payment_terms: str = "Net 30"
    start_date: date
    expiry_date: Optional[date] = None
    quotation_validity_days: Optional[int] = 30
    lines: List[SubscriptionLineCreate]
    status: Optional[str] = "Draft" # Draft or Quotation
    notes: Optional[str] = None

class SubscriptionStatusUpdate(BaseModel):
    status: str # Draft -> Quotation -> Confirmed -> Active -> Paused -> Closed

class SubscriptionResponse(BaseModel):
    id: int
    subscription_number: str
    customer_id: int
    plan_id: int
    discount_id: Optional[int] = None
    status: str
    start_date: date
    expiry_date: date
    quotation_expiry_date: Optional[date] = None
    payment_terms: str
    last_billing_date: Optional[date] = None
    next_billing_date: date
    total_untaxed: float
    total_tax: float
    total_discount: float
    total_amount: float
    notes: Optional[str] = None
    created_at: Optional[datetime] = None
    customer: Optional[UserResponse] = None
    plan: Optional[PlanResponse] = None
    discount: Optional[DiscountRuleResponse] = None
    lines: List[SubscriptionLineResponse] = []

    class Config:
        from_attributes = True

# --- Invoice & Payment Schemas ---
class InvoiceLineResponse(BaseModel):
    id: int
    product_id: Optional[int] = None
    variant_id: Optional[int] = None
    description: str
    quantity: int
    unit_price: float
    tax_rate: float
    discount_amount: float
    amount: float
    product: Optional[ProductResponse] = None
    variant: Optional[ProductVariantResponse] = None

    class Config:
        from_attributes = True

class PaymentCreate(BaseModel):
    payment_method: str # Bank Transfer, Credit Card, PayPal, Cash, Direct Debit
    amount: float
    payment_date: date
    reference_note: Optional[str] = None

class PaymentResponse(BaseModel):
    id: int
    invoice_id: int
    payment_method: str
    amount: float
    payment_date: date
    reference_note: Optional[str] = None
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class InvoiceResponse(BaseModel):
    id: int
    invoice_number: str
    subscription_id: Optional[int] = None
    customer_id: int
    status: str # Draft, Confirmed, Paid, Cancelled
    issue_date: date
    due_date: date
    billing_period_start: Optional[date] = None
    billing_period_end: Optional[date] = None
    untaxed_amount: float
    tax_amount: float
    discount_amount: float
    total_amount: float
    amount_paid: float
    amount_due: float
    sent_at: Optional[datetime] = None
    notes: Optional[str] = None
    created_at: Optional[datetime] = None
    customer: Optional[UserResponse] = None
    lines: List[InvoiceLineResponse] = []
    payments: List[PaymentResponse] = []

    class Config:
        from_attributes = True

# --- Finance & End of Month Reports ---
class FinanceSummary(BaseModel):
    active_subscriptions_count: int
    total_subscriptions_count: int
    total_revenue_collected: float
    total_outstanding_amount: float
    overdue_invoices_count: int
    overdue_invoices_amount: float
    mrr: float
    arr: float
    paid_invoices_count: int
    unpaid_invoices_count: int
