import React, { useState } from 'react';
import { api } from '../api';
import { User } from '../types';
import { Lock, Mail, Check, X, ArrowRight, Sparkles } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-burgundy-950 via-burgundy-900 to-burgundy-950 flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Background radial gold glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-burgundy-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-md w-full cream-card rounded-3xl shadow-cinematic-lg overflow-hidden border border-gold-400 relative z-10 animate-scale-in">
        {/* Header with Regal Monogram */}
        <div className="bg-gradient-to-br from-burgundy-950 via-burgundy-900 to-burgundy-950 p-7 text-center border-b border-gold-500/30">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-gold-300 via-gold-500 to-gold-700 p-[1.5px] mx-auto shadow-gold-glow">
            <div className="w-full h-full bg-burgundy-950 rounded-[14px] flex items-center justify-center font-serif font-black text-xl text-gold-300 tracking-wider">
              Z5
            </div>
          </div>
          <h1 className="text-2xl font-serif font-black mt-3.5 gold-gradient-text tracking-wide">
            Zebra5 Software
          </h1>
          <p className="text-cream-200/90 text-xs mt-1 font-serif tracking-widest uppercase">
            Autonomous Subscription OS & Recurring Ledger
          </p>
        </div>

        {/* Demo Fast-Fill Ribbon */}
        <div className="bg-gradient-to-r from-cream-100 via-cream-50 to-cream-100 px-5 py-3 border-b border-gold-500/20 text-xs">
          <div className="text-[11px] font-serif font-bold text-burgundy-900 uppercase tracking-wider mb-2 text-center flex items-center justify-center space-x-1">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Instant Demo Accounts</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => quickFill('admin@brightloop.io', 'BrightloopAdmin!2026')}
              className="py-1.5 px-2 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 border border-gold-400/50 rounded-lg font-serif font-bold text-[11px] transition text-center shadow-sm"
            >
              👑 Admin
            </button>
            <button
              type="button"
              onClick={() => quickFill('sarah.sales@brightloop.io', 'StaffMember!2026')}
              className="py-1.5 px-2 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 border border-gold-400/50 rounded-lg font-serif font-bold text-[11px] transition text-center shadow-sm"
            >
              💼 Staff
            </button>
            <button
              type="button"
              onClick={() => quickFill('alice@techflow.com', 'CustomerPass!2026')}
              className="py-1.5 px-2 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 border border-gold-400/50 rounded-lg font-serif font-bold text-[11px] transition text-center shadow-sm"
            >
              🏢 Customer
            </button>
          </div>
        </div>

        {/* Feedback message */}
        {message && (
          <div className={`p-3.5 text-xs mx-6 mt-4 rounded-xl font-serif font-semibold ${message.type === 'error' ? 'bg-rose-50 text-rose-800 border border-rose-300' : 'bg-emerald-50 text-emerald-900 border border-emerald-300'}`}>
            {message.text}
          </div>
        )}

        {/* LOGIN FORM */}
        {mode === 'login' && (
          <form onSubmit={handleLogin} className="p-6 space-y-4 text-xs">
            <div>
              <label className="block font-serif font-bold text-burgundy-950 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gold-600 absolute left-3 top-2.5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@brightloop.io"
                  className="w-full border border-gold-500/30 rounded-xl pl-9 pr-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-serif font-bold text-burgundy-950">Password</label>
                <button
                  type="button"
                  onClick={() => { setMode('forgot'); setMessage(null); }}
                  className="text-burgundy-800 hover:text-burgundy-950 font-serif font-semibold text-[11px] underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-gold-600 absolute left-3 top-2.5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full border border-gold-500/30 rounded-xl pl-9 pr-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white font-mono"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2.5 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-burgundy-950 font-serif font-black rounded-xl shadow-gold-subtle transition text-sm flex justify-center items-center space-x-1.5"
            >
              <span>Authenticate Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center pt-2 text-cream-800">
              New client?{' '}
              <button
                type="button"
                onClick={() => { setMode('register'); setMessage(null); }}
                className="text-burgundy-900 font-serif font-bold hover:underline"
              >
                Create business account
              </button>
            </div>
          </form>
        )}

        {/* REGISTER FORM */}
        {mode === 'register' && (
          <form onSubmit={handleRegister} className="p-6 space-y-3.5 text-xs">
            <div>
              <label className="block font-serif font-bold text-burgundy-950 mb-1">Full Legal Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Jane Doe"
                className="w-full border border-gold-500/30 rounded-xl px-3 py-2 text-burgundy-950 bg-white"
                required
              />
            </div>

            <div>
              <label className="block font-serif font-bold text-burgundy-950 mb-1">Company / Organization</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Acme Innovations Ltd"
                className="w-full border border-gold-500/30 rounded-xl px-3 py-2 text-burgundy-950 bg-white"
              />
            </div>

            <div>
              <label className="block font-serif font-bold text-burgundy-950 mb-1">Corporate Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@acme.com"
                className="w-full border border-gold-500/30 rounded-xl px-3 py-2 text-burgundy-950 bg-white"
                required
              />
            </div>

            <div>
              <label className="block font-serif font-bold text-burgundy-950 mb-1">Password *</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Must satisfy criteria below"
                className="w-full border border-gold-500/30 rounded-xl px-3 py-2 text-burgundy-950 font-mono bg-white"
                required
              />

              {/* Password Requirement Checklist directly from PDF spec:
                  "must be more than eight characters, with an uppercase letter, a lowercase letter and a special character" */}
              <div className="mt-2.5 p-3 bg-cream-50 border border-gold-500/30 rounded-xl space-y-1 text-[11px]">
                <div className="font-serif font-bold text-burgundy-950 mb-1">Security Criteria:</div>
                <div className={`flex items-center space-x-1.5 ${hasLength ? 'text-emerald-800 font-bold' : 'text-cream-600'}`}>
                  {hasLength ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <X className="w-3.5 h-3.5" />}
                  <span>More than 8 characters ({password.length}/9+)</span>
                </div>
                <div className={`flex items-center space-x-1.5 ${hasUpper ? 'text-emerald-800 font-bold' : 'text-cream-600'}`}>
                  {hasUpper ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <X className="w-3.5 h-3.5" />}
                  <span>At least one uppercase letter (A-Z)</span>
                </div>
                <div className={`flex items-center space-x-1.5 ${hasLower ? 'text-emerald-800 font-bold' : 'text-cream-600'}`}>
                  {hasLower ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <X className="w-3.5 h-3.5" />}
                  <span>At least one lowercase letter (a-z)</span>
                </div>
                <div className={`flex items-center space-x-1.5 ${hasSpecial ? 'text-emerald-800 font-bold' : 'text-cream-600'}`}>
                  {hasSpecial ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <X className="w-3.5 h-3.5" />}
                  <span>At least one special character (!@#$%^&*...)</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting || !isPasswordValid}
              className="w-full py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 disabled:opacity-50 text-burgundy-950 font-serif font-black rounded-xl shadow-gold-subtle transition text-sm"
            >
              Create Client Portal Account
            </button>

            <div className="text-center pt-1 text-cream-800">
              Existing account?{' '}
              <button
                type="button"
                onClick={() => { setMode('login'); setMessage(null); }}
                className="text-burgundy-900 font-serif font-bold hover:underline"
              >
                Sign in
              </button>
            </div>
          </form>
        )}

        {/* FORGOT PASSWORD FORM */}
        {mode === 'forgot' && (
          <form onSubmit={handleForgot} className="p-6 space-y-4 text-xs">
            <p className="text-cream-800 leading-relaxed font-serif">
              Enter your registered email address. A password reset token link will be dispatched to your inbox.
            </p>
            <div>
              <label className="block font-serif font-bold text-burgundy-950 mb-1">Registered Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alice@techflow.com"
                className="w-full border border-gold-500/30 rounded-xl px-3 py-2 text-burgundy-950 bg-white"
                required
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 text-burgundy-950 font-serif font-black rounded-xl shadow-gold-subtle transition text-sm"
            >
              Dispatch Reset Token
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => { setMode('login'); setMessage(null); }}
                className="text-burgundy-800 hover:text-burgundy-950 font-serif font-bold"
              >
                ← Back to Login
              </button>
            </div>
          </form>
        )}

        {/* RESET PASSWORD FORM */}
        {mode === 'reset' && (
          <form onSubmit={handleReset} className="p-6 space-y-3.5 text-xs">
            <p className="text-cream-800 leading-relaxed font-serif">
              Enter the reset token sent to your email and your new secure password.
            </p>
            <div>
              <label className="block font-serif font-bold text-burgundy-950 mb-1">Reset Token</label>
              <input
                type="text"
                value={resetToken}
                onChange={(e) => setResetToken(e.target.value)}
                className="w-full border border-gold-500/30 rounded-xl px-3 py-2 text-burgundy-950 font-mono bg-white"
                required
              />
            </div>

            <div>
              <label className="block font-serif font-bold text-burgundy-950 mb-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="NewSecurePass!2026"
                className="w-full border border-gold-500/30 rounded-xl px-3 py-2 text-burgundy-950 font-mono bg-white"
                required
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 text-burgundy-950 font-serif font-black rounded-xl shadow-gold-subtle transition text-sm"
            >
              Update Password & Enter
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => { setMode('login'); setMessage(null); }}
                className="text-burgundy-800 hover:text-burgundy-950 font-serif font-bold"
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
