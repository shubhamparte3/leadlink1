
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_CAMPAIGNS } from '../../constants';
import { Wand2, Copy, Check, Save, ArrowLeft, Globe, Link as LinkIcon, ClipboardCheck } from 'lucide-react';

interface FormBuilderProps {
  user?: any;
}

const FormBuilder: React.FC<FormBuilderProps> = ({ user }) => {
  const { campaignId } = useParams();
  const campaign = MOCK_CAMPAIGNS.find(c => c.id === campaignId) || MOCK_CAMPAIGNS[0];

  const [formText, setFormText] = useState(`Special invitation from your favorite advisor...`);
  const [headline, setHeadline] = useState(`Get Access to ${campaign.brand}'s Exclusive Inventory`);
  const [primaryColor, setPrimaryColor] = useState('#4f46e5');
  const [isCopied, setIsCopied] = useState(false);
  
  // Generate a mock unique tracking ID
  const trackingId = useMemo(() => `tr_${Math.random().toString(36).substr(2, 6)}`, []);
  const creatorHandle = user?.handle || 'creator';
  
  // The official vanity link structure
  const vanityLink = `leadlink.io/l/${creatorHandle}/${campaign.slug}/${trackingId}`;
  const fullLink = `${window.location.origin}/#/l/${creatorHandle}/${campaign.slug}/${trackingId}`;

  const copyLink = () => {
    navigator.clipboard.writeText(fullLink);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="h-full flex flex-col space-y-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/creator/marketplace" className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Link Customizer</h2>
            <p className="text-slate-500 font-medium">Configuring tracking for: {campaign.brand}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all text-sm">
            <Save size={20} /> Save Draft
          </button>
          <button className="flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-[20px] font-black text-xs uppercase tracking-widest hover:bg-indigo-700 shadow-xl shadow-indigo-100 transition-all">
             Deploy Campaign
          </button>
        </div>
      </div>

      {/* Link Display Box */}
      <div className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden group border border-slate-800 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500 opacity-10 blur-[100px] rounded-full -mr-32 -mt-32" />
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="space-y-4 text-center lg:text-left flex-1">
            <div className="inline-flex items-center gap-2 text-indigo-400 font-black uppercase text-[10px] tracking-[0.2em] mb-2 bg-indigo-500/10 px-4 py-1.5 rounded-full">
              <Globe size={14} /> Active Attribution Link
            </div>
            <div className="text-xl md:text-3xl font-black flex flex-wrap items-center gap-x-3 gap-y-2 justify-center lg:justify-start">
              <span className="text-slate-500">leadlink.io/l/</span>
              <span className="text-white underline decoration-indigo-500 decoration-4 underline-offset-8">{creatorHandle}</span>
              <span className="text-slate-500">/</span>
              <span className="text-white underline decoration-indigo-500 decoration-4 underline-offset-8">{campaign.slug}</span>
              <span className="text-slate-500">/</span>
              <span className="text-indigo-400">{trackingId}</span>
            </div>
            <p className="text-sm text-slate-400 font-medium max-w-2xl">Copy and paste this link into your social bios. Our engine tracks every click and form submission back to your account in real-time.</p>
          </div>
          <button 
            onClick={copyLink}
            className={`flex items-center gap-3 px-10 py-5 rounded-[24px] font-black text-xs uppercase tracking-widest transition-all scale-110 active:scale-95 ${
              isCopied ? 'bg-emerald-500 text-white' : 'bg-white text-slate-950 hover:bg-indigo-500 hover:text-white'
            }`}
          >
            {isCopied ? <Check size={20} /> : <Copy size={20} />}
            {isCopied ? 'URL Copied' : 'Copy Smart Link'}
          </button>
        </div>
      </div>

      <div className="flex-1 grid lg:grid-cols-2 gap-12 min-h-0">
        {/* Editor Side */}
        <div className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm space-y-10 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Personalized Headline</label>
              <button className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-700">
                <Wand2 size={12} /> AI Optimize
              </button>
            </div>
            <input 
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 outline-none font-bold text-lg"
            />
          </div>

          <div className="space-y-4">
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Trusted Recommendation Note</label>
            <textarea 
              value={formText}
              onChange={(e) => setFormText(e.target.value)}
              rows={4}
              className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 outline-none resize-none font-medium text-base leading-relaxed"
            />
          </div>

          <div className="space-y-6">
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Brand Color Accent</label>
            <div className="flex flex-wrap gap-4">
              {['#4f46e5', '#0f172a', '#10b981', '#f59e0b', '#ef4444', '#ec4899'].map(c => (
                <button 
                  key={c}
                  onClick={() => setPrimaryColor(c)}
                  className={`w-14 h-14 rounded-2xl border-4 transition-all ${primaryColor === c ? 'border-indigo-200 scale-110 shadow-2xl' : 'border-transparent opacity-50 hover:opacity-100'}`}
                  style={{ backgroundColor: c }}
                />
              ))}
              <div className="relative group">
                <input 
                  type="color" 
                  value={primaryColor} 
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-14 h-14 rounded-2xl bg-transparent p-0 border-none cursor-pointer overflow-hidden shadow-sm"
                />
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardCheck className="text-indigo-600" size={20} />
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Campaign Requirement Sync</h4>
            </div>
            <p className="text-xs text-slate-500 mb-6 font-medium">The following fields are required by <span className="text-slate-900 font-bold">{campaign.brand}</span> and cannot be removed.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {campaign.formFields.map(field => (
                <div key={field} className="flex items-center justify-between p-5 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                  <span className="text-xs font-black uppercase tracking-widest text-indigo-700">{field}</span>
                  <div className="px-2 py-1 bg-indigo-600 text-white rounded-md text-[8px] font-black uppercase tracking-widest">Required</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Preview Side */}
        <div className="flex items-center justify-center bg-slate-50/80 rounded-[48px] border-2 border-dashed border-slate-200 p-12">
          <div className="w-[360px] h-[720px] bg-slate-950 rounded-[64px] p-5 shadow-3xl relative border-[12px] border-slate-900">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-slate-900 rounded-b-3xl z-20" />
             
             <div className="w-full h-full bg-white rounded-[44px] overflow-hidden flex flex-col">
                <div className="bg-slate-50 p-10 flex flex-col items-center text-center">
                  <img src={user?.avatar || "https://i.pravatar.cc/150?u=ben"} className="w-24 h-24 rounded-[32px] border-4 border-white shadow-2xl mb-6 object-cover" alt="" />
                  <p className="text-[10px] font-black uppercase text-indigo-600 tracking-[0.2em] mb-2">Recommended By</p>
                  <p className="text-lg font-black text-slate-950 tracking-tight">{user?.name || "Ben Thompson"}</p>
                </div>

                <div className="p-8 flex-1 overflow-y-auto scrollbar-hide">
                  <div className="mb-10 p-5 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
                    <p className="text-xs text-slate-500 italic text-center leading-relaxed font-medium">
                      "{formText}"
                    </p>
                  </div>

                  <h3 className="text-2xl font-black text-slate-950 text-center mb-10 leading-tight tracking-tight">
                    {headline}
                  </h3>

                  <div className="space-y-5">
                    {campaign.formFields.slice(0, 3).map(field => (
                      <div key={field} className="space-y-1.5">
                        <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">{field}</label>
                        <input disabled placeholder={`Enter ${field}`} className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100 text-[10px] font-bold" />
                      </div>
                    ))}

                    <button 
                      className="w-full py-6 rounded-[24px] text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl mt-6 transition-all scale-100"
                      style={{ backgroundColor: primaryColor }}
                    >
                      CLAIM EXCLUSIVE ACCESS
                    </button>
                  </div>
                </div>
                
                <div className="p-5 text-center border-t border-slate-50 bg-slate-50/80">
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Enterprise Verified • LeadLink CPL</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
