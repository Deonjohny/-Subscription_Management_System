import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { Subscription, Invoice, User } from '../types';
import {
  Layers, FileText, CheckCircle2, Clock, PauseCircle,
  Play, XCircle, Printer, DollarSign, Calendar
} from 'lucide-react';

interface CustomerPortalProps {
  currentUser: User;
}

export const CustomerPortal: React.FC<CustomerPortalProps> = ({ currentUser }) => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  // Pay modal
  const [payInvoice, setPayInvoice] = useState<Invoice | null>(null);
  const [payMethod, setPayMethod] = useState('Credit Card');
  const [paying, setPaying] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const [subData, invData] = await Promise.all([
        api.getSubscriptions({ customer_id: currentUser.id }),
        api.getInvoices({ customer_id: currentUser.id })
      ]);
      setSubscriptions(subData);
      setInvoices(invData);
    } catch (err) {
      console.error('Error fetching portal data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [currentUser.id]);

  const handleStatusChange = async (subId: number, nextStatus: string) => {
    try {
      await api.updateSubscriptionStatus(subId, nextStatus);
      await loadData();
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Action not permitted by plan policy');
    }
  };

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!payInvoice) return;

    setPaying(true);
    try {
      await api.recordPayment(payInvoice.id, {
        payment_method: payMethod,
        amount: payInvoice.amount_due,
        payment_date: new Date().toISOString().split('T')[0],
        reference_note: 'Paid via Customer Portal Online Checkout'
      });
      setPayInvoice(null);
      await loadData();
      alert('Payment successful! Your invoice is now marked as PAID.');
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Payment failed');
    } finally {
      setPaying(false);
    }
  };

  const openPrint = (invId: number) => {
    window.open(`/api/invoices/${invId}/print`, '_blank', 'width=900,height=800');
  };

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-teal-950 border border-teal-900/60 rounded-xl p-6 text-white shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs font-mono uppercase font-bold text-teal-300 bg-teal-900/50 px-2.5 py-0.5 rounded border border-teal-500/30">
              Customer Self-Service Portal
            </span>
            <h1 className="text-2xl font-black mt-2">Welcome back, {currentUser.name}</h1>
            <p className="text-slate-300 text-xs mt-1">
              {currentUser.company_name} • Manage recurring plans, view payment terms, and settle invoices on-demand.
            </p>
          </div>
        </div>
      </div>

      {/* Subscriptions Section */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 space-y-4">
        <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
          <Layers className="w-5 h-5 text-teal-600" />
          <h2 className="text-base font-bold text-slate-900">My Subscriptions & Contracts</h2>
        </div>

        {subscriptions.length === 0 ? (
          <p className="text-xs text-slate-400 py-4 italic">You do not have any active subscriptions right now.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subscriptions.map((sub) => {
              const plan = sub.plan;
              return (
                <div key={sub.id} className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-purple-700 bg-purple-100/60 px-2 py-0.5 rounded">
                          {sub.subscription_number}
                        </span>
                        <h3 className="text-base font-black text-slate-900 mt-1">{sub.plan?.name}</h3>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                        sub.status === 'Active' ? 'bg-emerald-100 text-emerald-800' :
                        sub.status === 'Paused' ? 'bg-amber-100 text-amber-800' :
                        'bg-slate-200 text-slate-700'
                      }`}>
                        {sub.status.toUpperCase()}
                      </span>
                    </div>

                    <div className="mt-3 text-xs space-y-1.5 text-slate-600 bg-white p-3 rounded-lg border border-slate-200/80">
                      <div className="flex justify-between">
                        <span>Billing Frequency:</span>
                        <span className="font-bold capitalize text-slate-800">{sub.plan?.billing_interval}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Next Scheduled Billing:</span>
                        <span className="font-bold text-teal-700">{sub.status === 'Active' ? sub.next_billing_date : 'N/A'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Contract Expiry:</span>
                        <span className="text-slate-700">{sub.expiry_date}</span>
                      </div>
                      <div className="flex justify-between font-bold text-slate-900 border-t border-slate-100 pt-1.5">
                        <span>Recurring Charge:</span>
                        <span>${sub.total_amount.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Subscribed items */}
                    <div className="mt-3 text-xs">
                      <span className="font-bold text-slate-500 uppercase text-[10px]">Package Items:</span>
                      <ul className="mt-1 space-y-1 text-slate-700">
                        {sub.lines.map((l) => (
                          <li key={l.id} className="flex justify-between items-center bg-white px-2 py-1 rounded border border-slate-100">
                            <span>
                              {l.product?.name} {l.variant ? `(${l.variant.attribute_value})` : ''} × {l.quantity}
                            </span>
                            <span className="font-semibold">${l.amount.toFixed(2)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Customer self-service actions governed by plan policies */}
                  <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap items-center gap-2">
                    {sub.status === 'Active' && plan?.allow_pause && (
                      <button
                        onClick={() => handleStatusChange(sub.id, 'Paused')}
                        className="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 rounded text-xs font-bold transition"
                      >
                        Pause Subscription
                      </button>
                    )}
                    {sub.status === 'Paused' && (
                      <button
                        onClick={() => handleStatusChange(sub.id, 'Active')}
                        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold transition"
                      >
                        Resume Subscription
                      </button>
                    )}
                    {sub.status === 'Active' && plan?.allow_early_close && (
                      <button
                        onClick={() => handleStatusChange(sub.id, 'Closed')}
                        className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded text-xs font-bold transition"
                      >
                        Cancel Plan
                      </button>
                    )}
                    {sub.status === 'Closed' && plan?.allow_renew && (
                      <button
                        onClick={() => handleStatusChange(sub.id, 'Active')}
                        className="px-3 py-1.5 bg-purple-700 hover:bg-purple-800 text-white rounded text-xs font-bold transition"
                      >
                        Renew Subscription
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Invoices Section */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 space-y-4">
        <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
          <FileText className="w-5 h-5 text-teal-600" />
          <h2 className="text-base font-bold text-slate-900">My Invoices & Receipts</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 border-b border-slate-200 uppercase font-semibold">
              <tr>
                <th className="py-3 px-4">Invoice #</th>
                <th className="py-3 px-4">Issue Date</th>
                <th className="py-3 px-4">Due Date</th>
                <th className="py-3 px-4">Total Amount</th>
                <th className="py-3 px-4">Amount Due</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50/50">
                  <td className="py-3.5 px-4 font-mono font-bold text-purple-900">{inv.invoice_number}</td>
                  <td className="py-3.5 px-4 text-slate-600">{inv.issue_date}</td>
                  <td className="py-3.5 px-4 text-slate-600">{inv.due_date}</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">${inv.total_amount.toFixed(2)}</td>
                  <td className="py-3.5 px-4 font-bold">
                    <span className={inv.amount_due > 0 ? 'text-rose-600 font-black' : 'text-emerald-600'}>
                      ${inv.amount_due.toFixed(2)}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      inv.status === 'Paid' ? 'bg-emerald-100 text-emerald-800' :
                      inv.status === 'Confirmed' ? 'bg-blue-100 text-blue-800' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {inv.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right space-x-2">
                    <button
                      onClick={() => openPrint(inv.id)}
                      className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-semibold"
                    >
                      View / Print
                    </button>
                    {inv.amount_due > 0 && (
                      <button
                        onClick={() => setPayInvoice(inv)}
                        className="px-3 py-1 bg-teal-600 hover:bg-teal-700 text-white rounded text-xs font-bold shadow-sm"
                      >
                        Pay Online
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {invoices.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-400 italic">No invoices found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Online Pay Modal */}
      {payInvoice && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-black text-slate-900">Settle Invoice Online</h3>
                <p className="text-xs text-slate-500">{payInvoice.invoice_number}</p>
              </div>
              <button onClick={() => setPayInvoice(null)} className="text-slate-400 font-bold">✕</button>
            </div>

            <form onSubmit={handlePay} className="space-y-3.5 text-xs">
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-3 text-center">
                <span className="text-xs text-teal-800 font-medium">Total Amount Due</span>
                <div className="text-2xl font-black text-teal-950 mt-1">${payInvoice.amount_due.toFixed(2)}</div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Payment Method</label>
                <select
                  value={payMethod}
                  onChange={(e) => setPayMethod(e.target.value)}
                  className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-slate-900"
                >
                  <option value="Credit Card">Credit Card (Stripe / Visa)</option>
                  <option value="Bank Transfer">Direct Wire Transfer</option>
                  <option value="PayPal">PayPal Balance</option>
                </select>
              </div>

              <div className="flex justify-end space-x-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setPayInvoice(null)}
                  className="px-3.5 py-1.5 border border-slate-300 rounded font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={paying}
                  className="px-4 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded font-bold shadow-sm"
                >
                  {paying ? 'Processing...' : `Pay $${payInvoice.amount_due.toFixed(2)} Now`}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
