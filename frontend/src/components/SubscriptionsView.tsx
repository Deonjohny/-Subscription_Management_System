import React, { useState, useEffect } from 'react';
import { api } from '../api';
import {
  Subscription, Plan, Product, User, QuotationTemplate,
  TaxRule
} from '../types';
import {
  Plus, Search, Filter,
  FileText, Play, ChevronRight, Sparkles
} from 'lucide-react';

interface SubscriptionsViewProps {
  currentUser: User | null;
  onNavigateToInvoice: (invoiceId: number) => void;
}

export const SubscriptionsView: React.FC<SubscriptionsViewProps> = ({ currentUser: _currentUser, onNavigateToInvoice: _onNavigateToInvoice }) => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [customers, setCustomers] = useState<User[]>([]);
  const [templates, setTemplates] = useState<QuotationTemplate[]>([]);
  const [taxes, setTaxes] = useState<TaxRule[]>([]);

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
    try {
      const [subsData, plansData, prodsData, custsData, tplsData, taxData] = await Promise.all([
        api.getSubscriptions(),
        api.getPlans(),
        api.getProducts(),
        api.getCustomers(),
        api.getTemplates(),
        api.getTaxes()
      ]);
      setSubscriptions(subsData);
      setPlans(plansData);
      setProducts(prodsData);
      setCustomers(custsData);
      setTemplates(tplsData);
      setTaxes(taxData);
    } catch (err) {
      console.error('Error loading subscriptions data:', err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

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
          <h1 className="text-2xl font-serif font-black text-burgundy-950 tracking-tight">
            Subscriptions & Quotations
          </h1>
          <p className="text-cream-700 text-sm">
            Formal quotation offers, active contracts, recurring terms, and plan lifecycle transitions.
          </p>
        </div>
        <button
          onClick={() => {
            setShowCreateModal(true);
            if (lines.length === 0) addLine();
          }}
          className="bg-gradient-to-r from-burgundy-900 via-burgundy-800 to-burgundy-900 hover:from-burgundy-800 hover:to-burgundy-700 text-gold-300 border border-gold-400/60 font-serif font-bold text-sm px-4 py-2.5 rounded-xl shadow-gold-subtle flex items-center space-x-2 transition duration-200"
        >
          <Plus className="w-4 h-4 text-gold-400" />
          <span>New Quote / Subscription</span>
        </button>
      </div>

      {/* Cinematic Lifecycle Flow Ribbon */}
      <div className="cream-card rounded-2xl p-4.5 flex items-center justify-between text-xs overflow-x-auto shadow-sm">
        <div className="flex items-center space-x-2 font-serif font-bold text-cream-600">
          <span className="w-6 h-6 rounded-full bg-cream-200 flex items-center justify-center text-burgundy-900">1</span>
          <span>Draft</span>
        </div>
        <ChevronRight className="w-4 h-4 text-gold-500/50" />
        <div className="flex items-center space-x-2 font-serif font-bold text-amber-700">
          <span className="w-6 h-6 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center">2</span>
          <span>Quotation Offer</span>
        </div>
        <ChevronRight className="w-4 h-4 text-gold-500/50" />
        <div className="flex items-center space-x-2 font-serif font-bold text-burgundy-800">
          <span className="w-6 h-6 rounded-full bg-burgundy-100 border border-burgundy-300 flex items-center justify-center text-burgundy-950">3</span>
          <span>Confirmed Order</span>
        </div>
        <ChevronRight className="w-4 h-4 text-gold-500/50" />
        <div className="flex items-center space-x-2 font-serif font-bold text-emerald-800">
          <span className="w-6 h-6 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-900 shadow-sm">4</span>
          <span>Active (Recurring Billing)</span>
        </div>
        <ChevronRight className="w-4 h-4 text-gold-500/50" />
        <div className="flex items-center space-x-2 font-serif font-bold text-cream-600">
          <span className="w-6 h-6 rounded-full bg-cream-200 flex items-center justify-center text-burgundy-900">5</span>
          <span>Closed / Paused</span>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-gold-600" />
          <input
            type="text"
            placeholder="Search quotes, customers, or subscription plans..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full cream-card rounded-xl pl-10 pr-4 py-2.5 text-sm text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 placeholder:text-cream-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gold-600" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="cream-card rounded-xl px-3.5 py-2.5 text-sm text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 font-serif font-medium"
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
      <div className="cream-card rounded-2xl overflow-hidden shadow-cinematic">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-cream-100/70 text-burgundy-950 border-b border-gold-500/20 uppercase font-serif tracking-wider font-bold">
              <tr>
                <th className="py-3.5 px-4.5">Reference #</th>
                <th className="py-3.5 px-4.5">Client Organization</th>
                <th className="py-3.5 px-4.5">Plan & Frequency</th>
                <th className="py-3.5 px-4.5">Term Window</th>
                <th className="py-3.5 px-4.5">Next Billing</th>
                <th className="py-3.5 px-4.5">Recurring Total</th>
                <th className="py-3.5 px-4.5">Status</th>
                <th className="py-3.5 px-4.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold-500/10">
              {filteredSubs.map((sub) => {
                const statusBadges: Record<string, string> = {
                  Draft: 'bg-cream-200 text-burgundy-800 border-cream-400',
                  Quotation: 'bg-amber-100 text-amber-900 border-amber-300',
                  Confirmed: 'bg-burgundy-100 text-burgundy-900 border-burgundy-300',
                  Active: 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold shadow-sm',
                  Paused: 'bg-amber-50 text-amber-800 border-amber-300',
                  Closed: 'bg-rose-100 text-rose-900 border-rose-300',
                };
                return (
                  <tr key={sub.id} className="hover:bg-gold-50/40 transition">
                    <td className="py-4 px-4.5 font-mono font-bold text-burgundy-950">
                      {sub.subscription_number}
                    </td>
                    <td className="py-4 px-4.5">
                      <div className="font-serif font-bold text-burgundy-950">{sub.customer?.name}</div>
                      <div className="text-[11px] text-cream-600">{sub.customer?.company_name}</div>
                    </td>
                    <td className="py-4 px-4.5">
                      <div className="font-semibold text-burgundy-900">{sub.plan?.name}</div>
                      <span className="capitalize text-[10px] px-2 py-0.5 rounded-full bg-cream-200 text-burgundy-950 font-mono font-bold">
                        {sub.plan?.billing_interval}
                      </span>
                    </td>
                    <td className="py-4 px-4.5 text-cream-800">
                      <div>{sub.start_date}</div>
                      <div className="text-[11px] text-cream-600">Exp: {sub.expiry_date}</div>
                    </td>
                    <td className="py-4 px-4.5 font-serif font-bold text-burgundy-950">
                      {sub.status === 'Active' ? sub.next_billing_date : 'N/A'}
                    </td>
                    <td className="py-4 px-4.5 font-serif font-black text-burgundy-950 text-sm">
                      ${sub.total_amount.toFixed(2)}
                    </td>
                    <td className="py-4 px-4.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border tracking-wider ${statusBadges[sub.status] || 'bg-cream-100'}`}>
                        {sub.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="py-4 px-4.5 text-right">
                      <button
                        onClick={() => setSelectedSub(sub)}
                        className="px-3 py-1.5 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 border border-gold-400/50 rounded-lg text-xs font-serif font-bold transition shadow-sm"
                      >
                        Inspect & Govern
                      </button>
                    </td>
                  </tr>
                );
              })}
              {filteredSubs.length === 0 && (
                <tr>
                  <td colSpan={8} className="py-10 text-center text-cream-600 font-serif text-sm">
                    No subscriptions matching the filter criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Subscription Detail / State Transition Modal */}
      {selectedSub && (
        <div className="fixed inset-0 bg-burgundy-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="cream-card rounded-2xl shadow-cinematic-lg max-w-3xl w-full p-6 space-y-6 my-8 border border-gold-400">
            <div className="flex justify-between items-start border-b border-gold-500/20 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-burgundy-950 bg-gold-200/60 px-2.5 py-0.5 rounded border border-gold-400/60">
                  {selectedSub.subscription_number}
                </span>
                <h2 className="text-2xl font-serif font-black text-burgundy-950 mt-1.5">
                  Subscription Contract Lifecycle
                </h2>
                <p className="text-xs text-cream-700">Client: {selectedSub.customer?.name} ({selectedSub.customer?.email})</p>
              </div>
              <button
                onClick={() => setSelectedSub(null)}
                className="text-burgundy-800 hover:text-burgundy-950 font-bold text-xl"
              >
                ✕
              </button>
            </div>

            {/* Workflow Action Bar */}
            <div className="p-3.5 bg-cream-100/60 border border-gold-500/30 rounded-xl flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-serif font-bold text-burgundy-950">Active Stage:</span>
                <span className="px-3 py-1 rounded-full text-xs font-serif font-bold bg-burgundy-900 text-gold-300 border border-gold-400/40">
                  {selectedSub.status}
                </span>
              </div>

              {/* State transition triggers */}
              <div className="flex flex-wrap items-center gap-2">
                {selectedSub.status === 'Draft' && (
                  <button
                    onClick={() => handleStatusTransition(selectedSub.id, 'Quotation')}
                    className="px-3.5 py-1.5 bg-amber-700 hover:bg-amber-800 text-cream-50 rounded-lg text-xs font-serif font-bold transition shadow-sm"
                  >
                    Send Quotation Offer
                  </button>
                )}
                {selectedSub.status === 'Quotation' && (
                  <button
                    onClick={() => handleStatusTransition(selectedSub.id, 'Confirmed')}
                    className="px-3.5 py-1.5 bg-burgundy-800 hover:bg-burgundy-900 text-gold-200 border border-gold-400/50 rounded-lg text-xs font-serif font-bold transition shadow-sm"
                  >
                    Confirm Contract
                  </button>
                )}
                {(selectedSub.status === 'Confirmed' || selectedSub.status === 'Draft') && (
                  <button
                    onClick={() => handleStatusTransition(selectedSub.id, 'Active')}
                    className="px-3.5 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-serif font-bold transition flex items-center space-x-1.5 shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Activate Recurring Contract</span>
                  </button>
                )}
                {selectedSub.status === 'Active' && selectedSub.plan?.allow_pause && (
                  <button
                    onClick={() => handleStatusTransition(selectedSub.id, 'Paused')}
                    className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-serif font-bold transition"
                  >
                    Pause Subscription
                  </button>
                )}
                {selectedSub.status === 'Paused' && (
                  <button
                    onClick={() => handleStatusTransition(selectedSub.id, 'Active')}
                    className="px-3.5 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-serif font-bold transition"
                  >
                    Resume Active
                  </button>
                )}
                {selectedSub.status === 'Active' && selectedSub.plan?.allow_early_close && (
                  <button
                    onClick={() => handleStatusTransition(selectedSub.id, 'Closed')}
                    className="px-3.5 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-serif font-bold transition"
                  >
                    Close Early
                  </button>
                )}
                {selectedSub.status === 'Closed' && selectedSub.plan?.allow_renew && (
                  <button
                    onClick={() => handleStatusTransition(selectedSub.id, 'Active')}
                    className="px-3.5 py-1.5 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 border border-gold-400 rounded-lg text-xs font-serif font-bold transition"
                  >
                    Renew Subscription
                  </button>
                )}
                {selectedSub.status === 'Active' && (
                  <button
                    onClick={() => handleGenerateInvoice(selectedSub.id)}
                    className="px-3.5 py-1.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-burgundy-950 font-serif font-bold rounded-lg text-xs transition flex items-center space-x-1.5 shadow-gold-subtle"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Bill Next Invoice</span>
                  </button>
                )}
              </div>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs bg-cream-100/40 p-4 rounded-xl border border-gold-500/20">
              <div>
                <span className="text-cream-700 block font-serif font-bold">Billing Plan</span>
                <span className="font-bold text-burgundy-950">{selectedSub.plan?.name}</span>
              </div>
              <div>
                <span className="text-cream-700 block font-serif font-bold">Interval Frequency</span>
                <span className="font-bold text-burgundy-950 capitalize">{selectedSub.plan?.billing_interval}</span>
              </div>
              <div>
                <span className="text-cream-700 block font-serif font-bold">Payment Terms</span>
                <span className="font-bold text-burgundy-950">{selectedSub.payment_terms}</span>
              </div>
              <div>
                <span className="text-cream-700 block font-serif font-bold">Next Billing</span>
                <span className="font-bold text-emerald-800">{selectedSub.next_billing_date}</span>
              </div>
            </div>

            {/* Line Items */}
            <div>
              <h3 className="text-xs font-serif font-black text-burgundy-950 uppercase tracking-wider mb-2.5">
                Contract Product Lines & Variant Add-ons
              </h3>
              <table className="w-full text-xs text-left border border-gold-500/20 rounded-xl overflow-hidden">
                <thead className="bg-cream-100/70 text-burgundy-950 font-serif font-bold">
                  <tr>
                    <th className="py-2.5 px-3.5">Product Item</th>
                    <th className="py-2.5 px-3.5 text-center">Seats / Qty</th>
                    <th className="py-2.5 px-3.5 text-right">Unit Rate</th>
                    <th className="py-2.5 px-3.5 text-right">Tax Rate</th>
                    <th className="py-2.5 px-3.5 text-right">Line Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold-500/10">
                  {selectedSub.lines.map((l) => (
                    <tr key={l.id}>
                      <td className="py-2.5 px-3.5">
                        <span className="font-serif font-bold text-burgundy-950">{l.product?.name}</span>
                        {l.variant && (
                          <span className="ml-1.5 text-gold-700 font-semibold bg-gold-100/70 border border-gold-400/40 px-2 py-0.5 rounded text-[10px]">
                            {l.variant.attribute_name}: {l.variant.attribute_value} (+${l.variant.extra_price})
                          </span>
                        )}
                      </td>
                      <td className="py-2.5 px-3.5 text-center font-bold">{l.quantity}</td>
                      <td className="py-2.5 px-3.5 text-right font-medium">${l.unit_price.toFixed(2)}</td>
                      <td className="py-2.5 px-3.5 text-right">{l.tax_rate}%</td>
                      <td className="py-2.5 px-3.5 text-right font-serif font-black text-burgundy-950">${l.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Total calculations */}
              <div className="mt-4 flex justify-end">
                <div className="w-64 space-y-1.5 text-xs bg-cream-50 p-3.5 rounded-xl border border-gold-400/40 shadow-sm">
                  <div className="flex justify-between text-cream-800">
                    <span>Subtotal:</span>
                    <span className="font-medium">${selectedSub.total_untaxed.toFixed(2)}</span>
                  </div>
                  {selectedSub.total_discount > 0 && (
                    <div className="flex justify-between text-emerald-800 font-bold">
                      <span>Discount ({selectedSub.discount?.code}):</span>
                      <span>-${selectedSub.total_discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-cream-800">
                    <span>Tax:</span>
                    <span className="font-medium">+${selectedSub.total_tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-serif font-black text-sm text-burgundy-950 border-t border-gold-500/30 pt-1.5">
                    <span>Recurring Total:</span>
                    <span>${selectedSub.total_amount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-3 border-t border-gold-500/20">
              <button
                onClick={() => setSelectedSub(null)}
                className="px-4 py-2 bg-cream-200 hover:bg-cream-300 text-burgundy-950 rounded-xl text-xs font-serif font-bold transition"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Quote / Subscription Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-burgundy-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="cream-card rounded-2xl shadow-cinematic-lg max-w-3xl w-full p-6 space-y-5 my-8 border border-gold-400">
            <div className="flex justify-between items-center border-b border-gold-500/20 pb-3">
              <div>
                <h2 className="text-2xl font-serif font-black text-burgundy-950">Prepare Quotation / Subscription</h2>
                <p className="text-xs text-cream-700">
                  Select a quotation template or customize lines with product variants and discount rules.
                </p>
              </div>
              <button onClick={() => setShowCreateModal(false)} className="text-burgundy-800 font-bold text-xl">✕</button>
            </div>

            {/* Template Selector Shortcut */}
            <div className="bg-gradient-to-r from-cream-100 to-gold-50 border border-gold-400/50 rounded-xl p-3.5 shadow-sm">
              <label className="block text-xs font-serif font-bold text-burgundy-950 mb-1 flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>Start from a Quotation Template (Recommended for sales reps):</span>
              </label>
              <select
                value={selectedTemplateId}
                onChange={(e) => e.target.value && handleTemplateSelect(Number(e.target.value))}
                className="w-full bg-white border border-gold-400/60 rounded-lg px-3 py-2 text-xs text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 font-serif"
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
                <label className="block font-serif font-bold text-burgundy-950 mb-1">Customer Account *</label>
                <select
                  value={selectedCustomerId}
                  onChange={(e) => setSelectedCustomerId(Number(e.target.value))}
                  className="w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white"
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
                <label className="block font-serif font-bold text-burgundy-950 mb-1">Billing Frequency Plan *</label>
                <select
                  value={selectedPlanId}
                  onChange={(e) => setSelectedPlanId(Number(e.target.value))}
                  className="w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white"
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
                <label className="block font-serif font-bold text-burgundy-950 mb-1">Quotation Validity Period (Days)</label>
                <input
                  type="number"
                  value={validityDays}
                  onChange={(e) => setValidityDays(Number(e.target.value))}
                  className="w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white"
                />
              </div>

              <div>
                <label className="block font-serif font-bold text-burgundy-950 mb-1">Payment Terms</label>
                <select
                  value={paymentTerms}
                  onChange={(e) => setPaymentTerms(e.target.value)}
                  className="w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white"
                >
                  <option value="Immediate">Immediate</option>
                  <option value="Net 15">Net 15</option>
                  <option value="Net 30">Net 30</option>
                  <option value="Net 60">Net 60</option>
                </select>
              </div>

              <div>
                <label className="block font-serif font-bold text-burgundy-950 mb-1">Discount Code (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. VOLUME20 or WELCOME100"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 uppercase font-mono bg-white"
                />
              </div>

              <div>
                <label className="block font-serif font-bold text-burgundy-950 mb-1">Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white"
                />
              </div>
            </div>

            {/* Product Lines Section */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-serif font-bold text-burgundy-950 uppercase tracking-wider">
                  Product Lines & Variants
                </span>
                <button
                  type="button"
                  onClick={addLine}
                  className="text-xs font-serif font-bold text-burgundy-900 hover:text-burgundy-950 flex items-center space-x-1"
                >
                  <Plus className="w-3.5 h-3.5 text-gold-600" />
                  <span>Add Line</span>
                </button>
              </div>

              <div className="space-y-2 max-h-56 overflow-y-auto border border-gold-500/20 rounded-xl p-2.5 bg-cream-50">
                {lines.map((line, idx) => {
                  const prod = products.find(p => p.id === line.product_id);
                  return (
                    <div key={idx} className="bg-white p-2.5 rounded-lg border border-gold-500/20 grid grid-cols-12 gap-2 items-center text-xs shadow-sm">
                      <div className="col-span-4">
                        <select
                          value={line.product_id}
                          onChange={(e) => updateLineProduct(idx, Number(e.target.value))}
                          className="w-full border border-cream-300 rounded px-2 py-1 text-burgundy-950"
                        >
                          {products.map(p => (
                            <option key={p.id} value={p.id}>{p.name} (${p.sales_price})</option>
                          ))}
                        </select>
                      </div>

                      <div className="col-span-3">
                        <select
                          value={line.variant_id || ''}
                          onChange={(e) => updateLineVariant(idx, e.target.value ? Number(e.target.value) : undefined)}
                          className="w-full border border-cream-300 rounded px-2 py-1 text-burgundy-950"
                        >
                          <option value="">Base (No Variant)</option>
                          {prod?.variants.map(v => (
                            <option key={v.id} value={v.id}>
                              {v.attribute_value} (+${v.extra_price})
                            </option>
                          ))}
                        </select>
                      </div>

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
                          className="w-full border border-cream-300 rounded px-2 py-1 text-center font-bold text-burgundy-950"
                        />
                      </div>

                      <div className="col-span-2 text-right font-serif font-black text-burgundy-950">
                        ${(line.quantity * line.unit_price).toFixed(2)}
                      </div>

                      <div className="col-span-1 text-right">
                        <button
                          type="button"
                          onClick={() => removeLine(idx)}
                          className="text-rose-600 hover:text-rose-800 font-bold"
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
            <div className="flex flex-wrap justify-between items-center pt-3 border-t border-gold-500/20 gap-2">
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 border border-gold-500/30 text-burgundy-900 rounded-xl text-xs font-serif font-bold hover:bg-cream-100 transition"
              >
                Cancel
              </button>
              <div className="flex space-x-2.5">
                <button
                  type="button"
                  onClick={() => handleCreateSubmit('Quotation')}
                  disabled={submitting}
                  className="px-4 py-2 bg-amber-700 hover:bg-amber-800 text-cream-50 rounded-xl text-xs font-serif font-bold transition shadow-sm"
                >
                  Save as Quotation Offer
                </button>
                <button
                  type="button"
                  onClick={() => handleCreateSubmit('Active')}
                  disabled={submitting}
                  className="px-4 py-2 bg-gradient-to-r from-burgundy-900 to-burgundy-800 hover:from-burgundy-800 hover:to-burgundy-700 text-gold-300 border border-gold-400/60 rounded-xl text-xs font-serif font-bold transition shadow-gold-subtle"
                >
                  Create & Activate Contract
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
