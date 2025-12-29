
import React from 'react';
import { DollarSign, ArrowUpRight, Clock, CheckCircle2, MoreHorizontal } from 'lucide-react';

const CreatorPayouts: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-slate-950">Earnings & Payouts</h2>
          <p className="text-slate-500 font-medium">Track your income and withdraw your balance.</p>
        </div>
        <button className="bg-slate-950 text-white px-10 py-5 rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-2xl shadow-indigo-100">
          Request Instant Payout
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {[
          { label: 'Total Earnings', val: '$12,450', sub: 'Gross Lifetime', icon: DollarSign, color: 'bg-indigo-600' },
          { label: 'Unpaid Balance', val: '$1,840', sub: 'Ready to Withdraw', icon: Clock, color: 'bg-emerald-500' },
          { label: 'Pending Audit', val: '$420', sub: 'Next 48 Hours', icon: CheckCircle2, color: 'bg-purple-500' },
          { label: 'Average CPL', val: '$142', sub: 'Last 30 Days', icon: ArrowUpRight, color: 'bg-orange-500' },
        ].map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-[40px] border border-slate-200/60 shadow-sm group hover:shadow-xl transition-all">
             <div className={`w-14 h-14 ${s.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform`}>
               <s.icon size={24} />
             </div>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{s.label}</p>
             <h3 className="text-3xl font-black text-slate-950 mb-2">{s.val}</h3>
             <p className="text-xs font-bold text-slate-500">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[40px] border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="p-10 border-b border-slate-50 flex justify-between items-center">
          <h3 className="text-xl font-bold">Transaction History</h3>
          <div className="flex gap-4">
             <button className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600">Filters</button>
             <button className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600">Export</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] bg-slate-50/30">
                <th className="px-10 py-6">Reference</th>
                <th className="px-10 py-6">Brand Partner</th>
                <th className="px-10 py-6">Status</th>
                <th className="px-10 py-6 text-right">Net Amount</th>
                <th className="px-10 py-6"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
               {[
                 { ref: 'TRX-94821', brand: 'Skyline Realty', status: 'Completed', amt: '$1,240.00' },
                 { ref: 'TRX-94820', brand: 'SolarMax', status: 'Completed', amt: '$450.00' },
                 { ref: 'TRX-94819', brand: 'Aura Dental', status: 'Auditing', amt: '$840.00' },
                 { ref: 'TRX-94818', brand: 'Skyline Realty', status: 'Completed', amt: '$940.00' },
               ].map((tx, i) => (
                 <tr key={i} className="hover:bg-slate-50/50 transition-all group">
                   <td className="px-10 py-6">
                      <p className="text-sm font-black text-slate-950 uppercase tracking-widest">{tx.ref}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">Oct 12, 2024</p>
                   </td>
                   <td className="px-10 py-6">
                      <p className="font-bold text-slate-900">{tx.brand}</p>
                   </td>
                   <td className="px-10 py-6">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${tx.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-purple-50 text-purple-600'}`}>
                        {tx.status}
                      </span>
                   </td>
                   <td className="px-10 py-6 text-right font-black text-slate-950">
                      {tx.amt}
                   </td>
                   <td className="px-10 py-6 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-indigo-600"><MoreHorizontal size={18} /></button>
                   </td>
                 </tr>
               ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreatorPayouts;
