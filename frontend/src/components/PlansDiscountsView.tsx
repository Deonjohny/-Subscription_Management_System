import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { Plan, DiscountRule, TaxRule, Product, User } from '../types';
import {
  Sliders, Plus, Percent, ShieldCheck, CheckCircle2,
  Calendar, Layers, Clock, AlertCircle, ToggleLeft, ToggleRight
} from 'lucide-react';

interface PlansDiscountsViewProps {
  currentUser: User | null;
}

export const PlansDiscountsView: React.FC<PlansDiscountsViewProps> = ({ currentUser }) => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [discounts, setDiscounts] = useState<DiscountRule[]>([]);
  const [taxes, setTaxes] = useState<TaxRule[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState<'plans' | 'discounts' | 'taxes'>('plans');

  // Plan creation modal
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [planName, setPlanName] = useState('');
  const [planDescription, setPlanDescription] = useState('');
  const [planCost, setPlanCost] = useState<number>(0);
  const [planInterval, setPlanInterval] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('monthly');
  const [planMinQty, setPlanMinQty] = useState<number>(1);
  const [planStartDate, setPlanStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [planEndDate, setPlanEndDate] = useState('');
  const [autoCloseOnEnd, setAutoCloseOnEnd] = useState(false);
  const [allowEarlyClose, setAllowEarlyClose] = useState(true);
  const [allowPause, setAllowPause] = useState(true);
  const [allowRenew, setAllowRenew] = useState(true);

  // Discount rule creation modal (ADMIN ONLY!)
  const [showDiscountModal, setShowDiscountModal] = useState(false);
  const [discCode, setDiscCode] = useState('');
  const [discDescription, setDiscDescription] = useState('');
  const [discType, setDiscType] = useState<'percentage' | 'fixed'>('percentage');
  const [discValue, setDiscValue] = useState<number>(10);
  const [discMinPurchase, setDiscMinPurchase] = useState<number>(0);
  const [discMinQty, setDiscMinQty] = useState<number>(0);
  const [discStartDate, setDiscStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [discEndDate, setDiscEndDate] = useState(new Date(Date.now() + 365*24*3600*1000).toISOString().split('T')[0]);
  const [discUsageLimit, setDiscUsageLimit] = useState<number | ''>(50);
  const [discAppliesTo, setDiscAppliesTo] = useState<'whole_subscription' | 'specific_product'>('whole_subscription');
  const [discProductId, setDiscProductId] = useState<number | ''>('');

  // Tax rule modal
  const [showTaxModal, setShowTaxModal] = useState(false);
  const [taxName, setTaxName] = useState('');
  const [taxRate, setTaxRate] = useState<number>(15);
  const [taxCountry, setTaxCountry] = useState('Global');

  const isAdmin = currentUser?.role === 'admin';

  const loadAll = async () => {
    try {
      const [pData, dData, tData, prodData] = await Promise.all([
        api.getPlans(),
        api.getDiscounts(),
        api.getTaxes(),
        api.getProducts()
      ]);
      setPlans(pData);
      setDiscounts(dData);
      setTaxes(tData);
      setProducts(prodData);
    } catch (err) {
      console.error('Error loading plans/discounts:', err);
    }
  };

  useEffect(() => {
    loadAll();
  }, []);

  const handleCreatePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.createPlan({
        name: planName,
        description: planDescription,
        cost: Number(planCost),
        billing_interval: planInterval,
        min_quantity: Number(planMinQty),
        start_date: planStartDate,
        end_date: planEndDate || undefined,
        auto_close_on_end: autoCloseOnEnd,
        allow_early_close: allowEarlyClose,
        allow_pause: allowPause,
        allow_renew: allowRenew
      });
      setShowPlanModal(false);
      setPlanName('');
      setPlanDescription('');
      setPlanCost(0);
      await loadAll();
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Failed to create plan');
    }
  };

  const handleCreateDiscount = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAdmin) {
      alert('Only admin can create discount rules.');
      return;
    }
    try {
      await api.createDiscount({
        code: discCode.toUpperCase().trim(),
        description: discDescription,
        discount_type: discType,
        discount_value: Number(discValue),
        min_purchase_amount: Number(discMinPurchase),
        min_quantity: Number(discMinQty),
        start_date: discStartDate,
        end_date: discEndDate,
        usage_limit: discUsageLimit ? Number(discUsageLimit) : undefined,
        applies_to: discAppliesTo,
        product_id: discProductId ? Number(discProductId) : undefined
      });
      setShowDiscountModal(false);
      setDiscCode('');
      setDiscDescription('');
      await loadAll();
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Failed to create discount rule');
    }
  };

  const handleCreateTax = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.createTax({
        name: taxName,
        rate_percent: Number(taxRate),
        country: taxCountry
      });
      setShowTaxModal(false);
      setTaxName('');
      await loadAll();
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Failed to create tax rule');
    }
  };

  const handleToggleDiscount = async (id: number) => {
    try {
      await api.toggleDiscountActive(id);
      await loadAll();
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Failed to toggle discount');
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Plans, Discounts & Taxes</h1>
          <p className="text-slate-500 text-sm">
            Control billing frequencies, lifecycle policies, admin discount rules, and automated tax calculations.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex bg-slate-100 p-1 rounded-lg text-xs font-bold text-slate-600">
          <button
            onClick={() => setActiveTab('plans')}
            className={`px-3 py-1.5 rounded-md transition ${activeTab === 'plans' ? 'bg-white text-purple-900 shadow-sm' : 'hover:text-slate-900'}`}
          >
            Billing Plans ({plans.length})
          </button>
          <button
            onClick={() => setActiveTab('discounts')}
            className={`px-3 py-1.5 rounded-md transition ${activeTab === 'discounts' ? 'bg-white text-purple-900 shadow-sm' : 'hover:text-slate-900'}`}
          >
            Discount Rules ({discounts.length})
          </button>
          <button
            onClick={() => setActiveTab('taxes')}
            className={`px-3 py-1.5 rounded-md transition ${activeTab === 'taxes' ? 'bg-white text-purple-900 shadow-sm' : 'hover:text-slate-900'}`}
          >
            Tax Rules ({taxes.length})
          </button>
        </div>
      </div>

      {/* PLANS TAB */}
      {activeTab === 'plans' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700">Configured Plans & Policies</h2>
            {isAdmin && (
              <button
                onClick={() => setShowPlanModal(true)}
                className="bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs px-3.5 py-2 rounded-lg shadow flex items-center space-x-1.5 transition"
              >
                <Plus className="w-4 h-4" />
                <span>Create Plan</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {plans.map((plan) => (
              <div key={plan.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow transition flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
                      {plan.billing_interval}
                    </span>
                    <span className="text-xl font-black text-slate-900">${plan.cost.toFixed(2)}</span>
                  </div>
                  <h3 className="text-base font-black text-slate-900 mt-2">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{plan.description}</p>

                  <div className="mt-3 text-xs text-slate-600 space-y-1 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <div><strong>Min Quantity:</strong> {plan.min_quantity} seat(s)</div>
                    <div><strong>Available From:</strong> {plan.start_date} {plan.end_date ? `to ${plan.end_date}` : '(Ongoing)'}</div>
                  </div>
                </div>

                {/* Plan Policies configured by Admin */}
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] space-y-1">
                  <div className="font-bold text-slate-700 mb-1">Lifecycle Policies (Admin Decided):</div>
                  <div className="flex items-center space-x-1.5">
                    <span className={`w-2 h-2 rounded-full ${plan.auto_close_on_end ? 'bg-amber-500' : 'bg-slate-300'}`}></span>
                    <span>Auto-close when ends: <strong>{plan.auto_close_on_end ? 'Yes' : 'No'}</strong></span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className={`w-2 h-2 rounded-full ${plan.allow_early_close ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
                    <span>Allow early close: <strong>{plan.allow_early_close ? 'Allowed' : 'Locked'}</strong></span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className={`w-2 h-2 rounded-full ${plan.allow_pause ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
                    <span>Allow pause: <strong>{plan.allow_pause ? 'Allowed' : 'Disabled'}</strong></span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className={`w-2 h-2 rounded-full ${plan.allow_renew ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
                    <span>Allow renew: <strong>{plan.allow_renew ? 'Allowed' : 'Disabled'}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* DISCOUNTS TAB */}
      {activeTab === 'discounts' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700">Admin Discount Rules Engine</h2>
              <p className="text-xs text-slate-500">
                "Only the admin can create discount rules. Once applied, appears on the next invoice on its own, and stops when expired or runs out."
              </p>
            </div>
            {isAdmin ? (
              <button
                onClick={() => setShowDiscountModal(true)}
                className="bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs px-3.5 py-2 rounded-lg shadow flex items-center space-x-1.5 transition"
              >
                <Plus className="w-4 h-4" />
                <span>Create Discount Rule</span>
              </button>
            ) : (
              <span className="text-xs text-amber-700 font-semibold bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                Admin privilege required to create discount rules
              </span>
            )}
          </div>

          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 border-b border-slate-200 uppercase font-semibold">
                <tr>
                  <th className="py-3 px-4">Rule Code</th>
                  <th className="py-3 px-4">Discount Value</th>
                  <th className="py-3 px-4">Thresholds</th>
                  <th className="py-3 px-4">Scope</th>
                  <th className="py-3 px-4">Valid Window</th>
                  <th className="py-3 px-4">Usage (Limit)</th>
                  <th className="py-3 px-4">Status</th>
                  {isAdmin && <th className="py-3 px-4 text-right">Toggle</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {discounts.map((d) => (
                  <tr key={d.id} className="hover:bg-slate-50/50">
                    <td className="py-3.5 px-4">
                      <div className="font-mono font-bold text-purple-900 text-sm">{d.code}</div>
                      <div className="text-[11px] text-slate-500">{d.description}</div>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-emerald-600 text-sm">
                      {d.discount_type === 'percentage' ? `${d.discount_value}% OFF` : `$${d.discount_value.toFixed(2)} OFF`}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      <div>Min Qty: {d.min_quantity > 0 ? `${d.min_quantity} seats` : 'None'}</div>
                      <div>Min Spend: {d.min_purchase_amount > 0 ? `$${d.min_purchase_amount}` : 'None'}</div>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-700">
                      {d.applies_to === 'whole_subscription' ? 'Whole Subscription' : `Specific Product (#${d.product_id})`}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      {d.start_date} to {d.end_date}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">
                      {d.used_count} / {d.usage_limit ? d.usage_limit : '∞'} used
                      {d.usage_limit && d.used_count >= d.usage_limit && (
                        <span className="block text-[10px] text-rose-500 font-bold">DEPLETED</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${d.is_active ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'}`}>
                        {d.is_active ? 'ACTIVE' : 'INACTIVE'}
                      </span>
                    </td>
                    {isAdmin && (
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => handleToggleDiscount(d.id)}
                          className="text-xs font-semibold text-purple-700 hover:text-purple-900"
                        >
                          {d.is_active ? 'Deactivate' : 'Activate'}
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAXES TAB */}
      {activeTab === 'taxes' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700">Admin Tax Rules</h2>
              <p className="text-xs text-slate-500">
                Taxes are calculated automatically on quotes and recurring invoices from rules the admin has set.
              </p>
            </div>
            {isAdmin && (
              <button
                onClick={() => setShowTaxModal(true)}
                className="bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs px-3.5 py-2 rounded-lg shadow flex items-center space-x-1.5 transition"
              >
                <Plus className="w-4 h-4" />
                <span>Add Tax Rule</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {taxes.map((t) => (
              <div key={t.id} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-700">{t.name}</span>
                  <span className="text-lg font-black text-purple-900">{t.rate_percent}%</span>
                </div>
                <div className="mt-2 text-[11px] text-slate-500">Region: {t.country || 'Global'}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Create Plan Modal */}
      {showPlanModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 space-y-4 my-8">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">Define New Billing Plan</h3>
              <button onClick={() => setShowPlanModal(false)} className="text-slate-400 font-bold">✕</button>
            </div>

            <form onSubmit={handleCreatePlan} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Plan Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Enterprise Yearly Dedicated"
                  value={planName}
                  onChange={(e) => setPlanName(e.target.value)}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Description</label>
                <input
                  type="text"
                  placeholder="Plan description notes"
                  value={planDescription}
                  onChange={(e) => setPlanDescription(e.target.value)}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Cost ($) *</label>
                  <input
                    type="number"
                    step="0.01"
                    value={planCost}
                    onChange={(e) => setPlanCost(Number(e.target.value))}
                    className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-slate-900 font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Frequency *</label>
                  <select
                    value={planInterval}
                    onChange={(e: any) => setPlanInterval(e.target.value)}
                    className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-slate-900"
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Min Qty *</label>
                  <input
                    type="number"
                    min="1"
                    value={planMinQty}
                    onChange={(e) => setPlanMinQty(Number(e.target.value))}
                    className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-slate-900 font-bold"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Start Date *</label>
                  <input
                    type="date"
                    value={planStartDate}
                    onChange={(e) => setPlanStartDate(e.target.value)}
                    className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-slate-900"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">End Date (Optional)</label>
                  <input
                    type="date"
                    value={planEndDate}
                    onChange={(e) => setPlanEndDate(e.target.value)}
                    className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-slate-900"
                  />
                </div>
              </div>

              {/* Lifecycle configuration switches */}
              <div className="border border-purple-200 bg-purple-50/50 p-3 rounded-lg space-y-2">
                <span className="font-bold text-purple-950 block">Admin Lifecycle Policy Decider:</span>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={autoCloseOnEnd}
                    onChange={(e) => setAutoCloseOnEnd(e.target.checked)}
                    className="rounded text-purple-600"
                  />
                  <span>Close on its own when period ends (Auto-close)</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allowEarlyClose}
                    onChange={(e) => setAllowEarlyClose(e.target.checked)}
                    className="rounded text-purple-600"
                  />
                  <span>Permit customers/team to close early</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allowPause}
                    onChange={(e) => setAllowPause(e.target.checked)}
                    className="rounded text-purple-600"
                  />
                  <span>Permit subscriptions on this plan to be paused</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allowRenew}
                    onChange={(e) => setAllowRenew(e.target.checked)}
                    className="rounded text-purple-600"
                  />
                  <span>Permit renewal when closed</span>
                </label>
              </div>

              <div className="flex justify-end space-x-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowPlanModal(false)}
                  className="px-3.5 py-2 border border-slate-300 rounded font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded font-bold shadow-sm"
                >
                  Save Plan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Create Discount Modal */}
      {showDiscountModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 space-y-4 my-8">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">Create Admin Discount Rule</h3>
              <button onClick={() => setShowDiscountModal(false)} className="text-slate-400 font-bold">✕</button>
            </div>

            <form onSubmit={handleCreateDiscount} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Discount Code *</label>
                  <input
                    type="text"
                    placeholder="e.g. SEATS20"
                    value={discCode}
                    onChange={(e) => setDiscCode(e.target.value)}
                    className="w-full border border-slate-300 rounded px-2.5 py-1.5 uppercase font-mono font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Discount Type</label>
                  <select
                    value={discType}
                    onChange={(e: any) => setDiscType(e.target.value)}
                    className="w-full border border-slate-300 rounded px-2.5 py-1.5"
                  >
                    <option value="percentage">Percentage (%)</option>
                    <option value="fixed">Fixed Amount ($)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Discount Value ({discType === 'percentage' ? '%' : '$'}) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={discValue}
                  onChange={(e) => setDiscValue(Number(e.target.value))}
                  className="w-full border border-slate-300 rounded px-2.5 py-1.5 font-bold"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Description</label>
                <input
                  type="text"
                  placeholder="e.g. 20% discount for orders with 5+ seats"
                  value={discDescription}
                  onChange={(e) => setDiscDescription(e.target.value)}
                  className="w-full border border-slate-300 rounded px-2.5 py-1.5"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Min Quantity Required</label>
                  <input
                    type="number"
                    value={discMinQty}
                    onChange={(e) => setDiscMinQty(Number(e.target.value))}
                    className="w-full border border-slate-300 rounded px-2.5 py-1.5"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Min Spend Amount ($)</label>
                  <input
                    type="number"
                    value={discMinPurchase}
                    onChange={(e) => setDiscMinPurchase(Number(e.target.value))}
                    className="w-full border border-slate-300 rounded px-2.5 py-1.5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Start Date *</label>
                  <input
                    type="date"
                    value={discStartDate}
                    onChange={(e) => setDiscStartDate(e.target.value)}
                    className="w-full border border-slate-300 rounded px-2 py-1.5"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">End Date *</label>
                  <input
                    type="date"
                    value={discEndDate}
                    onChange={(e) => setDiscEndDate(e.target.value)}
                    className="w-full border border-slate-300 rounded px-2 py-1.5"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Usage Limit</label>
                  <input
                    type="number"
                    placeholder="e.g. 100"
                    value={discUsageLimit}
                    onChange={(e) => setDiscUsageLimit(e.target.value ? Number(e.target.value) : '')}
                    className="w-full border border-slate-300 rounded px-2 py-1.5 font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Applies To</label>
                <select
                  value={discAppliesTo}
                  onChange={(e: any) => setDiscAppliesTo(e.target.value)}
                  className="w-full border border-slate-300 rounded px-2.5 py-1.5"
                >
                  <option value="whole_subscription">Whole Subscription Subtotal</option>
                  <option value="specific_product">Specific Product Line Only</option>
                </select>
              </div>

              {discAppliesTo === 'specific_product' && (
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Select Applicable Product</label>
                  <select
                    value={discProductId}
                    onChange={(e) => setDiscProductId(Number(e.target.value))}
                    className="w-full border border-slate-300 rounded px-2.5 py-1.5"
                  >
                    <option value="">-- Select Product --</option>
                    {products.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>
              )}

              <div className="flex justify-end space-x-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowDiscountModal(false)}
                  className="px-3.5 py-2 border border-slate-300 rounded font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded font-bold shadow-sm"
                >
                  Create Discount Rule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Tax Modal */}
      {showTaxModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="text-base font-black text-slate-900">Add Tax Rule</h3>
              <button onClick={() => setShowTaxModal(false)} className="text-slate-400 font-bold">✕</button>
            </div>

            <form onSubmit={handleCreateTax} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Tax Name *</label>
                <input
                  type="text"
                  placeholder="e.g. VAT Standard (15%)"
                  value={taxName}
                  onChange={(e) => setTaxName(e.target.value)}
                  className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Rate Percent (%) *</label>
                <input
                  type="number"
                  step="0.1"
                  value={taxRate}
                  onChange={(e) => setTaxRate(Number(e.target.value))}
                  className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-slate-900 font-bold"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Country / Region</label>
                <input
                  type="text"
                  value={taxCountry}
                  onChange={(e) => setTaxCountry(e.target.value)}
                  className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-slate-900"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowTaxModal(false)}
                  className="px-3 py-1.5 border border-slate-300 rounded font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3.5 py-1.5 bg-purple-700 text-white rounded font-bold shadow-sm"
                >
                  Save Tax
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
