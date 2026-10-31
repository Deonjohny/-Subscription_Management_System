import React, { useState, useEffect } from 'react';
import { api } from '../api';
import {
  Subscription, Plan, Product, User, QuotationTemplate,
  DiscountRule, TaxRule
} from '../types';
import {
  Plus, Search, Filter, CheckCircle2, PauseCircle, XCircle,
  FileText, Play, ChevronRight, AlertTriangle, ArrowRight, RefreshCw, Calendar
} from 'lucide-react';

interface SubscriptionsViewProps {
  currentUser: User | null;
  onNavigateToInvoice: (invoiceId: number) => void;
}

export const SubscriptionsView: React.FC<SubscriptionsViewProps> = ({ currentUser, onNavigateToInvoice }) => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [customers, setCustomers] = useState<User[]>([]);
  const [templates, setTemplates] = useState<QuotationTemplate[]>([]);
  const [taxes, setTaxes] = useState<TaxRule[]>([]);
  const [discounts, setDiscounts] = useState<DiscountRule[]>([]);
  const [loading, setLoading] = useState(true);

  // Filter & Search
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  // Selected subscription for detail modal
  const [selectedSub, setSelectedSub] = useState<Subscription | null>(null);

  // New Subscription / Quote Modal state
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | ''>('');
  const [selectedPlanId, setSelectedPlanId] = useState<number | ''>('');
  const [selectedTemplateId, setSelectedTemplateId] = useState<number | ''>('');
  const [discountCode, setDiscountCode] = useState('');
  const [paymentTerms, setPaymentTerms] = useState('Net 30');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [validityDays, setValidityDays] = useState(30);
  const [lines, setLines] = useState<Array<{
    product_id: number;
    variant_id?: number;
    quantity: number;
    unit_price: number;
    tax_rate: number;
  }>>([]);
  const [submitting, setSubmitting] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const [subsData, plansData, prodsData, custsData, tplsData, taxData, discData] = await Promise.all([
        api.getSubscriptions(),
        api.getPlans(),
        api.getProducts(),
        api.getCustomers(),
        api.getTemplates(),
        api.getTaxes(),
        api.getDiscounts()
      ]);
      setSubscriptions(subsData);
      setPlans(plansData);
      setProducts(prodsData);
      setCustomers(custsData);
      setTemplates(tplsData);
      setTaxes(taxData);
      setDiscounts(discData);
    } catch (err) {
      console.error('Error loading subscriptions data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // When a template is selected, auto-populate plan and lines
  const handleTemplateSelect = (templateId: number) => {
    setSelectedTemplateId(templateId);
    const tpl = templates.find(t => t.id === templateId);
    if (!tpl) return;

    setSelectedPlanId(tpl.plan_id);
    setValidityDays(tpl.validity_days);
    setPaymentTerms(tpl.payment_terms);

    const defaultTax = taxes[0]?.rate_percent || 15.0;
    const mappedLines = tpl.lines.map(l => ({
      product_id: l.product_id,
      variant_id: l.variant_id || undefined,
      quantity: l.quantity,
      unit_price: l.unit_price,
      tax_rate: defaultTax
    }));
    setLines(mappedLines);
  };

  const addLine = () => {
    if (products.length === 0) return;
    const p = products[0];
    const defaultTax = taxes[0]?.rate_percent || 15.0;
    setLines([
      ...lines,
      {
        product_id: p.id,
        variant_id: p.variants.length > 0 ? p.variants[0].id : undefined,
        quantity: 1,
        unit_price: p.sales_price + (p.variants.length > 0 ? p.variants[0].extra_price : 0),
        tax_rate: defaultTax
      }
    ]);
  };

  const updateLineProduct = (index: number, productId: number) => {
    const p = products.find(prod => prod.id === productId);
    if (!p) return;
    const variant = p.variants.length > 0 ? p.variants[0] : null;
    const newLines = [...lines];
    newLines[index].product_id = productId;
    newLines[index].variant_id = variant ? variant.id : undefined;
    newLines[index].unit_price = p.sales_price + (variant ? variant.extra_price : 0);
    setLines(newLines);
  };

  const updateLineVariant = (index: number, variantId?: number) => {
    const newLines = [...lines];
    newLines[index].variant_id = variantId;
    const p = products.find(prod => prod.id === newLines[index].product_id);
    if (p) {
      const v = p.variants.find(item => item.id === variantId);
      newLines[index].unit_price = p.sales_price + (v ? v.extra_price : 0);
    }
    setLines(newLines);
  };

  const removeLine = (index: number) => {
    setLines(lines.filter((_, i) => i !== index));
  };

  const handleCreateSubmit = async (status: 'Draft' | 'Quotation' | 'Active') => {
    if (!selectedCustomerId || !selectedPlanId) {
      alert('Please select both a customer and a plan');
      return;
    }
    if (lines.length === 0) {
      alert('Please add at least one product line');
      return;
    }

    const plan = plans.find(p => p.id === Number(selectedPlanId));
    const totalQty = lines.reduce((acc, l) => acc + l.quantity, 0);
    if (plan && totalQty < plan.min_quantity) {
      alert(`Minimum quantity required for plan "${plan.name}" is ${plan.min_quantity}. Currently: ${totalQty}`);
      return;
    }

    setSubmitting(true);
    try {
      await api.createSubscription({
        customer_id: Number(selectedCustomerId),
        plan_id: Number(selectedPlanId),
        discount_code: discountCode.trim() || undefined,
        payment_terms: paymentTerms,
        start_date: startDate,
        quotation_validity_days: validityDays,
        lines: lines,
        status: status,
        notes: `Created via ${selectedTemplateId ? 'Template' : 'Direct Offer'}`
      });
      setShowCreateModal(false);
      // Reset form
      setSelectedTemplateId('');
      setSelectedCustomerId('');
      setSelectedPlanId('');
      setLines([]);
      setDiscountCode('');
      await loadData();
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Failed to create subscription');
    } finally {
      setSubmitting(false);
    }
  };

  const handleStatusTransition = async (subId: number, nextStatus: string) => {
    try {
      const updated = await api.updateSubscriptionStatus(subId, nextStatus);
      setSelectedSub(updated);
      await loadData();
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Status transition failed');
    }
  };

  const handleGenerateInvoice = async (subId: number) => {
    try {
      const res = await api.generateInvoice(subId);
      alert(`Invoice ${res.invoice_number} generated successfully!`);
      await loadData();
      if (selectedSub?.id === subId) {
        const refreshed = await api.getSubscription(subId);
        setSelectedSub(refreshed);
      }
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Failed to generate invoice');
    }
  };

  // Filtered subscriptions
  const filteredSubs = subscriptions.filter(sub => {
    const matchesStatus = statusFilter === 'ALL' || sub.status === statusFilter;
    const matchesSearch =
      sub.subscription_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.customer?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.plan?.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Subscriptions & Quotations</h1>
          <p className="text-slate-500 text-sm">
            Manage quotation offers, active contracts, recurring terms, and lifecycle transitions.
          </p>
        </div>
        <button
          onClick={() => {
            setShowCreateModal(true);
            if (lines.length === 0) addLine();
          }}
          className="bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm px-4 py-2.5 rounded-lg shadow flex items-center space-x-2 transition"
        >
          <Plus className="w-4 h-4" />
          <span>New Quote / Subscription</span>
        </button>
      </div>

      {/* Lifecycle Flow Ribbon */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center justify-between text-xs overflow-x-auto">
        <div className="flex items-center space-x-1 font-semibold text-slate-400">
          <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold">1</span>
          <span>Draft</span>
        </div>
        <ChevronRight className="w-4 h-4 text-slate-300" />
        <div className="flex items-center space-x-1 font-semibold text-blue-600">
          <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center font-bold">2</span>
          <span>Quotation</span>
        </div>
        <ChevronRight className="w-4 h-4 text-slate-300" />
        <div className="flex items-center space-x-1 font-semibold text-indigo-600">
          <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center font-bold">3</span>
          <span>Confirmed</span>
        </div>
        <ChevronRight className="w-4 h-4 text-slate-300" />
        <div className="flex items-center space-x-1 font-semibold text-emerald-600">
          <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center font-bold">4</span>
          <span>Active (Recurring Billing)</span>
        </div>
        <ChevronRight className="w-4 h-4 text-slate-300" />
        <div className="flex items-center space-x-1 font-semibold text-slate-500">
          <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center font-bold">5</span>
          <span>Closed / Paused</span>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search by quote number, customer or plan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="ALL">All Statuses</option>
            <option value="Draft">Draft</option>
            <option value="Quotation">Quotation</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Active">Active</option>
            <option value="Paused">Paused</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Subscriptions Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 border-b border-slate-200 uppercase font-semibold">
              <tr>
                <th className="py-3 px-4">Ref Number</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Plan & Interval</th>
                <th className="py-3 px-4">Start / Expiry</th>
                <th className="py-3 px-4">Next Billing</th>
                <th className="py-3 px-4">Total Amount</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredSubs.map((sub) => {
                const statusStyles: Record<string, string> = {
                  Draft: 'bg-slate-100 text-slate-700 border-slate-300',
                  Quotation: 'bg-blue-100 text-blue-700 border-blue-300',
                  Confirmed: 'bg-indigo-100 text-indigo-700 border-indigo-300',
                  Active: 'bg-emerald-100 text-emerald-800 border-emerald-300',
                  Paused: 'bg-amber-100 text-amber-800 border-amber-300',
                  Closed: 'bg-rose-100 text-rose-800 border-rose-300',
                };
                return (
                  <tr key={sub.id} className="hover:bg-purple-50/30 transition">
                    <td className="py-3.5 px-4 font-mono font-bold text-purple-950">
                      {sub.subscription_number}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-slate-900">{sub.customer?.name}</div>
                      <div className="text-[11px] text-slate-400">{sub.customer?.company_name}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-slate-800">{sub.plan?.name}</div>
                      <span className="capitalize text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                        {sub.plan?.billing_interval}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      <div>{sub.start_date}</div>
                      <div className="text-[11px] text-slate-400">Exp: {sub.expiry_date}</div>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">
                      {sub.status === 'Active' ? sub.next_billing_date : 'N/A'}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      ${sub.total_amount.toFixed(2)}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold border ${statusStyles[sub.status] || 'bg-slate-100'}`}>
                        {sub.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => setSelectedSub(sub)}
                        className="px-2.5 py-1 bg-slate-100 hover:bg-purple-100 text-purple-700 rounded text-xs font-semibold transition"
                      >
                        Inspect & Manage
                      </button>
                    </td>
                  </tr>
                );
              })}
              {filteredSubs.length === 0 && (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-slate-400 text-sm">
                    No subscriptions found matching the filter criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Subscription Detail / Workflow Modal */}
      {selectedSub && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full p-6 space-y-6 my-8">
            <div className="flex justify-between items-start border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                  {selectedSub.subscription_number}
                </span>
                <h2 className="text-xl font-black text-slate-900 mt-1">
                  Subscription / Quote Details
                </h2>
                <p className="text-xs text-slate-500">Customer: {selectedSub.customer?.name} ({selectedSub.customer?.email})</p>
              </div>
              <button
                onClick={() => setSelectedSub(null)}
                className="text-slate-400 hover:text-slate-600 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            {/* Workflow Action Bar */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold text-slate-600">Current Status:</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-200">
                  {selectedSub.status}
                </span>
              </div>

              {/* State transition triggers */}
              <div className="flex flex-wrap items-center gap-2">
                {selectedSub.status === 'Draft' && (
                  <button
                    onClick={() => handleStatusTransition(selectedSub.id, 'Quotation')}
                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-bold transition"
                  >
                    Send Quotation Offer
                  </button>
                )}
                {selectedSub.status === 'Quotation' && (
                  <button
                    onClick={() => handleStatusTransition(selectedSub.id, 'Confirmed')}
                    className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-xs font-bold transition"
                  >
                    Confirm Order
                  </button>
                )}
                {(selectedSub.status === 'Confirmed' || selectedSub.status === 'Draft') && (
                  <button
                    onClick={() => handleStatusTransition(selectedSub.id, 'Active')}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold transition flex items-center space-x-1"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Activate Contract</span>
                  </button>
                )}
                {selectedSub.status === 'Active' && selectedSub.plan?.allow_pause && (
                  <button
                    onClick={() => handleStatusTransition(selectedSub.id, 'Paused')}
                    className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded text-xs font-bold transition"
                  >
                    Pause Subscription
                  </button>
                )}
                {selectedSub.status === 'Paused' && (
                  <button
                    onClick={() => handleStatusTransition(selectedSub.id, 'Active')}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold transition"
                  >
                    Resume Active
                  </button>
                )}
                {selectedSub.status === 'Active' && selectedSub.plan?.allow_early_close && (
                  <button
                    onClick={() => handleStatusTransition(selectedSub.id, 'Closed')}
                    className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded text-xs font-bold transition"
                  >
                    Close Early
                  </button>
                )}
                {selectedSub.status === 'Closed' && selectedSub.plan?.allow_renew && (
                  <button
                    onClick={() => handleStatusTransition(selectedSub.id, 'Active')}
                    className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded text-xs font-bold transition"
                  >
                    Renew Subscription
                  </button>
                )}
                {selectedSub.status === 'Active' && (
                  <button
                    onClick={() => handleGenerateInvoice(selectedSub.id)}
                    className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-bold transition flex items-center space-x-1"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Bill Next Invoice</span>
                  </button>
                )}
              </div>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs bg-slate-50/50 p-4 rounded-lg border border-slate-100">
              <div>
                <span className="text-slate-400 block font-semibold">Plan</span>
                <span className="font-bold text-slate-800">{selectedSub.plan?.name}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">Interval</span>
                <span className="font-bold text-slate-800 capitalize">{selectedSub.plan?.billing_interval}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">Payment Terms</span>
                <span className="font-bold text-slate-800">{selectedSub.payment_terms}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold">Next Billing</span>
                <span className="font-bold text-emerald-700">{selectedSub.next_billing_date}</span>
              </div>
            </div>

            {/* Line Items */}
            <div>
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Subscribed Lines & Products</h3>
              <table className="w-full text-xs text-left border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-100 text-slate-700 font-semibold">
                  <tr>
                    <th className="py-2 px-3">Product Item</th>
                    <th className="py-2 px-3 text-center">Qty</th>
                    <th className="py-2 px-3 text-right">Unit Price</th>
                    <th className="py-2 px-3 text-right">Tax Rate</th>
                    <th className="py-2 px-3 text-right">Line Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {selectedSub.lines.map((l) => (
                    <tr key={l.id}>
                      <td className="py-2 px-3">
                        <span className="font-semibold text-slate-900">{l.product?.name}</span>
                        {l.variant && (
                          <span className="ml-1 text-slate-500 text-[11px]">
                            ({l.variant.attribute_name}: {l.variant.attribute_value} +${l.variant.extra_price})
                          </span>
                        )}
                      </td>
                      <td className="py-2 px-3 text-center">{l.quantity}</td>
                      <td className="py-2 px-3 text-right">${l.unit_price.toFixed(2)}</td>
                      <td className="py-2 px-3 text-right">{l.tax_rate}%</td>
                      <td className="py-2 px-3 text-right font-bold">${l.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Total calculations */}
              <div className="mt-3 flex justify-end">
                <div className="w-56 space-y-1 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal:</span>
                    <span>${selectedSub.total_untaxed.toFixed(2)}</span>
                  </div>
                  {selectedSub.total_discount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-medium">
                      <span>Discount ({selectedSub.discount?.code}):</span>
                      <span>-${selectedSub.total_discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-600">
                    <span>Tax:</span>
                    <span>+${selectedSub.total_tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-black text-sm text-purple-950 border-t border-slate-200 pt-1">
                    <span>Recurring Total:</span>
                    <span>${selectedSub.total_amount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-slate-100">
              <button
                onClick={() => setSelectedSub(null)}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded text-xs font-bold transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Quote / Subscription Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full p-6 space-y-5 my-8">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <h2 className="text-xl font-black text-slate-900">Prepare New Quote / Subscription</h2>
                <p className="text-xs text-slate-500">
                  Select a quotation template or customize lines with product variants and discount rules.
                </p>
              </div>
              <button onClick={() => setShowCreateModal(false)} className="text-slate-400 font-bold text-lg">✕</button>
            </div>

            {/* Template Selector Shortcut */}
            <div className="bg-purple-50/70 border border-purple-200 rounded-lg p-3">
              <label className="block text-xs font-bold text-purple-900 mb-1">
                ⭐ Start from a Quotation Template (Recommended for sales reps):
              </label>
              <select
                value={selectedTemplateId}
                onChange={(e) => e.target.value && handleTemplateSelect(Number(e.target.value))}
                className="w-full bg-white border border-purple-300 rounded px-2.5 py-1.5 text-xs text-purple-950 focus:outline-none focus:ring-1 focus:ring-purple-500"
              >
                <option value="">-- Choose a template to pre-fill products and terms --</option>
                {templates.map(t => (
                  <option key={t.id} value={t.id}>
                    {t.name} (Valid {t.validity_days} days, Terms: {t.payment_terms})
                  </option>
                ))}
              </select>
            </div>

            {/* Customer & Plan selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Customer *</label>
                <select
                  value={selectedCustomerId}
                  onChange={(e) => setSelectedCustomerId(Number(e.target.value))}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-purple-500"
                >
                  <option value="">-- Select Customer --</option>
                  {customers.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.name} {c.company_name ? `(${c.company_name})` : ''} - {c.email}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Billing Plan *</label>
                <select
                  value={selectedPlanId}
                  onChange={(e) => setSelectedPlanId(Number(e.target.value))}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-purple-500"
                >
                  <option value="">-- Select Plan --</option>
                  {plans.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.name} (${p.cost} / {p.billing_interval}, Min Qty: {p.min_quantity})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Quotation Validity Period (Days)</label>
                <input
                  type="number"
                  value={validityDays}
                  onChange={(e) => setValidityDays(Number(e.target.value))}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Payment Terms</label>
                <select
                  value={paymentTerms}
                  onChange={(e) => setPaymentTerms(e.target.value)}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-purple-500"
                >
                  <option value="Immediate">Immediate</option>
                  <option value="Net 15">Net 15</option>
                  <option value="Net 30">Net 30</option>
                  <option value="Net 60">Net 60</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Discount Code (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. VOLUME20 or WELCOME100"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-purple-500 uppercase"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Product Lines Section */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Product Lines & Variants</span>
                <button
                  type="button"
                  onClick={addLine}
                  className="text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center space-x-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Line</span>
                </button>
              </div>

              <div className="space-y-2 max-h-56 overflow-y-auto border border-slate-200 rounded-lg p-2 bg-slate-50/50">
                {lines.map((line, idx) => {
                  const prod = products.find(p => p.id === line.product_id);
                  return (
                    <div key={idx} className="bg-white p-2.5 rounded border border-slate-200 grid grid-cols-12 gap-2 items-center text-xs">
                      {/* Product select */}
                      <div className="col-span-4">
                        <select
                          value={line.product_id}
                          onChange={(e) => updateLineProduct(idx, Number(e.target.value))}
                          className="w-full border border-slate-300 rounded px-2 py-1 text-slate-800"
                        >
                          {products.map(p => (
                            <option key={p.id} value={p.id}>{p.name} (${p.sales_price})</option>
                          ))}
                        </select>
                      </div>

                      {/* Variant select (e.g. Odoo brand +560) */}
                      <div className="col-span-3">
                        <select
                          value={line.variant_id || ''}
                          onChange={(e) => updateLineVariant(idx, e.target.value ? Number(e.target.value) : undefined)}
                          className="w-full border border-slate-300 rounded px-2 py-1 text-slate-800"
                        >
                          <option value="">Base (No Variant)</option>
                          {prod?.variants.map(v => (
                            <option key={v.id} value={v.id}>
                              {v.attribute_value} (+${v.extra_price})
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Qty */}
                      <div className="col-span-2">
                        <input
                          type="number"
                          min="1"
                          value={line.quantity}
                          onChange={(e) => {
                            const newLines = [...lines];
                            newLines[idx].quantity = Math.max(1, Number(e.target.value));
                            setLines(newLines);
                          }}
                          className="w-full border border-slate-300 rounded px-2 py-1 text-center font-bold text-slate-800"
                        />
                      </div>

                      {/* Price */}
                      <div className="col-span-2 text-right font-bold text-slate-900">
                        ${(line.quantity * line.unit_price).toFixed(2)}
                      </div>

                      {/* Delete */}
                      <div className="col-span-1 text-right">
                        <button
                          type="button"
                          onClick={() => removeLine(idx)}
                          className="text-rose-500 hover:text-rose-700 font-bold"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap justify-between items-center pt-3 border-t border-slate-100 gap-2">
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 border border-slate-300 text-slate-700 rounded text-xs font-bold hover:bg-slate-50 transition"
              >
                Cancel
              </button>
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => handleCreateSubmit('Quotation')}
                  disabled={submitting}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-bold transition shadow-sm"
                >
                  Save as Quotation
                </button>
                <button
                  type="button"
                  onClick={() => handleCreateSubmit('Active')}
                  disabled={submitting}
                  className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded text-xs font-bold transition shadow-sm"
                >
                  Create & Activate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
