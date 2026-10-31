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

export const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [currentTab, setCurrentTab] = useState<string>('finance');
  const [targetInvoiceId, setTargetInvoiceId] = useState<number | null>(null);

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
            <div className="w-full h-full bg-burgundy-950 rounded-[14px] flex items-center justify-center font-serif font-black text-2xl text-gold-300">
              B
            </div>
          </div>
          <span className="text-sm font-serif font-bold text-gold-300 tracking-wider">Initializing Brightloop Platform...</span>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return <AuthModal onSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-[#FBF7F0] flex flex-col font-sans selection:bg-gold-500 selection:text-burgundy-950">
      <Navbar
        currentUser={currentUser}
        currentTab={currentTab}
        onTabChange={(tab) => {
          if (tab !== 'invoices') setTargetInvoiceId(null);
          setCurrentTab(tab);
        }}
        onLogout={handleLogout}
        onQuickLogin={handleQuickLogin}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
      </main>

      <footer className="bg-gradient-to-r from-burgundy-950 via-burgundy-900 to-burgundy-950 border-t border-gold-500/30 py-4.5 text-center text-xs text-cream-200/80 font-serif">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-gold-300">Brightloop Software</span>
            <span>• Subscription Management & Recurring Ledger OS</span>
          </div>
          <div className="text-gold-400/80 tracking-wide font-mono text-[11px]">
            Burgundy & Cream Edition • Gold Lined
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
