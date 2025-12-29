
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Megaphone, Users, CreditCard, Settings, LogOut, 
  ShoppingBag, PenTool, ChevronRight 
} from 'lucide-react';

import LandingPage from './views/LandingPage';
import Auth from './views/Auth';
import BrandDashboard from './views/brand/BrandDashboard';
import BrandCampaigns from './views/brand/BrandCampaigns';
import BrandInfluencers from './views/brand/BrandInfluencers';
import BrandBilling from './views/brand/BrandBilling';
import BrandSettings from './views/brand/BrandSettings';

import CreatorMarketplace from './views/creator/CreatorMarketplace';
import CreatorDashboard from './views/creator/CreatorDashboard';
import CreatorPayouts from './views/creator/CreatorPayouts';
import CreatorProfile from './views/creator/CreatorProfile';
import FormBuilder from './views/creator/FormBuilder';
import LeadFormView from './views/LeadFormView';

import { AuthState, UserRole } from './types';

const App: React.FC = () => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedAuth = localStorage.getItem('leadlink_auth');
    if (savedAuth) {
      setAuth(JSON.parse(savedAuth));
    }
  }, []);

  const login = (role: UserRole) => {
    const mockUser = {
      id: role === 'brand' ? 'b1' : 'c1',
      name: role === 'brand' ? 'Skyline Realty' : 'Ben Thompson',
      handle: role === 'creator' ? 'travelwithben' : undefined,
      role,
      avatar: role === 'brand' ? 'https://logo.clearbit.com/skyline.com' : 'https://i.pravatar.cc/150?u=ben',
    };
    const newAuth = { user: mockUser, isAuthenticated: true };
    setAuth(newAuth);
    localStorage.setItem('leadlink_auth', JSON.stringify(newAuth));
    navigate(role === 'brand' ? '/brand/dashboard' : '/creator/dashboard');
  };

  const logout = () => {
    setAuth({ user: null, isAuthenticated: false });
    localStorage.removeItem('leadlink_auth');
    navigate('/');
  };

  return (
    <div className="min-h-screen">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Auth type="login" onLogin={login} />} />
        <Route path="/signup" element={<Auth type="signup" onLogin={login} />} />
        
        {/* NEW Tracking Link Structure */}
        <Route path="/l/:creatorHandle/:campaignSlug/:trackingId" element={<LeadFormView />} />
        {/* Legacy fallback */}
        <Route path="/f/:id" element={<LeadFormView />} />

        {/* Brand Protected Routes */}
        <Route 
          path="/brand/*" 
          element={
            auth.isAuthenticated && auth.user?.role === 'brand' ? (
              <div className="flex h-screen overflow-hidden bg-slate-50">
                <Sidebar role="brand" onLogout={logout} user={auth.user} />
                <main className="flex-1 overflow-y-auto p-8 lg:p-12">
                  <Routes>
                    <Route path="dashboard" element={<BrandDashboard />} />
                    <Route path="campaigns" element={<BrandCampaigns />} />
                    <Route path="influencers" element={<BrandInfluencers />} />
                    <Route path="billing" element={<BrandBilling />} />
                    <Route path="settings" element={<BrandSettings />} />
                    <Route path="*" element={<Navigate to="dashboard" />} />
                  </Routes>
                </main>
              </div>
            ) : <Navigate to="/login" />
          } 
        />

        {/* Creator Protected Routes */}
        <Route 
          path="/creator/*" 
          element={
            auth.isAuthenticated && auth.user?.role === 'creator' ? (
              <div className="flex h-screen overflow-hidden bg-slate-50">
                <Sidebar role="creator" onLogout={logout} user={auth.user} />
                <main className="flex-1 overflow-y-auto p-8 lg:p-12">
                  <Routes>
                    <Route path="dashboard" element={<CreatorDashboard />} />
                    <Route path="marketplace" element={<CreatorMarketplace />} />
                    <Route path="payouts" element={<CreatorPayouts />} />
                    <Route path="profile" element={<CreatorProfile />} />
                    <Route path="builder/:campaignId" element={<FormBuilder user={auth.user} />} />
                    <Route path="*" element={<Navigate to="dashboard" />} />
                  </Routes>
                </main>
              </div>
            ) : <Navigate to="/login" />
          } 
        />
      </Routes>
    </div>
  );
};

const Sidebar: React.FC<{ role: UserRole, onLogout: () => void, user: any }> = ({ role, onLogout, user }) => {
  const brandLinks = [
    { to: '/brand/dashboard', label: 'Overview', icon: LayoutDashboard },
    { to: '/brand/campaigns', label: 'Campaigns', icon: Megaphone },
    { to: '/brand/influencers', label: 'Creators', icon: Users },
    { to: '/brand/billing', label: 'Billing', icon: CreditCard },
    { to: '/brand/settings', label: 'Settings', icon: Settings },
  ];

  const creatorLinks = [
    { to: '/creator/dashboard', label: 'Overview', icon: LayoutDashboard },
    { to: '/creator/marketplace', label: 'Browse Offers', icon: ShoppingBag },
    { to: '/creator/payouts', label: 'My Earnings', icon: CreditCard },
    { to: '/creator/profile', label: 'My Profile', icon: Users },
  ];

  const links = role === 'brand' ? brandLinks : creatorLinks;

  return (
    <aside className="w-72 bg-slate-950 text-white flex flex-col border-r border-slate-800">
      <div className="p-8">
        <div className="text-3xl font-black tracking-tighter text-indigo-400 flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">L</div>
          <span>LeadLink</span>
        </div>
      </div>
      
      <nav className="flex-1 px-6 space-y-2 mt-4">
        <p className="px-4 text-[10px] font-black uppercase text-slate-500 tracking-widest mb-4">Navigation</p>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => 
              `flex items-center group justify-between px-4 py-3.5 rounded-2xl transition-all duration-300 ${
                isActive ? 'bg-indigo-600 shadow-xl shadow-indigo-900/40 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center gap-3">
                  <link.icon size={20} className={isActive ? 'text-white' : 'text-slate-500 group-hover:text-indigo-400'} />
                  <span className="font-semibold text-sm tracking-tight">{link.label}</span>
                </div>
                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-6">
        <div className="p-4 bg-slate-900 rounded-3xl border border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <img src={user.avatar} className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500" alt="Avatar" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full" />
            </div>
            <div className="overflow-hidden">
              <p className="font-bold text-sm truncate">{user.name}</p>
              <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest">{role}</p>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 w-full rounded-xl text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-all font-bold text-xs"
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default App;
