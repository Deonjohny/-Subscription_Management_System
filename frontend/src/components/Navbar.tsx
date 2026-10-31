import React from 'react';
import { User } from '../types';
import {
  Layers, FileText, Box, Sliders,
  BarChart3, LogOut, ShieldCheck, UserCircle, Sparkles, Crown
} from 'lucide-react';

interface NavbarProps {
  currentUser: User | null;
  currentTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
  onQuickLogin: (email: string) => void;
  onTriggerCinematic?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentUser,
  currentTab,
  onTabChange,
  onLogout,
  onQuickLogin,
  onTriggerCinematic,
}) => {
  const isAdmin = currentUser?.role === 'admin';
  const isStaff = currentUser?.role === 'staff';
  const isCustomer = currentUser?.role === 'customer';

  return (
    <header className="bg-gradient-to-r from-burgundy-950 via-burgundy-900 to-burgundy-950 border-b border-gold-500/35 text-cream-50 sticky top-0 z-50 shadow-cinematic">
      {/* Top Utility Ribbon: Gold-accented Quick Role Switcher */}
      <div className="bg-burgundy-950/90 px-4 py-1.5 border-b border-gold-500/20 flex flex-wrap justify-between items-center text-xs backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <span className="text-gold-300 font-serif font-semibold tracking-wide flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-gold-400" />
            <span>ROLE SWITCH:</span>
          </span>
          <button
            onClick={() => onQuickLogin('admin@brightloop.io')}
            className={`px-2.5 py-0.5 rounded-full font-medium transition duration-200 border ${
              currentUser?.email === 'admin@brightloop.io'
                ? 'bg-gradient-to-r from-gold-600 to-gold-400 text-burgundy-950 border-gold-300 font-bold shadow-gold-glow'
                : 'bg-burgundy-900/80 text-cream-100 hover:text-gold-200 border-gold-500/30 hover:border-gold-400/60'
            }`}
          >
            👑 Alexander Vance (Admin)
          </button>
          <button
            onClick={() => onQuickLogin('sarah.sales@brightloop.io')}
            className={`px-2.5 py-0.5 rounded-full font-medium transition duration-200 border ${
              currentUser?.email === 'sarah.sales@brightloop.io'
                ? 'bg-gradient-to-r from-gold-600 to-gold-400 text-burgundy-950 border-gold-300 font-bold shadow-gold-glow'
                : 'bg-burgundy-900/80 text-cream-100 hover:text-gold-200 border-gold-500/30 hover:border-gold-400/60'
            }`}
          >
            💼 Sarah Jenkins (Staff)
          </button>
          <button
            onClick={() => onQuickLogin('alice@techflow.com')}
            className={`px-2.5 py-0.5 rounded-full font-medium transition duration-200 border ${
              currentUser?.email === 'alice@techflow.com'
                ? 'bg-gradient-to-r from-gold-600 to-gold-400 text-burgundy-950 border-gold-300 font-bold shadow-gold-glow'
                : 'bg-burgundy-900/80 text-cream-100 hover:text-gold-200 border-gold-500/30 hover:border-gold-400/60'
            }`}
          >
            🏢 Alice (TechFlow Customer)
          </button>
        </div>

        {currentUser && (
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5 text-xs">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
              <span className="text-cream-100 font-medium font-serif">{currentUser.name}</span>
              <span className={`ml-1 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border ${
                isAdmin ? 'bg-gold-500/20 text-gold-300 border-gold-400/50' :
                isStaff ? 'bg-amber-500/20 text-amber-200 border-amber-400/50' :
                'bg-cream-100/10 text-cream-200 border-cream-300/40'
              }`}>
                {currentUser.role}
              </span>
            </div>
            {onTriggerCinematic && (
              <button
                onClick={onTriggerCinematic}
                className="px-2.5 py-0.5 rounded-full bg-burgundy-900/90 hover:bg-gold-500 hover:text-burgundy-950 text-gold-300 border border-gold-500/40 text-[11px] font-serif font-bold tracking-wider flex items-center space-x-1 transition duration-200 shadow-gold-subtle ml-1"
                title="Experience 3D Three.js Cinematic Entry"
              >
                <Sparkles className="w-3 h-3 text-gold-400 group-hover:text-burgundy-950" />
                <span>3D CINEMA</span>
              </button>
            )}
            <button
              onClick={onLogout}
              className="text-cream-300 hover:text-gold-300 flex items-center space-x-1 transition duration-150 ml-2"
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
        <div className="flex justify-between h-16 items-center">
          {/* Logo with Imperial Gold Crest */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onTabChange(isCustomer ? 'portal' : 'finance')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 p-[1.5px] shadow-gold-glow group-hover:scale-105 transition duration-300">
              <div className="w-full h-full bg-burgundy-950 rounded-[10px] flex items-center justify-center font-serif font-black text-gold-300 text-xl tracking-widest">
                B
              </div>
            </div>
            <div>
              <span className="text-xl font-serif font-black tracking-wide gold-gradient-text">
                Brightloop
              </span>
              <span className="text-xs font-semibold text-gold-400/90 ml-1.5 uppercase tracking-widest">
                Subscription OS
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-1 sm:space-x-2">
            {!isCustomer && (
              <>
                <button
                  onClick={() => onTabChange('finance')}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ease-out active:scale-95 border ${
                    currentTab === 'finance'
                      ? 'bg-cream-50 text-burgundy-950 border-gold-400 shadow-gold-subtle -translate-y-0.5'
                      : 'text-cream-200 hover:text-gold-300 hover:bg-burgundy-800/60 border-transparent hover:-translate-y-0.5'
                  }`}
                >
                  <BarChart3 className={`w-4 h-4 transition-colors ${currentTab === 'finance' ? 'text-burgundy-800' : 'text-gold-400'}`} />
                  <span>Finance & Ledger</span>
                </button>

                <button
                  onClick={() => onTabChange('subscriptions')}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ease-out active:scale-95 border ${
                    currentTab === 'subscriptions'
                      ? 'bg-cream-50 text-burgundy-950 border-gold-400 shadow-gold-subtle -translate-y-0.5'
                      : 'text-cream-200 hover:text-gold-300 hover:bg-burgundy-800/60 border-transparent hover:-translate-y-0.5'
                  }`}
                >
                  <Layers className={`w-4 h-4 transition-colors ${currentTab === 'subscriptions' ? 'text-burgundy-800' : 'text-gold-400'}`} />
                  <span>Subscriptions & Quotes</span>
                </button>

                <button
                  onClick={() => onTabChange('invoices')}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ease-out active:scale-95 border ${
                    currentTab === 'invoices'
                      ? 'bg-cream-50 text-burgundy-950 border-gold-400 shadow-gold-subtle -translate-y-0.5'
                      : 'text-cream-200 hover:text-gold-300 hover:bg-burgundy-800/60 border-transparent hover:-translate-y-0.5'
                  }`}
                >
                  <FileText className={`w-4 h-4 transition-colors ${currentTab === 'invoices' ? 'text-burgundy-800' : 'text-gold-400'}`} />
                  <span>Invoices & Payments</span>
                </button>

                <button
                  onClick={() => onTabChange('products')}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ease-out active:scale-95 border ${
                    currentTab === 'products'
                      ? 'bg-cream-50 text-burgundy-950 border-gold-400 shadow-gold-subtle -translate-y-0.5'
                      : 'text-cream-200 hover:text-gold-300 hover:bg-burgundy-800/60 border-transparent hover:-translate-y-0.5'
                  }`}
                >
                  <Box className={`w-4 h-4 ${currentTab === 'products' ? 'text-burgundy-800' : 'text-gold-400'}`} />
                  <span>Products & Variants</span>
                </button>

                <button
                  onClick={() => onTabChange('plans')}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ease-out active:scale-95 border ${
                    currentTab === 'plans'
                      ? 'bg-cream-50 text-burgundy-950 border-gold-400 shadow-gold-subtle -translate-y-0.5'
                      : 'text-cream-200 hover:text-gold-300 hover:bg-burgundy-800/60 border-transparent hover:-translate-y-0.5'
                  }`}
                >
                  <Sliders className={`w-4 h-4 transition-colors ${currentTab === 'plans' ? 'text-burgundy-800' : 'text-gold-400'}`} />
                  <span>Plans & Discounts</span>
                </button>

                {isAdmin && (
                  <button
                    onClick={() => onTabChange('staff')}
                    className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ease-out active:scale-95 border ${
                      currentTab === 'staff'
                        ? 'bg-cream-50 text-burgundy-950 border-gold-400 shadow-gold-subtle -translate-y-0.5'
                        : 'text-cream-200 hover:text-gold-300 hover:bg-burgundy-800/60 border-transparent hover:-translate-y-0.5'
                    }`}
                  >
                    <ShieldCheck className={`w-4 h-4 transition-colors ${currentTab === 'staff' ? 'text-burgundy-800' : 'text-gold-400'}`} />
                    <span>Staff Team</span>
                  </button>
                )}
              </>
            )}

            {isCustomer && (
              <button
                onClick={() => onTabChange('portal')}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ease-out active:scale-95 border ${
                  currentTab === 'portal'
                    ? 'bg-cream-50 text-burgundy-950 border-gold-400 shadow-gold-subtle -translate-y-0.5'
                    : 'text-cream-200 hover:text-gold-300 hover:bg-burgundy-800/60 border-transparent hover:-translate-y-0.5'
                }`}
              >
                <UserCircle className={`w-4 h-4 transition-colors ${currentTab === 'portal' ? 'text-burgundy-800' : 'text-gold-400'}`} />
                <span>Customer Portal</span>
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
