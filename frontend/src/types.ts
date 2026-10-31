export type UserRole = 'admin' | 'staff' | 'customer';

export interface User {
  id: number;
  email: string;
  name: string;
  role: UserRole;
  company_name?: string;
  phone?: string;
  address?: string;
  created_at?: string;
}

export interface ProductVariant {
  id: number;
  product_id: number;
  attribute_name: string;
  attribute_value: string;
  extra_price: number;
}

export interface Product {
  id: number;
  name: string;
  type: string;
  sales_price: number;
  cost_price: number;
  notes?: string;
  is_active: boolean;
  variants: ProductVariant[];
}

export interface Plan {
  id: number;
  name: string;
  description?: string;
  cost: number;
  billing_interval: 'daily' | 'weekly' | 'monthly' | 'yearly';
  min_quantity: number;
  start_date: string;
  end_date?: string;
  auto_close_on_end: boolean;
  allow_early_close: boolean;
  allow_pause: boolean;
  allow_renew: boolean;
  is_active: boolean;
}

export interface TaxRule {
  id: number;
  name: string;
  rate_percent: number;
  country?: string;
  is_active: boolean;
}

export interface DiscountRule {
  id: number;
  code: string;
  description?: string;
  discount_type: 'percentage' | 'fixed';
  discount_value: number;
  min_purchase_amount: number;
  min_quantity: number;
  start_date: string;
  end_date: string;
  usage_limit?: number;
  used_count: number;
  applies_to: 'whole_subscription' | 'specific_product';
  product_id?: number;
  is_active: boolean;
}

export interface QuotationTemplateLine {
  id: number;
  product_id: number;
  variant_id?: number;
  quantity: number;
  unit_price: number;
  product?: Product;
  variant?: ProductVariant;
}

export interface QuotationTemplate {
  id: number;
  name: string;
  plan_id: number;
  validity_days: number;
  payment_terms: string;
  notes?: string;
  plan?: Plan;
  lines: QuotationTemplateLine[];
}

export interface SubscriptionLine {
  id: number;
  product_id: number;
  variant_id?: number;
  quantity: number;
  unit_price: number;
  tax_rate: number;
  amount: number;
  product?: Product;
  variant?: ProductVariant;
}

export type SubscriptionStatus = 'Draft' | 'Quotation' | 'Confirmed' | 'Active' | 'Paused' | 'Closed';

export interface Subscription {
  id: number;
  subscription_number: string;
  customer_id: number;
  plan_id: number;
  discount_id?: number;
  status: SubscriptionStatus;
  start_date: string;
  expiry_date: string;
  quotation_expiry_date?: string;
  payment_terms: string;
  last_billing_date?: string;
  next_billing_date: string;
  total_untaxed: number;
  total_tax: number;
  total_discount: number;
  total_amount: number;
  notes?: string;
  created_at?: string;
  customer?: User;
  plan?: Plan;
  discount?: DiscountRule;
  lines: SubscriptionLine[];
}

export interface InvoiceLine {
  id: number;
  product_id?: number;
  variant_id?: number;
  description: string;
  quantity: number;
  unit_price: number;
  tax_rate: number;
  discount_amount: number;
  amount: number;
}

export interface Payment {
  id: number;
  invoice_id: number;
  payment_method: string;
  amount: number;
  payment_date: string;
  reference_note?: string;
  created_at?: string;
}

export type InvoiceStatus = 'Draft' | 'Confirmed' | 'Paid' | 'Cancelled';

export interface Invoice {
  id: number;
  invoice_number: string;
  subscription_id?: number;
  customer_id: number;
  status: InvoiceStatus;
  issue_date: string;
  due_date: string;
  billing_period_start?: string;
  billing_period_end?: string;
  untaxed_amount: number;
  tax_amount: number;
  discount_amount: number;
  total_amount: number;
  amount_paid: number;
  amount_due: number;
  sent_at?: string;
  notes?: string;
  customer?: User;
  lines: InvoiceLine[];
  payments: Payment[];
}

export interface FinanceSummary {
  active_subscriptions_count: number;
  total_subscriptions_count: number;
  total_revenue_collected: number;
  total_outstanding_amount: number;
  overdue_invoices_count: number;
  overdue_invoices_amount: number;
  mrr: number;
  arr: number;
  paid_invoices_count: number;
  unpaid_invoices_count: number;
}
