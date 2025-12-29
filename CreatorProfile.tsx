
import React from 'react';
import { Camera, Instagram, Twitter, Globe, Github, Save, Shield } from 'lucide-react';

const CreatorProfile: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="flex justify-between items-end border-b border-slate-200 pb-12">
        <div className="flex items-center gap-8">
           <div className="relative">
              <img src="https://i.pravatar.cc/150?u=ben" className="w-32 h-32 rounded-[40px] object-cover border-4 border-white shadow-2xl" alt="" />
              <button className="absolute -bottom-2 -right-2 p-3 bg-indigo-600 text-white rounded-2xl shadow-xl hover:bg-indigo-700 transition-all">
                <Camera size={20} />
              </button>
           </div>
           <div className="space-y-2">
              <h2 className="text-4xl font-black tracking-tight text-slate-950">Ben Thompson</h2>
              <p className="text-indigo-600 font-black uppercase tracking-widest text-sm">@TravelWithBen</p>
              <div className="flex items-center gap-4 text-slate-500 pt-2">
                <Instagram size={18} className="hover:text-pink-500 cursor-pointer" />
                <Twitter size={18} className="hover:text-sky-500 cursor-pointer" />
                <Globe size={18} className="hover:text-indigo-500 cursor-pointer" />
              </div>
           </div>
        </div>
        <button className="bg-slate-950 text-white px-10 py-4 rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-600 transition-all flex items-center gap-3">
          <Save size={18} /> Save Profile
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-10">
           <div className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm space-y-8">
              <h3 className="text-xl font-bold">General Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Public Name</label>
                   <input defaultValue="Ben Thompson" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all font-bold" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Contact Email</label>
                   <input defaultValue="ben@thompson.io" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all font-bold" />
                </div>
                <div className="md:col-span-2 space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Creator Bio</label>
                   <textarea rows={4} className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all font-medium resize-none">I focus on luxury travel and finance content, helping brands connect with high-net-worth audiences through authentic storytelling and transparent reviews.</textarea>
                </div>
              </div>
           </div>

           <div className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm space-y-8">
              <h3 className="text-xl font-bold">Niche & Specialties</h3>
              <div className="flex flex-wrap gap-4">
                 {['Luxury Real Estate', 'Sustainable Travel', 'Personal Finance', 'B2B Software'].map(tag => (
                   <div key={tag} className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-2xl font-black text-[10px] uppercase tracking-widest border border-indigo-100">
                     {tag}
                   </div>
                 ))}
                 <button className="px-5 py-2.5 bg-slate-50 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-widest border border-slate-100 hover:bg-slate-100 transition-colors">+ Add Niche</button>
              </div>
           </div>
        </div>

        <div className="space-y-8">
           <div className="p-8 bg-slate-950 text-white rounded-[40px] space-y-6">
              <h3 className="text-lg font-bold">Verification Badge</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Your profile is currently "Gold Tier" verified. This allows you to apply for high-ticket campaigns up to $500 CPL.</p>
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                 <Shield className="text-indigo-400" size={24} />
                 <div>
                   <p className="text-xs font-black uppercase tracking-widest">KYC Status</p>
                   <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">Verified 2024</p>
                 </div>
              </div>
           </div>

           <div className="p-8 bg-white border border-slate-200 rounded-[40px] space-y-6">
              <h3 className="text-lg font-bold">Profile Visibility</h3>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                 <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Public Search</span>
                 <div className="w-12 h-6 bg-emerald-500 rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                 </div>
              </div>
              <p className="text-[10px] text-slate-400 font-medium leading-relaxed">Allow brands to discover your profile in the Creator Directory automatically.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
