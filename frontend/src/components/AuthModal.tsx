import React, { useState } from 'react';
import { api } from '../api';
import { User } from '../types';
import { Lock, Mail, UserCheck, ShieldCheck, Check, X, ArrowRight, RefreshCw, Key } from 'lucide-react';

interface AuthModalProps {
  onSuccess: (user: User, token: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onSuccess }) => {
  const [mode, setMode] = useState<'login' | 'register' | 'forgot' | 'reset'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Password rules validation check:
  // "more than eight characters, with an uppercase letter, a lowercase letter and a special character"
  const hasLength = password.length > 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isPasswordValid = hasLength && hasUpper && hasLower && hasSpecial;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);
    try {
      const data = await api.login(email.trim().toLowerCase(), password);
      localStorage.setItem('token', data.access_token);
      onSuccess(data.user, data.access_token);
    } catch (err: any) {
      setMessage({
        text: err.response?.data?.detail || 'Invalid email or password',
        type: 'error'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPasswordValid) {
      setMessage({
        text: 'Password does not satisfy security requirements',
        type: 'error'
      });
      return;
    }

    setSubmitting(true);
    setMessage(null);
    try {
      const data = await api.register({
        email: email.trim().toLowerCase(),
        password,
        name,
        company_name: companyName
      });
      localStorage.setItem('token', data.access_token);
      onSuccess(data.user, data.access_token);
    } catch (err: any) {
      setMessage({
        text: err.response?.data?.detail || 'Registration failed. Email might already be taken.',
        type: 'error'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);
    try {
      const res = await api.forgotPassword(email.trim().toLowerCase());
      if (res.reset_token) {
        setResetToken(res.reset_token);
        setMessage({
          text: `Reset link dispatched! Simulation token: ${res.reset_token}`,
          type: 'success'
        });
        setMode('reset');
      } else {
        setMessage({ text: res.message, type: 'success' });
      }
    } catch (err: any) {
      setMessage({ text: 'Error dispatching reset link', type: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);
    try {
      const res = await api.resetPassword({
        email: email.trim().toLowerCase(),
        reset_token: resetToken,
        new_password: newPassword
      });
      setMessage({ text: res.message, type: 'success' });
      setMode('login');
    } catch (err: any) {
      setMessage({
        text: err.response?.data?.detail || 'Reset failed. Token may be invalid or expired.',
        type: 'error'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const quickFill = (demoEmail: string, demoPass: string) => {
    setEmail(demoEmail);
    setPassword(demoPass);
    setMode('login');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-gradient-to-tr from-[#714B67] to-[#017E84] p-6 text-white text-center">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-black text-2xl mx-auto shadow-inner">
            B
          </div>
          <h1 className="text-2xl font-black mt-3">Brightloop Software</h1>
          <p className="text-white/80 text-xs mt-1">Unified Subscription & Recurring Billing Platform</p>
        </div>

        {/* Demo fast-fill buttons */}
        <div className="bg-slate-100/80 px-4 py-2.5 border-b border-slate-200 text-xs">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 text-center">
            ⚡ Quick Demo Accounts
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <button
              type="button"
              onClick={() => quickFill('admin@brightloop.io', 'BrightloopAdmin!2026')}
              className="py-1 px-2 bg-purple-100 hover:bg-purple-200 text-purple-900 rounded font-semibold text-[11px] transition text-center"
            >
              👑 Admin
            </button>
            <button
              type="button"
              onClick={() => quickFill('sarah.sales@brightloop.io', 'StaffMember!2026')}
              className="py-1 px-2 bg-blue-100 hover:bg-blue-200 text-blue-900 rounded font-semibold text-[11px] transition text-center"
            >
              💼 Staff
            </button>
            <button
              type="button"
              onClick={() => quickFill('alice@techflow.com', 'CustomerPass!2026')}
              className="py-1 px-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 rounded font-semibold text-[11px] transition text-center"
            >
              🏢 Customer
            </button>
          </div>
        </div>

        {/* Feedback message */}
        {message && (
          <div className={`p-3 text-xs mx-4 mt-4 rounded-lg font-medium ${message.type === 'error' ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
            {message.text}
          </div>
        )}

        {/* LOGIN FORM */}
        {mode === 'login' && (
          <form onSubmit={handleLogin} className="p-6 space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@brightloop.io"
                  className="w-full border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-semibold text-slate-700">Password</label>
                <button
                  type="button"
                  onClick={() => { setMode('forgot'); setMessage(null); }}
                  className="text-purple-700 hover:underline text-[11px]"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2.5 bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white font-bold rounded-lg shadow transition text-sm flex justify-center items-center space-x-1"
            >
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center pt-2 text-slate-500">
              New customer?{' '}
              <button
                type="button"
                onClick={() => { setMode('register'); setMessage(null); }}
                className="text-purple-700 font-bold hover:underline"
              >
                Create an account
              </button>
            </div>
          </form>
        )}

        {/* REGISTER FORM */}
        {mode === 'register' && (
          <form onSubmit={handleRegister} className="p-6 space-y-3.5 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Jane Doe"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-900"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Company / Organization</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Acme Innovations Ltd"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-900"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Email Address *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@acme.com"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-900"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Password *</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Must meet strength criteria below"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-900"
                required
              />

              {/* Password Requirement Checklist directly from PDF spec:
                  "must be more than eight characters, with an uppercase letter, a lowercase letter and a special character" */}
              <div className="mt-2.5 p-2.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1 text-[11px]">
                <div className="font-bold text-slate-700 mb-1">Password Requirements:</div>
                <div className={`flex items-center space-x-1.5 ${hasLength ? 'text-emerald-600 font-bold' : 'text-slate-400'}`}>
                  {hasLength ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                  <span>More than 8 characters ({password.length}/9+)</span>
                </div>
                <div className={`flex items-center space-x-1.5 ${hasUpper ? 'text-emerald-600 font-bold' : 'text-slate-400'}`}>
                  {hasUpper ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                  <span>At least one uppercase letter (A-Z)</span>
                </div>
                <div className={`flex items-center space-x-1.5 ${hasLower ? 'text-emerald-600 font-bold' : 'text-slate-400'}`}>
                  {hasLower ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                  <span>At least one lowercase letter (a-z)</span>
                </div>
                <div className={`flex items-center space-x-1.5 ${hasSpecial ? 'text-emerald-600 font-bold' : 'text-slate-400'}`}>
                  {hasSpecial ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                  <span>At least one special character (!@#$%^&*...)</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting || !isPasswordValid}
              className="w-full py-2.5 bg-purple-700 hover:bg-purple-800 disabled:opacity-50 text-white font-bold rounded-lg shadow transition text-sm"
            >
              Create Customer Account
            </button>

            <div className="text-center pt-1 text-slate-500">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => { setMode('login'); setMessage(null); }}
                className="text-purple-700 font-bold hover:underline"
              >
                Sign in
              </button>
            </div>
          </form>
        )}

        {/* FORGOT PASSWORD FORM */}
        {mode === 'forgot' && (
          <form onSubmit={handleForgot} className="p-6 space-y-4 text-xs">
            <p className="text-slate-600">
              Enter your registered email address. A password reset link will arrive at your registered inbox.
            </p>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Registered Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alice@techflow.com"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-900"
                required
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-lg shadow transition text-sm"
            >
              Send Reset Link
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => { setMode('login'); setMessage(null); }}
                className="text-slate-500 hover:text-slate-800 font-medium"
              >
                ← Back to Login
              </button>
            </div>
          </form>
        )}

        {/* RESET PASSWORD FORM */}
        {mode === 'reset' && (
          <form onSubmit={handleReset} className="p-6 space-y-3.5 text-xs">
            <p className="text-slate-600">
              Enter your reset token and your new secure password.
            </p>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Reset Token</label>
              <input
                type="text"
                value={resetToken}
                onChange={(e) => setResetToken(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-mono"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="NewPassword!2026"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-900"
                required
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-lg shadow transition text-sm"
            >
              Set New Password & Log In
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => { setMode('login'); setMessage(null); }}
                className="text-slate-500 hover:text-slate-800 font-medium"
              >
                ← Back to Login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
