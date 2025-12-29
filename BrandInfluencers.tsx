
import React from 'react';
import { MOCK_CREATORS } from '../../constants';
import { Search, Filter, MoreHorizontal, MessageSquare, Star, Trash2 } from 'lucide-react';

const BrandInfluencers: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 leading-tight">Creator CRM</h2>
          <p className="text-slate-500 font-medium">Manage and monitor your active creator partners.</p>
        </div>
        <button className="bg-slate-950 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200">
          Find New Creators
        </button>
      </div>

      <div className="bg-white rounded-[40px] border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex-1 relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Filter by handle, name or niche..." 
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all font-medium"
            />
          </div>
          <div className="flex gap-4">
             <button className="px-6 py-4 bg-white border border-slate-100 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-2">
               <Filter size={18} /> Segment
             </button>
             <button className="px-6 py-4 bg-white border border-slate-100 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
               Export CSV
             </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-50 bg-slate-50/30">
                <th className="px-8 py-6">Partner</th>
                <th className="px-8 py-6">Status</th>
                <th className="px-8 py-6 text-center">Leads Sent</th>
                <th className="px-8 py-6 text-center">Conv. Rate</th>
                <th className="px-8 py-6 text-right">Payout Total</th>
                <th className="px-8 py-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {MOCK_CREATORS.map(creator => (
                <tr key={creator.id} className="group hover:bg-slate-50/50 transition-all">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <img src={creator.avatar} className="w-12 h-12 rounded-2xl object-cover" alt="" />
                      <div>
                        <p className="font-bold text-slate-900">{creator.name}</p>
                        <p className="text-xs text-indigo-600 font-black">{creator.handle}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Active
                    </span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <p className="font-black text-slate-900 text-lg">{creator.leadsGenerated}</p>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <p className="font-bold text-slate-600">14.2%</p>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <p className="font-black text-slate-900">${creator.totalEarnings.toLocaleString()}</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <button className="p-3 bg-white border border-slate-100 rounded-xl hover:text-indigo-600 shadow-sm"><MessageSquare size={18} /></button>
                       <button className="p-3 bg-white border border-slate-100 rounded-xl hover:text-red-500 shadow-sm"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-8 bg-slate-50/50 text-center">
          <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors">Load More Partners</button>
        </div>
      </div>
    </div>
  );
};

export default BrandInfluencers;
