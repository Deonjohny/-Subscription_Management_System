import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { Subscription, Invoice, User } from '../types';
import {
  Layers, FileText, Sparkles, CreditCard, ShieldCheck
} from 'lucide-react';

interface CustomerPortalProps {
  currentUser: User;
}

export const CustomerPortal: React.FC<CustomerPortalProps> = ({ currentUser }) => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  // Pay modal
  const [payInvoice, setPayInvoice] = useState<Invoice | null>(null);
  const [payMethod, setPayMethod] = useState('Credit Card');
  const [paying, setPaying] = useState(false);

  const loadData = async () => {
    try {
      const [subData, invData] = await Promise.all([
        api.getSubscriptions({ customer_id: currentUser.id }),
        api.getInvoices({ customer_id: currentUser.id })
      ]);
      setSubscriptions(subData);
      setInvoices(invData);
    } catch (err) {
      console.error('Error fetching portal data:', err);
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
        reference_note: 'Customer Portal Instant Settlement'
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
    <div className="space-y-7">
      {/* Cinematic Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-burgundy-950 via-burgundy-900 to-burgundy-950 border border-gold-500/40 p-7 shadow-cinematic-lg text-cream-50">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
          <div>
            <span className="text-xs font-serif font-bold uppercase tracking-wider text-gold-300 bg-gold-500/20 px-3 py-1 rounded-full border border-gold-400/40">
              Customer Self-Service Portal
            </span>
            <h1 className="text-3xl font-serif font-black mt-2.5 gold-gradient-text">
              Welcome, {currentUser.name}
            </h1>
            <p className="text-cream-200/90 text-xs mt-1">
              {currentUser.company_name} • Manage recurring plans, view payment terms, and settle invoices on demand without emailing support.
            </p>
          </div>
        </div>
      </div>

      {/* Subscriptions Section */}
      <div className="cream-card rounded-2xl shadow-cinematic p-6 space-y-4">
        <div className="flex items-center space-x-2 border-b border-gold-500/20 pb-3">
          <Layers className="w-5 h-5 text-gold-600" />
          <h2 className="text-base font-serif font-bold text-burgundy-950">My Subscriptions & Contracts</h2>
        </div>

        {subscriptions.length === 0 ? (
          <p className="text-xs text-cream-600 py-4 italic">You do not have any active subscriptions on your account.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {subscriptions.map((sub) => {
              const plan = sub.plan;
              return (
                <div key={sub.id} className="border border-gold-500/30 rounded-2xl p-5 bg-gradient-to-b from-cream-50 to-white flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-burgundy-950 bg-gold-200/70 px-2.5 py-0.5 rounded border border-gold-400/40">
                          {sub.subscription_number}
                        </span>
                        <h3 className="text-lg font-serif font-black text-burgundy-950 mt-1.5">{sub.plan?.name}</h3>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-serif font-bold border ${
                        sub.status === 'Active' ? 'bg-emerald-100 text-emerald-900 border-emerald-300' :
                        sub.status === 'Paused' ? 'bg-amber-100 text-amber-900 border-amber-300' :
                        'bg-cream-200 text-cream-800 border-cream-400'
                      }`}>
                        {sub.status.toUpperCase()}
                      </span>
                    </div>

                    <div className="mt-3.5 text-xs space-y-1.5 text-cream-800 bg-cream-50/80 p-3.5 rounded-xl border border-gold-500/20">
                      <div className="flex justify-between">
                        <span>Frequency:</span>
                        <span className="font-serif font-bold capitalize text-burgundy-950">{sub.plan?.billing_interval}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Next Scheduled Billing:</span>
                        <span className="font-serif font-bold text-emerald-800">{sub.status === 'Active' ? sub.next_billing_date : 'N/A'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Expiry Date:</span>
                        <span className="text-cream-900">{sub.expiry_date}</span>
                      </div>
                      <div className="flex justify-between font-serif font-black text-sm text-burgundy-950 border-t border-gold-500/20 pt-1.5">
                        <span>Recurring Charge:</span>
                        <span>${sub.total_amount.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Subscribed items */}
                    <div className="mt-3.5 text-xs">
                      <span className="font-serif font-bold text-burgundy-950 uppercase text-[10px] tracking-wider">Package Contents:</span>
                      <ul className="mt-1.5 space-y-1.5 text-cream-800">
                        {sub.lines.map((l) => (
                          <li key={l.id} className="flex justify-between items-center bg-white px-2.5 py-1.5 rounded-lg border border-gold-500/15">
                            <span>
                              {l.product?.name} {l.variant ? `(${l.variant.attribute_value})` : ''} × {l.quantity}
                            </span>
                            <span className="font-serif font-bold text-burgundy-950">${l.amount.toFixed(2)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Customer self-service actions governed by plan policies */}
                  <div className="mt-4 pt-3 border-t border-gold-500/20 flex flex-wrap items-center gap-2">
                    {sub.status === 'Active' && plan?.allow_pause && (
                      <button
                        onClick={() => handleStatusChange(sub.id, 'Paused')}
                        className="px-3.5 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 rounded-lg text-xs font-serif font-bold transition"
                      >
                        Pause Subscription
                      </button>
                    )}
                    {sub.status === 'Paused' && (
                      <button
                        onClick={() => handleStatusChange(sub.id, 'Active')}
                        className="px-3.5 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-serif font-bold transition"
                      >
                        Resume Subscription
                      </button>
                    )}
                    {sub.status === 'Active' && plan?.allow_early_close && (
                      <button
                        onClick={() => handleStatusChange(sub.id, 'Closed')}
                        className="px-3.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-300 rounded-lg text-xs font-serif font-bold transition"
                      >
                        Cancel Plan
                      </button>
                    )}
                    {sub.status === 'Closed' && plan?.allow_renew && (
                      <button
                        onClick={() => handleStatusChange(sub.id, 'Active')}
                        className="px-3.5 py-1.5 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-300 border border-gold-400 rounded-lg text-xs font-serif font-bold transition shadow-sm"
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
      <div className="cream-card rounded-2xl shadow-cinematic p-6 space-y-4">
        <div className="flex items-center space-x-2 border-b border-gold-500/20 pb-3">
          <FileText className="w-5 h-5 text-gold-600" />
          <h2 className="text-base font-serif font-bold text-burgundy-950">My Invoices & Receipts</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-cream-100/70 text-burgundy-950 border-b border-gold-500/20 uppercase font-serif tracking-wider font-bold">
              <tr>
                <th className="py-3.5 px-4.5">Invoice #</th>
                <th className="py-3.5 px-4.5">Issue Date</th>
                <th className="py-3.5 px-4.5">Due Date</th>
                <th className="py-3.5 px-4.5">Total Amount</th>
                <th className="py-3.5 px-4.5">Amount Due</th>
                <th className="py-3.5 px-4.5">Status</th>
                <th className="py-3.5 px-4.5 text-right">Self-Service Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold-500/10">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-gold-50/40">
                  <td className="py-4 px-4.5 font-mono font-bold text-burgundy-950">{inv.invoice_number}</td>
                  <td className="py-4 px-4.5 text-cream-800">{inv.issue_date}</td>
                  <td className="py-4 px-4.5 text-cream-800">{inv.due_date}</td>
                  <td className="py-4 px-4.5 font-serif font-bold text-burgundy-950">${inv.total_amount.toFixed(2)}</td>
                  <td className="py-4 px-4.5 font-serif font-black">
                    <span className={inv.amount_due > 0 ? 'text-rose-700' : 'text-emerald-800'}>
                      ${inv.amount_due.toFixed(2)}
                    </span>
                  </td>
                  <td className="py-4 px-4.5">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border tracking-wider ${
                      inv.status === 'Paid' ? 'bg-emerald-100 text-emerald-900 border-emerald-300' :
                      inv.status === 'Confirmed' ? 'bg-amber-100 text-amber-900 border-amber-300' :
                      'bg-cream-200 text-cream-700 border-cream-400'
                    }`}>
                      {inv.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-4 px-4.5 text-right space-x-2">
                    <button
                      onClick={() => openPrint(inv.id)}
                      className="px-3 py-1.5 bg-cream-100 hover:bg-cream-200 text-burgundy-950 border border-gold-500/30 rounded-lg text-xs font-serif font-bold transition"
                    >
                      View / Print
                    </button>
                    {inv.amount_due > 0 && (
                      <button
                        onClick={() => setPayInvoice(inv)}
                        className="px-3.5 py-1.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-burgundy-950 rounded-lg text-xs font-serif font-black shadow-gold-subtle transition"
                      >
                        Settle Online
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {invoices.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-10 text-center text-cream-600 italic">No invoices recorded.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Luxury Checkout Card Modal */}
      {payInvoice && (
        <div className="fixed inset-0 bg-burgundy-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="cream-card rounded-2xl shadow-cinematic-lg max-w-sm w-full p-6 space-y-4 border border-gold-400">
            <div className="flex justify-between items-center border-b border-gold-500/20 pb-3">
              <div>
                <h3 className="text-xl font-serif font-black text-burgundy-950">Settle Balance Online</h3>
                <p className="text-xs text-cream-700">{payInvoice.invoice_number}</p>
              </div>
              <button onClick={() => setPayInvoice(null)} className="text-burgundy-800 font-bold text-lg">✕</button>
            </div>

            <form onSubmit={handlePay} className="space-y-4 text-xs">
              <div className="bg-gradient-to-r from-gold-50 to-cream-100 border border-gold-400/50 rounded-xl p-4 text-center shadow-sm">
                <span className="text-xs font-serif font-bold text-burgundy-950">Outstanding Balance Due</span>
                <div className="text-3xl font-serif font-black text-burgundy-950 mt-1">
                  ${payInvoice.amount_due.toFixed(2)}
                </div>
              </div>

              <div>
                <label className="block font-serif font-bold text-burgundy-950 mb-1">Select Payment Method</label>
                <select
                  value={payMethod}
                  onChange={(e) => setPayMethod(e.target.value)}
                  className="w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 bg-white"
                >
                  <option value="Credit Card">Credit Card (Stripe Checkout)</option>
                  <option value="Bank Transfer">Wire Transfer Confirmation</option>
                  <option value="PayPal">PayPal Balance</option>
                </select>
              </div>

              <div className="flex justify-end space-x-2 pt-2 border-t border-gold-500/20">
                <button
                  type="button"
                  onClick={() => setPayInvoice(null)}
                  className="px-4 py-2 border border-gold-500/30 rounded-xl font-serif font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={paying}
                  className="px-4 py-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-burgundy-950 rounded-xl font-serif font-black shadow-gold-subtle"
                >
                  {paying ? 'Authorizing...' : `Pay $${payInvoice.amount_due.toFixed(2)}`}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
