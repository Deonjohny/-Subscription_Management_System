import axios from 'axios';
import {
  User, Product, Plan, TaxRule, DiscountRule, QuotationTemplate,
  Subscription, Invoice, FinanceSummary, Payment
} from './types';

const API_BASE = '/api';

const client = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add auth token
client.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const api = {
  // Auth
  login: async (email: string, password: string) => {
    const res = await client.post('/auth/login', { email, password });
    return res.data;
  },
  register: async (data: any) => {
    const res = await client.post('/auth/register', data);
    return res.data;
  },
  getMe: async (): Promise<User> => {
    const res = await client.get('/auth/me');
    return res.data;
  },
  forgotPassword: async (email: string) => {
    const res = await client.post('/auth/forgot-password', { email });
    return res.data;
  },
  resetPassword: async (data: { email: string; reset_token: string; new_password: string }) => {
    const res = await client.post('/auth/reset-password', data);
    return res.data;
  },

  // Users & Staff
  getUsers: async (role?: string): Promise<User[]> => {
    const res = await client.get('/users/', { params: { role } });
    return res.data;
  },
  getCustomers: async (): Promise<User[]> => {
    const res = await client.get('/users/customers');
    return res.data;
  },
  createStaff: async (data: any): Promise<User> => {
    const res = await client.post('/users/staff', data);
    return res.data;
  },

  // Products & Variants
  getProducts: async (): Promise<Product[]> => {
    const res = await client.get('/products/');
    return res.data;
  },
  createProduct: async (data: any): Promise<Product> => {
    const res = await client.post('/products/', data);
    return res.data;
  },
  addProductVariant: async (productId: number, data: any) => {
    const res = await client.post(`/products/${productId}/variants`, data);
    return res.data;
  },

  // Plans
  getPlans: async (): Promise<Plan[]> => {
    const res = await client.get('/plans/');
    return res.data;
  },
  createPlan: async (data: any): Promise<Plan> => {
    const res = await client.post('/plans/', data);
    return res.data;
  },

  // Tax Rules
  getTaxes: async (): Promise<TaxRule[]> => {
    const res = await client.get('/taxes/');
    return res.data;
  },
  createTax: async (data: any): Promise<TaxRule> => {
    const res = await client.post('/taxes/', data);
    return res.data;
  },

  // Discount Rules
  getDiscounts: async (): Promise<DiscountRule[]> => {
    const res = await client.get('/discounts/');
    return res.data;
  },
  createDiscount: async (data: any): Promise<DiscountRule> => {
    const res = await client.post('/discounts/', data);
    return res.data;
  },
  toggleDiscountActive: async (id: number): Promise<DiscountRule> => {
    const res = await client.put(`/discounts/${id}/toggle-active`);
    return res.data;
  },

  // Quotation Templates
  getTemplates: async (): Promise<QuotationTemplate[]> => {
    const res = await client.get('/quotation-templates/');
    return res.data;
  },
  createTemplate: async (data: any): Promise<QuotationTemplate> => {
    const res = await client.post('/quotation-templates/', data);
    return res.data;
  },

  // Subscriptions
  getSubscriptions: async (params?: { status?: string; customer_id?: number }): Promise<Subscription[]> => {
    const res = await client.get('/subscriptions/', { params });
    return res.data;
  },
  getSubscription: async (id: number): Promise<Subscription> => {
    const res = await client.get(`/subscriptions/${id}`);
    return res.data;
  },
  createSubscription: async (data: any): Promise<Subscription> => {
    const res = await client.post('/subscriptions/', data);
    return res.data;
  },
  updateSubscriptionStatus: async (id: number, status: string): Promise<Subscription> => {
    const res = await client.post(`/subscriptions/${id}/status`, { status });
    return res.data;
  },
  generateInvoice: async (subId: number) => {
    const res = await client.post(`/subscriptions/${subId}/generate-invoice`);
    return res.data;
  },

  // Invoices & Payments
  getInvoices: async (params?: { status?: string; customer_id?: number; overdue_only?: boolean }): Promise<Invoice[]> => {
    const res = await client.get('/invoices/', { params });
    return res.data;
  },
  getInvoice: async (id: number): Promise<Invoice> => {
    const res = await client.get(`/invoices/${id}`);
    return res.data;
  },
  updateInvoiceStatus: async (id: number, action: 'confirm' | 'cancel') => {
    const res = await client.post(`/invoices/${id}/status`, null, { params: { status_action: action } });
    return res.data;
  },
  sendInvoice: async (id: number) => {
    const res = await client.post(`/invoices/${id}/send`);
    return res.data;
  },
  recordPayment: async (invoiceId: number, data: { payment_method: string; amount: number; payment_date: string; reference_note?: string }): Promise<Payment> => {
    const res = await client.post(`/payments/invoices/${invoiceId}`, data);
    return res.data;
  },

  // Finance
  getFinanceSummary: async (params?: { start_date?: string; end_date?: string; plan_id?: number }): Promise<FinanceSummary> => {
    const res = await client.get('/finance/summary', { params });
    return res.data;
  },
  triggerBillingDay: async (target_date?: string) => {
    const res = await client.post('/finance/trigger-billing-day', null, { params: { target_date } });
    return res.data;
  },
  downloadInvoicesCSV: async () => {
    const res = await client.get('/finance/export-invoices-csv', { responseType: 'blob' });
    const blob = new Blob([res.data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `brightloop_ledger_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  },
  runSmartDunning: async () => {
    const res = await client.post('/finance/dunning/chase-all');
    return res.data;
  },
  getCustomerHealthScores: async () => {
    const res = await client.get('/finance/customer-health');
    return res.data;
  },
};
