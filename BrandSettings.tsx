
import React from 'react';
import { 
  Building2, Users, Bell, Lock, Globe, Key, 
  Mail, Save, ShieldCheck, ChevronRight
} from 'lucide-react';

const BrandSettings: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div>
        <h2 className="text-3xl font-black tracking-tight text-slate-950">Organization Settings</h2>
        <p className="text-slate-500 font-medium">Manage your brand profile, team members, and security.</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <aside className="space-y-2">
          {[
            { label: 'General Info', icon: Building2, active: true },
            { label: 'Team Members', icon: Users },
            { label: 'Notifications', icon: Bell },
            { label: 'Security', icon: Lock },
            { label: 'Integrations', icon: Globe },
            { label: 'API Keys', icon: Key },
          ].map((item, i) => (
            <button 
              key={i} 
              className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-bold text-sm transition-all ${
                item.active ? 'bg-white shadow-sm text-indigo-600 border border-slate-200' : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={18} />
                {item.label}
              </div>
              {item.active && <ChevronRight size={14} />}
            </button>
          ))}
        </aside>

        <div className="lg:col-span-3 space-y-8">
          {/* Organization Profile */}
          <section className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Organization Profile</h3>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all">
                <Save size={16} /> Save Changes
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Legal Company Name</label>
                  <input defaultValue="Skyline Real Estate Group LLC" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all font-bold" />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Public Brand Name</label>
                  <input defaultValue="Skyline Realty" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all font-bold" />
               </div>
               <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Company Description</label>
                  <textarea rows={3} className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all font-medium resize-none">The leading provider of luxury real estate opportunities across the East Coast.</textarea>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Industry Category</label>
                  <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none font-bold">
                    <option>Real Estate</option>
                    <option>Solar Energy</option>
                    <option>Medical</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Contact Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input defaultValue="partnerships@skyline.re" className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all font-bold" />
                  </div>
               </div>
            </div>
          </section>

          {/* Team Permissions */}
          <section className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm space-y-8">
            <h3 className="text-xl font-bold">Active Team</h3>
            <div className="divide-y divide-slate-50">
              {[
                { name: 'Sarah Miller', role: 'Owner', email: 'sarah@skyline.re' },
                { name: 'James Chen', role: 'Campaign Manager', email: 'james@skyline.re' },
              ].map((member, i) => (
                <div key={i} className="flex items-center justify-between py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{member.name}</p>
                      <p className="text-xs text-slate-500 font-medium">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-3 py-1 bg-slate-50 rounded-full">{member.role}</span>
                     <button className="text-xs font-bold text-indigo-600">Edit</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-4 border-2 border-dashed border-slate-100 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-400 hover:bg-slate-50 hover:text-indigo-600 transition-all">
              + Invite Team Member
            </button>
          </section>

          {/* Verification */}
          <section className="p-8 bg-indigo-600 text-white rounded-[40px] shadow-2xl relative overflow-hidden">
            <ShieldCheck className="absolute bottom-0 right-0 text-white/10 -mb-6 -mr-6" size={140} />
            <div className="relative z-10 space-y-4">
              <h3 className="text-xl font-bold">Trust & Safety</h3>
              <p className="text-indigo-100 text-sm max-w-lg">Your brand is currently verified for $50,000 monthly lead volume. To increase your limit, please complete the additional KYC documentation.</p>
              <button className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-indigo-50 transition-all">
                Request Volume Increase
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BrandSettings;
