
import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { UserRole } from '../types';
import { User, Building2, ArrowRight } from 'lucide-react';

interface AuthProps {
  type: 'login' | 'signup';
  onLogin: (role: UserRole) => void;
}

const Auth: React.FC<AuthProps> = ({ type, onLogin }) => {
  const [searchParams] = useSearchParams();
  const initialRole = (searchParams.get('role') as UserRole) || 'creator';
  const [role, setRole] = useState<UserRole>(initialRole);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link to="/" className="text-3xl font-black gradient-text mb-4 inline-block">LeadLink</Link>
          <h2 className="text-2xl font-bold text-slate-900">
            {type === 'login' ? 'Welcome Back' : 'Join the Network'}
          </h2>
          <p className="text-slate-500">Scale your {role === 'brand' ? 'business' : 'income'} with premium leads.</p>
        </div>

        <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-slate-200 border border-slate-100">
          {/* Role Toggle */}
          <div className="flex p-1 bg-slate-100 rounded-2xl mb-8">
            <button
              onClick={() => setRole('creator')}
              className={`flex-1 py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all ${
                role === 'creator' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500'
              }`}
            >
              <User size={18} /> Creator
            </button>
            <button
              onClick={() => setRole('brand')}
              className={`flex-1 py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all ${
                role === 'brand' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500'
              }`}
            >
              <Building2 size={18} /> Brand
            </button>
          </div>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(role); }}>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all flex items-center justify-center gap-2"
            >
              {type === 'login' ? 'Sign In' : 'Create Account'}
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-8 text-center text-sm">
            <span className="text-slate-500">
              {type === 'login' ? "Don't have an account?" : "Already have an account?"}
            </span>{' '}
            <Link
              to={type === 'login' ? '/signup' : '/login'}
              className="text-indigo-600 font-bold hover:underline"
            >
              {type === 'login' ? 'Sign up' : 'Log in'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
