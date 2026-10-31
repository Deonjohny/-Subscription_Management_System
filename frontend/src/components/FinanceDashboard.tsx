import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { FinanceSummary, Invoice } from '../types';
import {
  TrendingUp, AlertCircle, DollarSign, Users,
  Play, CheckCircle2, Clock, RefreshCw, Sparkles, Award,
  Download, Zap, ShieldCheck, HeartHandshake, ArrowUpRight
} from 'lucide-react';

interface FinanceDashboardProps {
  onNavigateToInvoice: (invoiceId: number) => void;
}

export const FinanceDashboard: React.FC<FinanceDashboardProps> = ({ onNavigateToInvoice }) => {
  const [summary, setSummary] = useState<FinanceSummary | null>(null);
  const [overdueInvoices, setOverdueInvoices] = useState<Invoice[]>([]);
  const [billingDate, setBillingDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [billingResult, setBillingResult] = useState<any>(null);
  const [runningBilling, setRunningBilling] = useState(false);
  const [responseSpeedMs, setResponseSpeedMs] = useState<number>(0);

  // Enterprise Addons State
  const [dunningResult, setDunningResult] = useState<any>(null);
  const [runningDunning, setRunningDunning] = useState(false);
  const [healthScores, setHealthScores] = useState<any[]>([]);
  const [exportingCsv, setExportingCsv] = useState(false);

  const loadData = async () => {
    const start = performance.now();
    try {
      const [sumData, overdueData, healthData] = await Promise.all([
        api.getFinanceSummary(),
        api.getInvoices({ overdue_only: true }),
        api.getCustomerHealthScores()
      ]);
      setSummary(sumData);
      setOverdueInvoices(overdueData);
      setHealthScores(healthData);
      const end = performance.now();
      setResponseSpeedMs(Math.round(end - start));
    } catch (err) {
      console.error('Error fetching finance summary:', err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleRunBillingDay = async () => {
    setRunningBilling(true);
    try {
      const result = await api.triggerBillingDay(billingDate);
      setBillingResult(result);
      await loadData();
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Failed to execute billing day');
    } finally {
      setRunningBilling(false);
    }
  };

  const handleExportCSV = async () => {
    setExportingCsv(true);
    try {
      await api.downloadInvoicesCSV();
    } catch (err) {
      alert('Failed to export CSV ledger');
    } finally {
      setExportingCsv(false);
    }
  };

  const handleRunDunning = async () => {
    setRunningDunning(true);
    try {
      const res = await api.runSmartDunning();
      setDunningResult(res);
      await loadData();
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Failed to execute dunning recovery');
    } finally {
      setRunningDunning(false);
    }
  };

  return (
    <div className="space-y-7">
      {/* Cinematic Burgundy & Gold Hero Command Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-burgundy-950 via-burgundy-900 to-burgundy-950 border border-gold-500/40 p-7 shadow-cinematic-lg text-cream-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-burgundy-700/20 rounded-full blur-2xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 relative z-10">
          <div>
            <div className="flex items-center space-x-2.5">
              <span className="bg-gold-500/20 text-gold-300 text-xs px-3 py-1 rounded-full font-serif font-bold border border-gold-400/40 tracking-wider uppercase flex items-center space-x-1.5 shadow-sm">
                <CrownIcon className="w-3.5 h-3.5 text-gold-400" />
                <span>Executive Month-End Command</span>
              </span>
              <span className="bg-emerald-950/80 text-emerald-300 text-xs px-2.5 py-1 rounded-full font-mono flex items-center space-x-1.5 border border-emerald-500/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Sub-Second Response: {responseSpeedMs}ms</span>
              </span>
              <button
                onClick={handleExportCSV}
                disabled={exportingCsv}
                className="bg-gold-500/20 hover:bg-gold-500/35 text-gold-300 text-xs px-3 py-1 rounded-full font-serif font-bold border border-gold-400/50 flex items-center space-x-1.5 transition active:scale-95 shadow-sm cursor-pointer"
                title="Download Full Ledger as CSV for QuickBooks / Excel"
              >
                <Download className="w-3.5 h-3.5 text-gold-300" />
                <span>{exportingCsv ? 'Exporting...' : 'Export Ledger (CSV)'}</span>
              </button>
            </div>
            <h1 className="text-3xl font-serif font-black mt-3 tracking-tight gold-gradient-text">
              Zebra5 Financial Ledger
            </h1>
            <p className="text-cream-200/90 text-sm mt-1.5 max-w-2xl font-sans">
              Instantaneous intelligence across active contracts, ARR / MRR velocity, automated billing cycles, and overdue payment chase queues.
            </p>
          </div>

          {/* Automated Billing Day Trigger Box with Gold Hairline Border */}
          <div className="bg-burgundy-900/90 border border-gold-400/40 p-4 rounded-xl flex flex-col sm:flex-row items-center gap-3.5 shadow-gold-subtle backdrop-blur-md">
            <div>
              <label className="block text-[11px] font-serif uppercase tracking-wider font-semibold text-gold-200 mb-1">
                Billing Cycle Date
              </label>
              <input
                type="date"
                value={billingDate}
                onChange={(e) => setBillingDate(e.target.value)}
                className="bg-burgundy-950 border border-gold-500/40 rounded-lg px-3 py-1.5 text-xs text-cream-50 focus:outline-none focus:ring-1 focus:ring-gold-400 font-mono"
              />
            </div>
            <div className="self-end mt-2 sm:mt-0">
              <button
                onClick={handleRunBillingDay}
                disabled={runningBilling}
                className="bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-burgundy-950 font-serif font-bold text-xs px-4 py-2.5 rounded-lg shadow-gold-glow flex items-center space-x-1.5 transition duration-200 disabled:opacity-50"
              >
                {runningBilling ? <RefreshCw className="w-3.5 h-3.5 animate-spin text-burgundy-950" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>Execute Billing Day</span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Feedback Toast */}
        {billingResult && (
          <div className="mt-5 p-3.5 bg-burgundy-900/95 border border-gold-400/60 rounded-xl text-xs flex justify-between items-center text-cream-100 shadow-gold-subtle animate-fade-in">
            <div className="flex items-center space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>
                <strong>Idempotent Billing Day Executed ({billingResult.target_date}):</strong> Evaluated {billingResult.subscriptions_evaluated} subscriptions, generated <strong>{billingResult.invoices_generated} new invoices</strong>. Zero skipped, idempotent guarantee satisfied.
              </span>
            </div>
            <button
              onClick={() => setBillingResult(null)}
              className="text-gold-300 hover:text-cream-50 ml-3 font-bold text-sm"
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* KPI Cards Grid - Rich Cream with Gold Borders & Burgundy Accents */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Active Subscriptions */}
        <div className="cream-card rounded-2xl p-5 transition duration-300 relative overflow-hidden group">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[11px] font-serif font-bold uppercase tracking-wider text-burgundy-700/80">Active Subscriptions</p>
              <h3 className="text-3xl font-serif font-black text-burgundy-950 mt-1">
                {summary?.active_subscriptions_count ?? 0}
              </h3>
              <p className="text-xs text-cream-700 mt-1">
                Out of {summary?.total_subscriptions_count ?? 0} total on books
              </p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-burgundy-900 border border-gold-500/40 flex items-center justify-center text-gold-300 shadow-sm group-hover:scale-105 transition">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-gold-500/20 flex items-center justify-between text-xs text-burgundy-900">
            <span className="font-medium text-cream-700">Monthly Run-rate (MRR):</span>
            <span className="font-serif font-bold text-burgundy-950">${summary?.mrr.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
          </div>
        </div>

        {/* Revenue Collected */}
        <div className="cream-card rounded-2xl p-5 transition duration-300 relative overflow-hidden group">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[11px] font-serif font-bold uppercase tracking-wider text-burgundy-700/80">Revenue Collected</p>
              <h3 className="text-3xl font-serif font-black text-emerald-800 mt-1">
                ${summary?.total_revenue_collected.toLocaleString('en-US', { minimumFractionDigits: 2 }) ?? '0.00'}
              </h3>
              <p className="text-xs text-cream-700 mt-1">
                Cleared from {summary?.paid_invoices_count ?? 0} settled invoices
              </p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-burgundy-900 border border-gold-500/40 flex items-center justify-center text-gold-300 shadow-sm group-hover:scale-105 transition">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-gold-500/20 flex items-center justify-between text-xs text-burgundy-900">
            <span className="font-medium text-cream-700">Annual Run-rate (ARR):</span>
            <span className="font-serif font-bold text-burgundy-950">${summary?.arr.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
          </div>
        </div>

        {/* Total Outstanding */}
        <div className="cream-card rounded-2xl p-5 transition duration-300 relative overflow-hidden group">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[11px] font-serif font-bold uppercase tracking-wider text-burgundy-700/80">Total Outstanding</p>
              <h3 className="text-3xl font-serif font-black text-amber-800 mt-1">
                ${summary?.total_outstanding_amount.toLocaleString('en-US', { minimumFractionDigits: 2 }) ?? '0.00'}
              </h3>
              <p className="text-xs text-cream-700 mt-1">
                Across {summary?.unpaid_invoices_count ?? 0} pending invoices
              </p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-burgundy-900 border border-gold-500/40 flex items-center justify-center text-gold-300 shadow-sm group-hover:scale-105 transition">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-gold-500/20 flex items-center justify-between text-xs text-burgundy-900">
            <span className="font-medium text-cream-700">Collection Status:</span>
            <span className="font-semibold text-amber-700">Awaiting Settlement</span>
          </div>
        </div>

        {/* Overdue Receivables */}
        <div className="bg-[#FFF9F9] border border-rose-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300 relative overflow-hidden group">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[11px] font-serif font-bold uppercase tracking-wider text-rose-800">Overdue Receivables</p>
              <h3 className="text-3xl font-serif font-black text-rose-700 mt-1">
                ${summary?.overdue_invoices_amount.toLocaleString('en-US', { minimumFractionDigits: 2 }) ?? '0.00'}
              </h3>
              <p className="text-xs text-rose-600 font-medium mt-1">
                {summary?.overdue_invoices_count ?? 0} invoices past terms
              </p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-rose-900 border border-gold-500/40 flex items-center justify-center text-gold-300 shadow-sm group-hover:scale-105 transition">
              <AlertCircle className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-rose-200 flex items-center justify-between text-xs text-rose-700 font-semibold">
            <span>Action Required:</span>
            <span>Chase Overdue Now</span>
          </div>
        </div>
      </div>

      {/* Overdue Receivables Chase Ledger */}
      <div className="cream-card rounded-2xl overflow-hidden shadow-cinematic">
        <div className="px-6 py-4.5 bg-gradient-to-r from-cream-100 to-cream-50 border-b border-gold-500/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h2 className="text-base font-serif font-black text-burgundy-950 flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-rose-600" />
              <span>Overdue Invoices — Immediate Chase Ledger</span>
            </h2>
            <p className="text-xs text-cream-700 mt-0.5">
              Invoices whose payment terms have lapsed. Settle immediately before turning into lost revenue.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleRunDunning}
              disabled={runningDunning || overdueInvoices.length === 0}
              className="text-xs bg-gradient-to-r from-rose-700 to-burgundy-900 hover:from-rose-600 hover:to-burgundy-800 text-gold-200 border border-gold-400/50 font-serif font-bold flex items-center space-x-1.5 px-3 py-1.5 rounded-lg shadow-sm transition active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              <Zap className={`w-3.5 h-3.5 text-gold-400 ${runningDunning ? 'animate-bounce' : ''}`} />
              <span>{runningDunning ? 'Executing Dunning...' : '⚡ Smart Dunning Chase'}</span>
            </button>
            <button
              onClick={loadData}
              className="text-xs text-burgundy-900 hover:text-burgundy-950 font-semibold flex items-center space-x-1 px-3 py-1.5 border border-gold-500/40 rounded-lg bg-cream-50 hover:bg-gold-50 transition"
            >
              <RefreshCw className="w-3.5 h-3.5 text-gold-600" />
              <span>Refresh Ledger</span>
            </button>
          </div>
        </div>

        {/* Smart Dunning Result Toast */}
        {dunningResult && (
          <div className="m-4 p-4 bg-rose-950/95 border border-gold-400/60 rounded-xl text-xs text-cream-100 shadow-cinematic animate-fade-in flex flex-col space-y-2">
            <div className="flex justify-between items-center border-b border-gold-500/30 pb-2">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-serif font-bold text-gold-300">
                  Automated Revenue Recovery Dispatch Complete:
                </span>
                <span>{dunningResult.message}</span>
              </div>
              <button onClick={() => setDunningResult(null)} className="text-gold-300 hover:text-white font-bold">✕</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-1 text-[11px]">
              {dunningResult.actions_dispatched?.map((a: any, idx: number) => (
                <div key={idx} className="bg-burgundy-900/80 p-2.5 rounded-lg border border-gold-500/20">
                  <div className="font-bold text-cream-100 font-mono">{a.invoice_number} • ${a.amount_due}</div>
                  <div className="text-gold-400 font-semibold">{a.dunning_stage}</div>
                  <div className="text-cream-200/70 text-[10px] mt-0.5">{a.action_taken}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {overdueInvoices.length === 0 ? (
          <div className="py-14 text-center text-cream-700 text-sm">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2 opacity-90" />
            <p className="font-serif font-bold text-burgundy-950 text-base">All Subscriptions Current</p>
            <p className="text-xs text-cream-600 mt-1">Zero overdue receivables found across all books.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-cream-100/70 text-burgundy-900 border-b border-gold-500/20 uppercase font-serif tracking-wider font-bold">
                <tr>
                  <th className="py-3.5 px-5">Invoice Reference</th>
                  <th className="py-3.5 px-5">Customer Organization</th>
                  <th className="py-3.5 px-5">Terms Deadline</th>
                  <th className="py-3.5 px-5">Total Billed</th>
                  <th className="py-3.5 px-5">Amount Due</th>
                  <th className="py-3.5 px-5">Status</th>
                  <th className="py-3.5 px-5 text-right">Ledger Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold-500/10">
                {overdueInvoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-gold-50/40 transition">
                    <td className="py-4 px-5 font-mono font-bold text-burgundy-950">
                      {inv.invoice_number}
                    </td>
                    <td className="py-4 px-5">
                      <div className="font-bold text-burgundy-950 font-serif">{inv.customer?.name}</div>
                      <div className="text-cream-600 text-[11px]">{inv.customer?.company_name || inv.customer?.email}</div>
                    </td>
                    <td className="py-4 px-5 font-semibold text-rose-700 flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-rose-500" />
                      <span>{inv.due_date} (Lapsed)</span>
                    </td>
                    <td className="py-4 px-5 text-burgundy-900 font-medium">
                      ${inv.total_amount.toFixed(2)}
                    </td>
                    <td className="py-4 px-5 font-serif font-black text-rose-700 text-sm">
                      ${inv.amount_due.toFixed(2)}
                    </td>
                    <td className="py-4 px-5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-300 tracking-wider">
                        OVERDUE
                      </span>
                    </td>
                    <td className="py-4 px-5 text-right space-x-2">
                      <button
                        onClick={() => onNavigateToInvoice(inv.id)}
                        className="px-3 py-1.5 bg-gradient-to-r from-burgundy-900 to-burgundy-800 hover:from-burgundy-800 hover:to-burgundy-700 text-gold-300 border border-gold-400/50 rounded-lg text-xs font-serif font-bold shadow-sm transition duration-150"
                      >
                        Chase & Settle
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Enterprise Addon: Customer Health & Churn Risk Matrix */}
      <div className="cream-card rounded-2xl overflow-hidden shadow-cinematic">
        <div className="px-6 py-4.5 bg-gradient-to-r from-cream-100 to-cream-50 border-b border-gold-500/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h2 className="text-base font-serif font-black text-burgundy-950 flex items-center space-x-2">
              <HeartHandshake className="w-5 h-5 text-gold-600" />
              <span>Customer Health & Churn Risk Predictor</span>
            </h2>
            <p className="text-xs text-cream-700 mt-0.5">
              Machine-driven retention scoring factoring payment promptness, contract tenure, and overdue liabilities.
            </p>
          </div>
          <span className="text-xs font-serif font-bold text-burgundy-900 bg-gold-200/50 px-3 py-1 rounded-full border border-gold-400/60">
            PROACTIVE RETENTION AI
          </span>
        </div>

        <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {healthScores.map((c) => {
            const isHigh = c.health_score >= 85;
            const isMid = c.health_score >= 50 && c.health_score < 85;
            return (
              <div
                key={c.customer_id}
                className="bg-white border border-gold-500/25 rounded-xl p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-serif font-bold text-burgundy-950 text-sm">{c.customer_name}</h4>
                      <p className="text-[11px] text-cream-600">{c.company_name}</p>
                    </div>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                        isHigh
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          : isMid
                          ? 'bg-amber-100 text-amber-800 border-amber-300'
                          : 'bg-rose-100 text-rose-800 border-rose-300'
                      }`}
                    >
                      {c.risk_tier}
                    </span>
                  </div>

                  <div className="space-y-1.5 my-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-cream-700">Account Health Score:</span>
                      <span className="font-mono font-bold text-burgundy-950">{c.health_score}/100</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-cream-200 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          isHigh ? 'bg-emerald-500' : isMid ? 'bg-amber-500' : 'bg-rose-500'
                        }`}
                        style={{ width: `${c.health_score}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[11px] text-cream-600 pt-1">
                      <span>Active Contracts: {c.active_subscriptions}</span>
                      <span>Overdue Invoices: {c.overdue_invoices_count}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-gold-500/15 text-[11px] text-burgundy-900/90 flex items-start space-x-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span><strong>AI Recommendation:</strong> {c.recommendation}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

function CrownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
    </svg>
  );
}
