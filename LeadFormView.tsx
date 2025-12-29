
import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_CAMPAIGNS, MOCK_CREATORS } from '../constants';
import { CheckCircle2, ShieldCheck, ArrowRight, Star } from 'lucide-react';

const LeadFormView: React.FC = () => {
  const { creatorHandle, campaignSlug, trackingId, id } = useParams();
  
  // Logic to find the campaign via slug or ID (legacy)
  const campaign = useMemo(() => {
    if (campaignSlug) {
      return MOCK_CAMPAIGNS.find(c => c.slug === campaignSlug) || MOCK_CAMPAIGNS[0];
    }
    return MOCK_CAMPAIGNS.find(c => c.id === id) || MOCK_CAMPAIGNS[0];
  }, [campaignSlug, id]);

  // Logic to find creator info
  const creator = useMemo(() => {
    if (creatorHandle) {
      return MOCK_CREATORS.find(c => c.handle.toLowerCase() === creatorHandle.toLowerCase()) || MOCK_CREATORS[0];
    }
    return MOCK_CREATORS[0];
  }, [creatorHandle]);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send the trackingId, creator.id, and campaign.id to the backend here.
    console.log('Attributing Lead:', { trackingId, creatorId: creator.id, campaignId: campaign.id });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-8">
        <div className="max-w-md w-full text-center space-y-8">
          <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-emerald-100">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-4xl font-black text-slate-950 tracking-tight">Access Granted.</h2>
          <p className="text-slate-500 font-medium leading-relaxed">Your application has been received. A senior specialist from <span className="text-slate-950 font-black">{campaign.brand}</span> will reach out within 24 hours.</p>
          
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-widest">
            Tracking Code: {trackingId || 'DIRECT'}
          </div>

          <div className="pt-10">
            <button className="w-full py-5 bg-slate-950 text-white rounded-[24px] font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all shadow-xl">
              Back to Content <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center md:p-12">
      <div className="max-w-md w-full min-h-screen md:min-h-0 bg-white md:rounded-[48px] shadow-3xl flex flex-col overflow-hidden border border-white">
        {/* Creator Identity Header */}
        <div className="bg-indigo-600 p-10 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl" />
          <div className="relative z-10">
            <img src={creator.avatar} className="w-24 h-24 rounded-[32px] border-4 border-indigo-500 mx-auto mb-6 shadow-2xl object-cover" alt="" />
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 backdrop-blur-md">
              <Star size={12} fill="currentColor" /> Verified Partner
            </div>
            <h3 className="text-2xl font-black tracking-tight">{creator.name}</h3>
            <p className="text-indigo-200 text-xs font-bold tracking-widest uppercase">@{creator.handle}</p>
          </div>
        </div>

        <div className="p-10 space-y-10 flex-1">
          <div className="text-center space-y-6">
             <div className="inline-block p-6 bg-slate-50 rounded-3xl border border-slate-200/50 text-xs text-slate-500 italic font-medium leading-relaxed relative">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-[10px] font-black uppercase text-indigo-600 tracking-widest border border-slate-100 rounded-full">Personal Note</div>
               "I've personally vetted {campaign.brand} for my inner circle. This is a private opportunity for my followers to get exclusive high-ticket access."
             </div>
             <h1 className="text-3xl font-black text-slate-950 leading-[1.1] tracking-tight">
               {campaign.title}
             </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
              <input required type="text" placeholder="Johnathan Doe" className="w-full px-5 py-5 rounded-[20px] bg-slate-50 border border-slate-200/60 focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 outline-none transition-all font-bold" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Personal Email</label>
              <input required type="email" placeholder="john@domain.com" className="w-full px-5 py-5 rounded-[20px] bg-slate-50 border border-slate-200/60 focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 outline-none transition-all font-bold" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone (Mobile)</label>
              <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full px-5 py-5 rounded-[20px] bg-slate-50 border border-slate-200/60 focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 outline-none transition-all font-bold" />
            </div>
            
            <button type="submit" className="w-full py-6 bg-slate-950 text-white rounded-[24px] font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-indigo-600 hover:scale-105 active:scale-95 transition-all">
              Claim VIP Access
            </button>
          </form>

          <div className="flex items-center justify-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest py-4 border-t border-slate-50">
            <ShieldCheck size={16} className="text-emerald-500" /> End-to-End Encryption Enabled
          </div>
        </div>

        <div className="p-6 bg-slate-50 text-center border-t border-slate-100">
           <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em]">Powered by LeadLink Marketplace</p>
        </div>
      </div>
    </div>
  );
};

export default LeadFormView;
