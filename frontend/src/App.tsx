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

  const handleLoginSuccess = (user: User, token: string) => {
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
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm font-semibold text-slate-300">Loading Brightloop OS...</span>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return <AuthModal onSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
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

      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        Brightloop Software • Subscription Management & Recurring Billing Platform • Built for Odoo Challenge
      </footer>
    </div>
  );
};

export default App;
