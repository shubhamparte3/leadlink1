
import React, { useState } from 'react';
import { MOCK_CAMPAIGNS } from '../../constants';
import { Search, Filter, ArrowRight, Star, ClipboardList } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreatorMarketplace: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();
  const categories = ['All', 'Real Estate', 'Solar', 'Medical', 'Travel'];

  const filteredCampaigns = filter === 'All' 
    ? MOCK_CAMPAIGNS 
    : MOCK_CAMPAIGNS.filter(c => c.category === filter);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black tracking-tight text-slate-950">Campaign Marketplace</h2>
        <p className="text-slate-500 font-medium">Find premium high-ticket offers for your audience.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search brands or categories..." 
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all font-medium"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest whitespace-nowrap transition-all ${
                filter === cat ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100' : 'bg-white border border-slate-200 text-slate-500 hover:border-indigo-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCampaigns.map(camp => (
          <div key={camp.id} className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
            <div className="relative h-64 overflow-hidden">
              <img src={camp.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
              <div className="absolute top-6 left-6 bg-indigo-600 text-white px-5 py-2.5 rounded-2xl text-sm font-black shadow-2xl tracking-tight">
                ${camp.cpl} CPL
              </div>
              <button className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur rounded-2xl flex items-center justify-center text-slate-900 shadow-xl hover:bg-white transition-all">
                <Star size={20} />
              </button>
            </div>
            <div className="p-10 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  {camp.category}
                </span>
                <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Cap: ${camp.budget/1000}k</span>
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-indigo-600 transition-colors leading-tight">{camp.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">{camp.description}</p>
              
              <div className="space-y-4 pt-8 border-t border-slate-50">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                  <ClipboardList size={14} /> Req. Data Points:
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {camp.formFields.map(field => (
                    <span key={field} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-[10px] font-bold border border-slate-100">
                      {field}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => navigate(`/creator/builder/${camp.id}`)}
                  className="w-full py-5 bg-slate-950 text-white rounded-[24px] font-black text-xs uppercase tracking-widest hover:bg-indigo-600 shadow-2xl shadow-indigo-100 transition-all flex items-center justify-center gap-3"
                >
                  Launch Tracking Form <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorMarketplace;
