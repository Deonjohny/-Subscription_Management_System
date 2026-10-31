import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { Invoice, Payment } from '../types';
import {
  FileText, CheckCircle2, XCircle, Send, Printer, DollarSign,
  Search, Filter, Clock, AlertTriangle, Eye, CreditCard
} from 'lucide-react';

interface InvoicesViewProps {
  initialInvoiceId?: number | null;
}

export const InvoicesView: React.FC<InvoicesViewProps> = ({ initialInvoiceId }) => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
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
    setLoading(true);
    try {
      const data = await api.getInvoices();
      setInvoices(data);
      if (initialInvoiceId) {
        const match = data.find(i => i.id === initialInvoiceId);
        if (match) setSelectedInvoice(match);
      }
    } catch (err) {
      console.error('Error loading invoices:', err);
    } finally {
      setLoading(false);
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

  // Filtered
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
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Invoices & Collections</h1>
          <p className="text-slate-500 text-sm">
            Automated recurring invoices, payment recording, customer receipts, and overdue tracking.
          </p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search by invoice number or customer..."
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
            <option value="ALL">All Invoices</option>
            <option value="Draft">Draft</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Paid">Paid</option>
            <option value="OVERDUE">Overdue Only</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Invoices List */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 border-b border-slate-200 uppercase font-semibold">
              <tr>
                <th className="py-3 px-4">Invoice #</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Issue Date</th>
                <th className="py-3 px-4">Due Date</th>
                <th className="py-3 px-4">Total Amount</th>
                <th className="py-3 px-4">Amount Due</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredInvoices.map((inv) => {
                const isOverdue = inv.status === 'Confirmed' && new Date(inv.due_date) < new Date() && inv.amount_due > 0;
                return (
                  <tr key={inv.id} className="hover:bg-purple-50/20 transition">
                    <td className="py-3.5 px-4 font-mono font-bold text-purple-900">
                      {inv.invoice_number}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-slate-900">{inv.customer?.name}</div>
                      <div className="text-[11px] text-slate-400">{inv.customer?.company_name}</div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">{inv.issue_date}</td>
                    <td className="py-3.5 px-4">
                      <span className={`font-semibold ${isOverdue ? 'text-rose-600 font-bold' : 'text-slate-700'}`}>
                        {inv.due_date}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-800">
                      ${inv.total_amount.toFixed(2)}
                    </td>
                    <td className="py-3.5 px-4 font-black">
                      <span className={inv.amount_due > 0 ? (isOverdue ? 'text-rose-600' : 'text-amber-600') : 'text-emerald-600'}>
                        ${inv.amount_due.toFixed(2)}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      {isOverdue ? (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700 border border-rose-300">
                          OVERDUE
                        </span>
                      ) : (
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          inv.status === 'Paid' ? 'bg-emerald-100 text-emerald-800' :
                          inv.status === 'Confirmed' ? 'bg-blue-100 text-blue-800' :
                          inv.status === 'Draft' ? 'bg-slate-100 text-slate-700' :
                          'bg-rose-100 text-rose-700'
                        }`}>
                          {inv.status.toUpperCase()}
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-right space-x-1.5">
                      <button
                        onClick={() => setSelectedInvoice(inv)}
                        className="px-2.5 py-1 bg-slate-100 hover:bg-purple-100 text-purple-700 rounded font-semibold text-xs transition"
                      >
                        Inspect
                      </button>
                      {inv.amount_due > 0 && inv.status !== 'Cancelled' && (
                        <button
                          onClick={() => openPaymentModal(inv)}
                          className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-semibold text-xs shadow-sm transition"
                        >
                          Pay
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
              {filteredInvoices.length === 0 && (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-slate-400 text-sm">
                    No invoices found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invoice Detail & Control Modal */}
      {selectedInvoice && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full p-6 space-y-6 my-8">
            <div className="flex justify-between items-start border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                  {selectedInvoice.invoice_number}
                </span>
                <h2 className="text-xl font-black text-slate-900 mt-1">
                  Invoice Summary & Ledger
                </h2>
                <p className="text-xs text-slate-500">
                  Customer: {selectedInvoice.customer?.name} ({selectedInvoice.customer?.email})
                </p>
              </div>
              <button
                onClick={() => setSelectedInvoice(null)}
                className="text-slate-400 hover:text-slate-600 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            {/* Action Bar */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold text-slate-600">Status:</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-900">
                  {selectedInvoice.status}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {selectedInvoice.status === 'Draft' && (
                  <button
                    onClick={() => handleStatusChange(selectedInvoice.id, 'confirm')}
                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-bold shadow-sm transition"
                  >
                    Confirm Invoice
                  </button>
                )}
                {selectedInvoice.status !== 'Paid' && selectedInvoice.status !== 'Cancelled' && (
                  <button
                    onClick={() => handleStatusChange(selectedInvoice.id, 'cancel')}
                    className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded text-xs font-bold transition"
                  >
                    Cancel Invoice
                  </button>
                )}
                <button
                  onClick={() => handleSendInvoice(selectedInvoice.id)}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded text-xs font-bold flex items-center space-x-1 transition shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send to Customer</span>
                </button>
                <button
                  onClick={() => openPrintWindow(selectedInvoice.id)}
                  className="px-3 py-1.5 bg-purple-700 hover:bg-purple-800 text-white rounded text-xs font-bold flex items-center space-x-1 transition shadow-sm"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / PDF View</span>
                </button>
                {selectedInvoice.amount_due > 0 && (
                  <button
                    onClick={() => openPaymentModal(selectedInvoice)}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold flex items-center space-x-1 transition shadow-sm"
                  >
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>Record Payment</span>
                  </button>
                )}
              </div>
            </div>

            {/* Line items table */}
            <div>
              <table className="w-full text-xs text-left border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-100 text-slate-700 font-semibold">
                  <tr>
                    <th className="py-2 px-3">Description</th>
                    <th className="py-2 px-3 text-center">Qty</th>
                    <th className="py-2 px-3 text-right">Unit Price</th>
                    <th className="py-2 px-3 text-right">Tax Rate</th>
                    <th className="py-2 px-3 text-right">Discount</th>
                    <th className="py-2 px-3 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {selectedInvoice.lines.map((l) => (
                    <tr key={l.id}>
                      <td className="py-2.5 px-3 font-semibold text-slate-800">{l.description}</td>
                      <td className="py-2.5 px-3 text-center">{l.quantity}</td>
                      <td className="py-2.5 px-3 text-right">${l.unit_price.toFixed(2)}</td>
                      <td className="py-2.5 px-3 text-right">{l.tax_rate}%</td>
                      <td className="py-2.5 px-3 text-right text-emerald-600">-${l.discount_amount.toFixed(2)}</td>
                      <td className="py-2.5 px-3 text-right font-bold text-slate-900">${l.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Totals */}
              <div className="mt-4 flex justify-end">
                <div className="w-64 space-y-1.5 text-xs bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <div className="flex justify-between text-slate-600">
                    <span>Untaxed Subtotal:</span>
                    <span className="font-medium">${selectedInvoice.untaxed_amount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-emerald-600">
                    <span>Total Discount:</span>
                    <span className="font-medium">-${selectedInvoice.discount_amount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Tax:</span>
                    <span className="font-medium">+${selectedInvoice.tax_amount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-sm text-slate-900 border-t border-slate-200 pt-1">
                    <span>Total Amount:</span>
                    <span>${selectedInvoice.total_amount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Amount Paid:</span>
                    <span>${selectedInvoice.amount_paid.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-black text-sm text-rose-600 border-t border-slate-200 pt-1">
                    <span>Amount Due:</span>
                    <span>${selectedInvoice.amount_due.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment History Log */}
            <div>
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Recorded Payments Log</h3>
              {selectedInvoice.payments.length === 0 ? (
                <p className="text-xs text-slate-400 italic">No payments have been logged for this invoice yet.</p>
              ) : (
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-50 text-slate-600">
                      <tr>
                        <th className="py-2 px-3">Date</th>
                        <th className="py-2 px-3">Method</th>
                        <th className="py-2 px-3">Reference / Note</th>
                        <th className="py-2 px-3 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {selectedInvoice.payments.map((p) => (
                        <tr key={p.id}>
                          <td className="py-2 px-3">{p.payment_date}</td>
                          <td className="py-2 px-3 font-semibold text-slate-800">{p.payment_method}</td>
                          <td className="py-2 px-3 text-slate-500">{p.reference_note || '—'}</td>
                          <td className="py-2 px-3 text-right font-bold text-emerald-600">+${p.amount.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-3 border-t border-slate-100">
              <button
                onClick={() => setSelectedInvoice(null)}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded text-xs font-bold transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Record Payment Modal */}
      {showPaymentModal && selectedInvoice && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-black text-slate-900">Record Payment</h3>
                <p className="text-xs text-slate-500">Invoice {selectedInvoice.invoice_number}</p>
              </div>
              <button onClick={() => setShowPaymentModal(false)} className="text-slate-400 font-bold">✕</button>
            </div>

            <form onSubmit={handleRecordPayment} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Payment Method *</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-purple-500"
                >
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="PayPal">PayPal</option>
                  <option value="Direct Debit">Direct Debit</option>
                  <option value="Cash">Cash</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Amount Received ($) * (Outstanding: ${selectedInvoice.amount_due.toFixed(2)})
                </label>
                <input
                  type="number"
                  step="0.01"
                  max={selectedInvoice.amount_due}
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(Number(e.target.value))}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 font-bold text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Payment Date *</label>
                <input
                  type="date"
                  value={paymentDate}
                  onChange={(e) => setPaymentDate(e.target.value)}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Reference / Note</label>
                <input
                  type="text"
                  placeholder="e.g. Bank statement tx ID or check number"
                  value={paymentNote}
                  onChange={(e) => setPaymentNote(e.target.value)}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowPaymentModal(false)}
                  className="px-3.5 py-2 border border-slate-300 text-slate-700 rounded font-bold hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={recordingPayment}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-bold transition shadow-sm"
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
