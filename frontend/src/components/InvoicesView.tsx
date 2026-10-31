import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { Invoice } from '../types';
import {
  FileText, Send, Printer, DollarSign,
  Search, Filter, Download
} from 'lucide-react';

interface InvoicesViewProps {
  initialInvoiceId?: number | null;
}

export const InvoicesView: React.FC<InvoicesViewProps> = ({ initialInvoiceId }) => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  // Payment Recording Modal
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState('Bank Transfer');
  const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0]);
  const [paymentNote, setPaymentNote] = useState('');
  const [recordingPayment, setRecordingPayment] = useState(false);

  const loadInvoices = async () => {
    try {
      const data = await api.getInvoices();
      setInvoices(data);
      if (initialInvoiceId) {
        const match = data.find(i => i.id === initialInvoiceId);
        if (match) setSelectedInvoice(match);
      }
    } catch (err) {
      console.error('Error loading invoices:', err);
    }
  };

  useEffect(() => {
    loadInvoices();
  }, [initialInvoiceId]);

  const handleStatusChange = async (invoiceId: number, action: 'confirm' | 'cancel') => {
    try {
      await api.updateInvoiceStatus(invoiceId, action);
      await loadInvoices();
      if (selectedInvoice?.id === invoiceId) {
        const updated = await api.getInvoice(invoiceId);
        setSelectedInvoice(updated);
      }
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Status action failed');
    }
  };

  const handleSendInvoice = async (invoiceId: number) => {
    try {
      const res = await api.sendInvoice(invoiceId);
      alert(res.message);
      await loadInvoices();
      if (selectedInvoice?.id === invoiceId) {
        const updated = await api.getInvoice(invoiceId);
        setSelectedInvoice(updated);
      }
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Failed to send invoice');
    }
  };

  const openPaymentModal = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setPaymentAmount(invoice.amount_due);
    setPaymentNote(`Payment for ${invoice.invoice_number}`);
    setShowPaymentModal(true);
  };

  const handleRecordPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedInvoice) return;
    if (paymentAmount <= 0) {
      alert('Payment amount must be greater than zero');
      return;
    }

    setRecordingPayment(true);
    try {
      await api.recordPayment(selectedInvoice.id, {
        payment_method: paymentMethod,
        amount: Number(paymentAmount),
        payment_date: paymentDate,
        reference_note: paymentNote
      });
      setShowPaymentModal(false);
      await loadInvoices();
      const updated = await api.getInvoice(selectedInvoice.id);
      setSelectedInvoice(updated);
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Failed to record payment');
    } finally {
      setRecordingPayment(false);
    }
  };

  const openPrintWindow = (invoiceId: number) => {
    window.open(`/api/invoices/${invoiceId}/print`, '_blank', 'width=900,height=800');
  };

  const filteredInvoices = invoices.filter(inv => {
    const isOverdue = inv.status === 'Confirmed' && new Date(inv.due_date) < new Date() && inv.amount_due > 0;
    const matchesStatus =
      statusFilter === 'ALL' ||
      (statusFilter === 'OVERDUE' ? isOverdue : inv.status === statusFilter);

    const matchesSearch =
      inv.invoice_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.customer?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.customer?.company_name?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-serif font-black text-burgundy-950 tracking-tight">
            Invoices & Collections
          </h1>
          <p className="text-cream-700 text-sm">
            Automated recurring invoices, payment recording, customer receipts, and overdue tracking.
          </p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-gold-600" />
          <input
            type="text"
            placeholder="Search by invoice number or customer name..."
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
            <option value="ALL">All Invoices</option>
            <option value="Draft">Draft</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Paid">Paid</option>
            <option value="OVERDUE">Overdue Only</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <button
            onClick={async () => {
              try {
                await api.downloadInvoicesCSV();
              } catch {
                alert('Failed to export CSV ledger');
              }
            }}
            className="cream-card hover:bg-gold-500 hover:text-burgundy-950 rounded-xl px-3.5 py-2.5 text-xs text-burgundy-950 font-serif font-bold flex items-center space-x-1.5 transition active:scale-95 border border-gold-400/60 cursor-pointer shadow-sm"
            title="Download Full General Ledger as CSV"
          >
            <Download className="w-4 h-4 text-gold-600" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Invoices List */}
      <div className="cream-card rounded-2xl overflow-hidden shadow-cinematic">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-cream-100/70 text-burgundy-950 border-b border-gold-500/20 uppercase font-serif tracking-wider font-bold">
              <tr>
                <th className="py-3.5 px-4.5">Invoice #</th>
                <th className="py-3.5 px-4.5">Client</th>
                <th className="py-3.5 px-4.5">Issue Date</th>
                <th className="py-3.5 px-4.5">Due Date</th>
                <th className="py-3.5 px-4.5">Total Amount</th>
                <th className="py-3.5 px-4.5">Amount Due</th>
                <th className="py-3.5 px-4.5">Status</th>
                <th className="py-3.5 px-4.5 text-right">Ledger Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold-500/10">
              {filteredInvoices.map((inv) => {
                const isOverdue = inv.status === 'Confirmed' && new Date(inv.due_date) < new Date() && inv.amount_due > 0;
                return (
                  <tr key={inv.id} className="interactive-row cursor-pointer">
                    <td className="py-4 px-4.5 font-mono font-bold text-burgundy-950">
                      {inv.invoice_number}
                    </td>
                    <td className="py-4 px-4.5">
                      <div className="font-serif font-bold text-burgundy-950">{inv.customer?.name}</div>
                      <div className="text-[11px] text-cream-600">{inv.customer?.company_name}</div>
                    </td>
                    <td className="py-4 px-4.5 text-cream-800">{inv.issue_date}</td>
                    <td className="py-4 px-4.5">
                      <span className={`font-semibold ${isOverdue ? 'text-rose-700 font-bold' : 'text-cream-800'}`}>
                        {inv.due_date}
                      </span>
                    </td>
                    <td className="py-4 px-4.5 font-serif font-bold text-burgundy-950">
                      ${inv.total_amount.toFixed(2)}
                    </td>
                    <td className="py-4 px-4.5 font-serif font-black">
                      <span className={inv.amount_due > 0 ? (isOverdue ? 'text-rose-700' : 'text-amber-800') : 'text-emerald-800'}>
                        ${inv.amount_due.toFixed(2)}
                      </span>
                    </td>
                    <td className="py-4 px-4.5">
                      {isOverdue ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-300">
                          OVERDUE
                        </span>
                      ) : (
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border tracking-wider ${
                          inv.status === 'Paid' ? 'bg-emerald-100 text-emerald-900 border-emerald-300' :
                          inv.status === 'Confirmed' ? 'bg-amber-100 text-amber-900 border-amber-300' :
                          inv.status === 'Draft' ? 'bg-cream-200 text-burgundy-800 border-cream-400' :
                          'bg-rose-100 text-rose-800 border-rose-300'
                        }`}>
                          {inv.status.toUpperCase()}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4.5 text-right space-x-1.5">
                      <button
                        onClick={() => setSelectedInvoice(inv)}
                        className="px-2.5 py-1.5 bg-cream-100 hover:bg-cream-200 text-burgundy-950 border border-gold-500/30 rounded-lg font-serif font-bold text-xs transition"
                      >
                        Inspect
                      </button>
                      {inv.amount_due > 0 && inv.status !== 'Cancelled' && (
                        <button
                          onClick={() => openPaymentModal(inv)}
                          className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-serif font-bold text-xs shadow-sm transition"
                        >
                          Record Pay
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
              {filteredInvoices.length === 0 && (
                <tr>
                  <td colSpan={8} className="py-10 text-center text-cream-600 font-serif text-sm">
                    No invoices recorded on books.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invoice Detail Modal */}
      {selectedInvoice && (
        <div className="fixed inset-0 bg-burgundy-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="cream-card rounded-2xl shadow-cinematic-lg max-w-3xl w-full p-6 space-y-6 my-8 border border-gold-400">
            <div className="flex justify-between items-start border-b border-gold-500/20 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-burgundy-950 bg-gold-200/60 px-2.5 py-0.5 rounded border border-gold-400/60">
                  {selectedInvoice.invoice_number}
                </span>
                <h2 className="text-2xl font-serif font-black text-burgundy-950 mt-1">
                  Invoice Ledger & Audit Trail
                </h2>
                <p className="text-xs text-cream-700">
                  Client: {selectedInvoice.customer?.name} ({selectedInvoice.customer?.email})
                </p>
              </div>
              <button
                onClick={() => setSelectedInvoice(null)}
                className="text-burgundy-800 hover:text-burgundy-950 font-bold text-xl"
              >
                ✕
              </button>
            </div>

            {/* Action Bar */}
            <div className="p-3.5 bg-cream-100/60 border border-gold-500/30 rounded-xl flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-serif font-bold text-burgundy-950">Status:</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-serif font-bold bg-burgundy-900 text-gold-300 border border-gold-400/50">
                  {selectedInvoice.status}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {selectedInvoice.status === 'Draft' && (
                  <button
                    onClick={() => handleStatusChange(selectedInvoice.id, 'confirm')}
                    className="px-3.5 py-1.5 bg-burgundy-800 hover:bg-burgundy-900 text-gold-200 border border-gold-400/50 rounded-lg text-xs font-serif font-bold shadow-sm transition"
                  >
                    Confirm Invoice
                  </button>
                )}
                {selectedInvoice.status !== 'Paid' && selectedInvoice.status !== 'Cancelled' && (
                  <button
                    onClick={() => handleStatusChange(selectedInvoice.id, 'cancel')}
                    className="px-3.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-300 rounded-lg text-xs font-serif font-bold transition"
                  >
                    Cancel Invoice
                  </button>
                )}
                <button
                  onClick={() => handleSendInvoice(selectedInvoice.id)}
                  className="px-3.5 py-1.5 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 border border-gold-400/50 rounded-lg text-xs font-serif font-bold flex items-center space-x-1.5 transition shadow-sm"
                >
                  <Send className="w-3.5 h-3.5 text-gold-400" />
                  <span>Send to Customer</span>
                </button>
                <button
                  onClick={() => openPrintWindow(selectedInvoice.id)}
                  className="px-3.5 py-1.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-burgundy-950 rounded-lg text-xs font-serif font-bold flex items-center space-x-1.5 transition shadow-gold-subtle"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / PDF View</span>
                </button>
                {selectedInvoice.amount_due > 0 && (
                  <button
                    onClick={() => openPaymentModal(selectedInvoice)}
                    className="px-3.5 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-serif font-bold flex items-center space-x-1.5 transition shadow-sm"
                  >
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>Record Payment</span>
                  </button>
                )}
              </div>
            </div>

            {/* Line items table */}
            <div>
              <table className="w-full text-xs text-left border border-gold-500/20 rounded-xl overflow-hidden">
                <thead className="bg-cream-100/70 text-burgundy-950 font-serif font-bold">
                  <tr>
                    <th className="py-2.5 px-3.5">Line Description</th>
                    <th className="py-2.5 px-3.5 text-center">Qty</th>
                    <th className="py-2.5 px-3.5 text-right">Unit Price</th>
                    <th className="py-2.5 px-3.5 text-right">Tax Rate</th>
                    <th className="py-2.5 px-3.5 text-right">Discount</th>
                    <th className="py-2.5 px-3.5 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold-500/10">
                  {selectedInvoice.lines.map((l) => (
                    <tr key={l.id}>
                      <td className="py-3 px-3.5 font-serif font-bold text-burgundy-950">{l.description}</td>
                      <td className="py-3 px-3.5 text-center font-bold">{l.quantity}</td>
                      <td className="py-3 px-3.5 text-right">${l.unit_price.toFixed(2)}</td>
                      <td className="py-3 px-3.5 text-right">{l.tax_rate}%</td>
                      <td className="py-3 px-3.5 text-right text-emerald-800 font-bold">-${l.discount_amount.toFixed(2)}</td>
                      <td className="py-3 px-3.5 text-right font-serif font-black text-burgundy-950">${l.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Totals Box */}
              <div className="mt-4 flex justify-end">
                <div className="w-72 space-y-1.5 text-xs bg-cream-50 p-4 rounded-xl border border-gold-400/40 shadow-sm">
                  <div className="flex justify-between text-cream-800">
                    <span>Untaxed Subtotal:</span>
                    <span className="font-medium">${selectedInvoice.untaxed_amount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-emerald-800 font-bold">
                    <span>Discount:</span>
                    <span>-${selectedInvoice.discount_amount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-cream-800">
                    <span>Tax Amount:</span>
                    <span className="font-medium">+${selectedInvoice.tax_amount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-serif font-black text-sm text-burgundy-950 border-t border-gold-500/30 pt-1.5">
                    <span>Total Billed:</span>
                    <span>${selectedInvoice.total_amount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-emerald-800 font-bold">
                    <span>Amount Paid:</span>
                    <span>${selectedInvoice.amount_paid.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-serif font-black text-base text-rose-700 border-t border-gold-500/30 pt-1.5">
                    <span>Outstanding Due:</span>
                    <span>${selectedInvoice.amount_due.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment History Log */}
            <div>
              <h3 className="text-xs font-serif font-black text-burgundy-950 uppercase tracking-wider mb-2.5">
                Recorded Payments Log
              </h3>
              {selectedInvoice.payments.length === 0 ? (
                <p className="text-xs text-cream-600 italic">No payments have been logged for this invoice yet.</p>
              ) : (
                <div className="border border-gold-500/20 rounded-xl overflow-hidden">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-cream-100/70 text-burgundy-950 font-serif font-bold">
                      <tr>
                        <th className="py-2.5 px-3.5">Payment Date</th>
                        <th className="py-2.5 px-3.5">Method</th>
                        <th className="py-2.5 px-3.5">Reference / Statement Note</th>
                        <th className="py-2.5 px-3.5 text-right">Amount Settled</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gold-500/10">
                      {selectedInvoice.payments.map((p) => (
                        <tr key={p.id}>
                          <td className="py-2.5 px-3.5 font-mono">{p.payment_date}</td>
                          <td className="py-2.5 px-3.5 font-serif font-bold text-burgundy-950">{p.payment_method}</td>
                          <td className="py-2.5 px-3.5 text-cream-700">{p.reference_note || '—'}</td>
                          <td className="py-2.5 px-3.5 text-right font-serif font-black text-emerald-800">+${p.amount.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-3 border-t border-gold-500/20">
              <button
                onClick={() => setSelectedInvoice(null)}
                className="px-4 py-2 bg-cream-200 hover:bg-cream-300 text-burgundy-950 rounded-xl text-xs font-serif font-bold transition"
              >
                Close Ledger
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Record Payment Modal */}
      {showPaymentModal && selectedInvoice && (
        <div className="fixed inset-0 bg-burgundy-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="cream-card rounded-2xl shadow-cinematic-lg max-w-md w-full p-6 space-y-4 border border-gold-400 animate-scale-in">
            <div className="flex justify-between items-center border-b border-gold-500/20 pb-3">
              <div>
                <h3 className="text-xl font-serif font-black text-burgundy-950">Record Payment</h3>
                <p className="text-xs text-cream-700">Invoice {selectedInvoice.invoice_number}</p>
              </div>
              <button onClick={() => setShowPaymentModal(false)} className="text-burgundy-800 font-bold text-lg">✕</button>
            </div>

            <form onSubmit={handleRecordPayment} className="space-y-4 text-xs">
              <div>
                <label className="block font-serif font-bold text-burgundy-950 mb-1">Payment Method *</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white"
                >
                  <option value="Bank Transfer">Bank Wire Transfer</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="PayPal">PayPal</option>
                  <option value="Direct Debit">Direct Debit</option>
                  <option value="Cash">Cash Ledger</option>
                </select>
              </div>

              <div>
                <label className="block font-serif font-bold text-burgundy-950 mb-1">
                  Amount Received ($) * (Outstanding: ${selectedInvoice.amount_due.toFixed(2)})
                </label>
                <input
                  type="number"
                  step="0.01"
                  max={selectedInvoice.amount_due}
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(Number(e.target.value))}
                  className="w-full border border-gold-500/40 rounded-lg px-3 py-2 text-burgundy-950 font-serif font-black text-sm focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white"
                  required
                />
              </div>

              <div>
                <label className="block font-serif font-bold text-burgundy-950 mb-1">Payment Date *</label>
                <input
                  type="date"
                  value={paymentDate}
                  onChange={(e) => setPaymentDate(e.target.value)}
                  className="w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white font-mono"
                  required
                />
              </div>

              <div>
                <label className="block font-serif font-bold text-burgundy-950 mb-1">Reference / Note</label>
                <input
                  type="text"
                  placeholder="e.g. Bank statement tx ID or check number"
                  value={paymentNote}
                  onChange={(e) => setPaymentNote(e.target.value)}
                  className="w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white"
                />
              </div>

              <div className="flex justify-end space-x-2.5 pt-3 border-t border-gold-500/20">
                <button
                  type="button"
                  onClick={() => setShowPaymentModal(false)}
                  className="px-4 py-2 border border-gold-500/30 text-burgundy-900 rounded-xl font-serif font-bold hover:bg-cream-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={recordingPayment}
                  className="px-4 py-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-burgundy-950 rounded-xl font-serif font-black transition shadow-gold-subtle"
                >
                  Confirm & Post Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
