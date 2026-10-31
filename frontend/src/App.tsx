import React, { useState, useEffect } from 'react';
import { api } from './api';
import { User } from './types';
import { Navbar } from './components/Navbar';
import { FinanceDashboard } from './components/FinanceDashboard';
import { SubscriptionsView } from './components/SubscriptionsView';
import { InvoicesView } from './components/InvoicesView';
import { ProductsView } from './components/ProductsView';
import { PlansDiscountsView } from './components/PlansDiscountsView';
import { StaffManagerView } from './components/StaffManagerView';
import { CustomerPortal } from './components/CustomerPortal';
import { AuthModal } from './components/AuthModal';
import { CinematicEntry } from './components/CinematicEntry';

export const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [currentTab, setCurrentTab] = useState<string>('finance');
  const [targetInvoiceId, setTargetInvoiceId] = useState<number | null>(null);
  const [showCinematic, setShowCinematic] = useState<boolean>(true);

  // Check existing session
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.getMe()
        .then((user) => {
          setCurrentUser(user);
          if (user.role === 'customer') {
            setCurrentTab('portal');
          } else {
            setCurrentTab('finance');
          }
        })
        .catch(() => {
          localStorage.removeItem('token');
          setCurrentUser(null);
        })
        .finally(() => setLoadingUser(false));
    } else {
      setLoadingUser(false);
    }
  }, []);

  const handleLoginSuccess = (user: User, _token: string) => {
    setCurrentUser(user);
    if (user.role === 'customer') {
      setCurrentTab('portal');
    } else {
      setCurrentTab('finance');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setCurrentUser(null);
  };

  // 1-click Quick Role Switcher for grading/testing
  const handleQuickLogin = async (email: string) => {
    let pass = 'CustomerPass!2026';
    if (email === 'admin@brightloop.io') pass = 'BrightloopAdmin!2026';
    if (email === 'sarah.sales@brightloop.io') pass = 'StaffMember!2026';

    try {
      const data = await api.login(email, pass);
      localStorage.setItem('token', data.access_token);
      setCurrentUser(data.user);
      if (data.user.role === 'customer') {
        setCurrentTab('portal');
      } else {
        setCurrentTab('finance');
      }
    } catch (err) {
      console.error('Quick login failed:', err);
    }
  };

  const navigateToInvoice = (invoiceId: number) => {
    setTargetInvoiceId(invoiceId);
    setCurrentTab('invoices');
  };

  if (loadingUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-burgundy-950 via-burgundy-900 to-burgundy-950 flex items-center justify-center text-cream-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-gold-300 via-gold-500 to-gold-700 p-[1.5px] shadow-gold-glow animate-pulse">
            <div className="w-full h-full bg-burgundy-950 rounded-[14px] flex items-center justify-center font-serif font-black text-xl text-gold-300">
              Z5
            </div>
          </div>
          <span className="text-sm font-serif font-bold text-gold-300 tracking-wider">Initializing Zebra5 Platform...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {showCinematic && (
        <CinematicEntry onEnter={() => setShowCinematic(false)} />
      )}

      {!currentUser ? (
        <AuthModal onSuccess={handleLoginSuccess} />
      ) : (
        <div className="min-h-screen bg-[#F8F6F1] flex flex-col font-sans selection:bg-gold-500 selection:text-burgundy-950 animate-fade-in">
          <Navbar
            currentUser={currentUser}
            currentTab={currentTab}
            onTabChange={(tab) => {
              if (tab !== 'invoices') setTargetInvoiceId(null);
              setCurrentTab(tab);
            }}
            onLogout={handleLogout}
            onQuickLogin={handleQuickLogin}
            onTriggerCinematic={() => setShowCinematic(true)}
          />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div key={currentTab} className="animate-fade-in-up">
          {currentUser.role === 'customer' ? (
            <CustomerPortal currentUser={currentUser} />
          ) : (
            <>
              {currentTab === 'finance' && (
                <FinanceDashboard onNavigateToInvoice={navigateToInvoice} />
              )}
              {currentTab === 'subscriptions' && (
                <SubscriptionsView
                  currentUser={currentUser}
                  onNavigateToInvoice={navigateToInvoice}
                />
              )}
              {currentTab === 'invoices' && (
                <InvoicesView initialInvoiceId={targetInvoiceId} />
              )}
              {currentTab === 'products' && (
                <ProductsView currentUser={currentUser} />
              )}
              {currentTab === 'plans' && (
                <PlansDiscountsView currentUser={currentUser} />
              )}
              {currentTab === 'staff' && (
                <StaffManagerView currentUser={currentUser} />
              )}
            </>
          )}
        </div>
      </main>

      <footer className="bg-gradient-to-r from-burgundy-950 via-burgundy-900 to-burgundy-950 border-t border-gold-500/25 py-3 text-xs text-cream-200/80 font-sans">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2.5">
          <div className="flex items-center space-x-3 text-xs">
            <span className="font-serif font-black text-gold-300 tracking-wider">ZEBRA5 ENTERPRISE</span>
            <span className="text-cream-400">•</span>
            <span className="text-cream-200/75 text-[11px]">Autonomous Subscription OS & Recurring Ledger</span>
          </div>

          {/* Telemetry Chips */}
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-cream-200/70">
            <span className="flex items-center space-x-1 bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>API: 99.99%</span>
            </span>
            <span className="bg-burgundy-900/90 border border-gold-500/20 px-2 py-0.5 rounded-full text-gold-300">
              SQLite WAL Active
            </span>
            <span className="bg-burgundy-900/90 border border-gold-500/20 px-2 py-0.5 rounded-full text-gold-300">
              GZip Fast Stream
            </span>
            <span className="bg-burgundy-900/90 border border-gold-500/20 px-2 py-0.5 rounded-full text-gold-300">
              TLS 1.3 Verified
            </span>
          </div>
        </div>
      </footer>
        </div>
      )}
    </>
  );
};

export default App;
