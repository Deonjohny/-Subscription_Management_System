import React from 'react';
import { User } from '../types';
import {
  Layers, FileText, CreditCard, Box, Sliders, Users,
  BarChart3, LogOut, UserCheck, ShieldCheck, UserCircle
} from 'lucide-react';

interface NavbarProps {
  currentUser: User | null;
  currentTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
  onQuickLogin: (email: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentUser,
  currentTab,
  onTabChange,
  onLogout,
  onQuickLogin,
}) => {
  const isAdmin = currentUser?.role === 'admin';
  const isStaff = currentUser?.role === 'staff';
  const isCustomer = currentUser?.role === 'customer';

  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50 shadow-md">
      {/* Top utility row: Demo Switcher & User Status */}
      <div className="bg-slate-950 px-4 py-1.5 border-b border-slate-800/80 flex flex-wrap justify-between items-center text-xs">
        <div className="flex items-center space-x-2">
          <span className="text-slate-400 font-medium">⚡ Demo Quick Role Switcher:</span>
          <button
            onClick={() => onQuickLogin('admin@brightloop.io')}
            className={`px-2 py-0.5 rounded font-medium transition ${
              currentUser?.email === 'admin@brightloop.io'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            👑 Alexander Vance (Admin)
          </button>
          <button
            onClick={() => onQuickLogin('sarah.sales@brightloop.io')}
            className={`px-2 py-0.5 rounded font-medium transition ${
              currentUser?.email === 'sarah.sales@brightloop.io'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            💼 Sarah Jenkins (Staff)
          </button>
          <button
            onClick={() => onQuickLogin('alice@techflow.com')}
            className={`px-2 py-0.5 rounded font-medium transition ${
              currentUser?.email === 'alice@techflow.com'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            🏢 Alice (TechFlow Customer)
          </button>
        </div>

        {currentUser && (
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1.5">
              <span className={`w-2 h-2 rounded-full ${isAdmin ? 'bg-purple-400' : isStaff ? 'bg-blue-400' : 'bg-emerald-400'}`}></span>
              <span className="text-slate-300 font-semibold">{currentUser.name}</span>
              <span className="text-slate-500">({currentUser.email})</span>
              <span className={`ml-1 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${
                isAdmin ? 'bg-purple-900/80 text-purple-200 border border-purple-500/30' :
                isStaff ? 'bg-blue-900/80 text-blue-200 border border-blue-500/30' :
                'bg-emerald-900/80 text-emerald-200 border border-emerald-500/30'
              }`}>
                {currentUser.role}
              </span>
            </span>
            <button
              onClick={onLogout}
              className="text-slate-400 hover:text-rose-400 flex items-center space-x-1 transition ml-2"
              title="Sign Out"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign out</span>
            </button>
          </div>
        )}
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onTabChange(isCustomer ? 'portal' : 'finance')}>
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#714B67] to-[#017E84] flex items-center justify-center shadow-lg font-black text-white text-lg tracking-wider">
              B
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white">Brightloop</span>
              <span className="text-sm font-semibold text-teal-400 ml-1">Subscription OS</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-1 sm:space-x-2">
            {!isCustomer && (
              <>
                <button
                  onClick={() => onTabChange('finance')}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition ${
                    currentTab === 'finance'
                      ? 'bg-purple-950/70 text-purple-300 border border-purple-500/40 shadow'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>Finance & Month-End</span>
                </button>

                <button
                  onClick={() => onTabChange('subscriptions')}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition ${
                    currentTab === 'subscriptions'
                      ? 'bg-purple-950/70 text-purple-300 border border-purple-500/40 shadow'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>Subscriptions & Quotes</span>
                </button>

                <button
                  onClick={() => onTabChange('invoices')}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition ${
                    currentTab === 'invoices'
                      ? 'bg-purple-950/70 text-purple-300 border border-purple-500/40 shadow'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>Invoices & Payments</span>
                </button>

                <button
                  onClick={() => onTabChange('products')}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition ${
                    currentTab === 'products'
                      ? 'bg-purple-950/70 text-purple-300 border border-purple-500/40 shadow'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Box className="w-4 h-4" />
                  <span>Products & Variants</span>
                </button>

                <button
                  onClick={() => onTabChange('plans')}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition ${
                    currentTab === 'plans'
                      ? 'bg-purple-950/70 text-purple-300 border border-purple-500/40 shadow'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Sliders className="w-4 h-4" />
                  <span>Plans & Discounts</span>
                </button>

                {isAdmin && (
                  <button
                    onClick={() => onTabChange('staff')}
                    className={`flex items-center space-x-1.5 px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition ${
                      currentTab === 'staff'
                        ? 'bg-purple-950/70 text-purple-300 border border-purple-500/40 shadow'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4 text-purple-400" />
                    <span>Staff Team</span>
                  </button>
                )}
              </>
            )}

            {isCustomer && (
              <>
                <button
                  onClick={() => onTabChange('portal')}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition ${
                    currentTab === 'portal'
                      ? 'bg-emerald-950/70 text-emerald-300 border border-emerald-500/40 shadow'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <UserCircle className="w-4 h-4" />
                  <span>Customer Portal</span>
                </button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
