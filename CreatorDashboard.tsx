
import React from 'react';
import { CreditCard, Target, ExternalLink, TrendingUp, DollarSign, PenTool, CheckCircle, AlertCircle } from 'lucide-react';
import { MOCK_CAMPAIGNS } from '../../constants';

const CreatorDashboard: React.FC = () => {
  const stats = [
    { label: 'Total Earned', value: '$12,450', sub: '+14% this month', icon: DollarSign, color: 'emerald' },
    { label: 'Unpaid Balance', value: '$1,840', sub: 'Next payout in 4 days', icon: CreditCard, color: 'indigo' },
    { label: 'Total Leads', value: '142', sub: '4.2% conversion rate', icon: Target, color: 'orange' },
    { label: 'Active Links', value: '8', sub: '3 active campaigns', icon: ExternalLink, color: 'purple' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-slate-950">Good morning, Ben!</h2>
          <p className="text-slate-500 font-medium">Your audience generated 12 leads today. Let's keep the momentum.</p>
        </div>
        <div className="flex gap-4">
           <div className="bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-slate-600">Global Ranking: #42</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-[40px] border border-slate-200/60 shadow-sm group hover:shadow-xl transition-all">
            <div className={`w-14 h-14 rounded-2xl bg-${s.color}-50 text-${s.color}-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
              <s.icon size={24} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{s.label}</p>
            <h3 className="text-3xl font-black text-slate-950 mb-2">{s.value}</h3>
            <p className="text-xs font-bold text-slate-500">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-bold">Earnings Performance</h3>
              <select className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-xs font-black uppercase tracking-widest outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            
            <div className="flex items-end justify-between h-56 gap-4">
              {[60, 40, 80, 50, 90, 70, 100].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-4">
                  <div 
                    className="w-full bg-slate-50 rounded-[20px] relative group overflow-hidden"
                    style={{ height: `${h}%` }}
                  >
                    <div className="absolute inset-x-0 bottom-0 bg-indigo-600 rounded-[20px] transition-all duration-700 h-0 group-hover:h-full opacity-60" style={{ height: '70%' }} />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-[10px] font-black px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      +${h * 5}
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold">Campaign Checklist</h3>
                <span className="text-xs font-black text-indigo-600 uppercase tracking-widest">3 Tasks Pending</span>
             </div>
             <div className="space-y-4">
                {[
                  { title: 'Update Instagram Bio link for Skyline', icon: AlertCircle, color: 'text-orange-500' },
                  { title: 'Approve SolarMax custom form layout', icon: PenTool, color: 'text-indigo-600' },
                  { title: 'Verify PayPal payout address', icon: CheckCircle, color: 'text-emerald-500', done: true },
                ].map((task, i) => (
                  <div key={i} className={`flex items-center justify-between p-5 rounded-3xl border transition-all ${task.done ? 'bg-slate-50 border-slate-100 opacity-60' : 'bg-white border-slate-100 shadow-sm'}`}>
                    <div className="flex items-center gap-4">
                       <task.icon size={20} className={task.color} />
                       <span className={`text-sm font-bold ${task.done ? 'text-slate-400 line-through' : 'text-slate-900'}`}>{task.title}</span>
                    </div>
                    {!task.done && <button className="text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:underline">Complete</button>}
                  </div>
                ))}
             </div>
          </div>
        </div>

        <div className="space-y-8">
           <div className="bg-slate-950 text-white p-10 rounded-[40px] relative overflow-hidden shadow-2xl">
             <TrendingUp className="absolute bottom-0 right-0 text-white/5 -mb-6 -mr-6" size={140} />
             <h3 className="text-xl font-bold mb-8">Conversion Funnel</h3>
             <div className="space-y-8 relative z-10">
               {[
                 { label: 'Link Clicks', val: '2,482', perc: '100%' },
                 { label: 'Form Starts', val: '640', perc: '25.7%' },
                 { label: 'Leads Verified', val: '142', perc: '5.9%' },
               ].map((item, i) => (
                 <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                       <span className="text-slate-500 text-xs font-black uppercase tracking-widest">{item.label}</span>
                       <span className="text-xl font-black">{item.val}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-indigo-500" style={{ width: item.perc }} />
                    </div>
                 </div>
               ))}
             </div>
           </div>

           <div className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm">
             <h3 className="text-lg font-bold mb-8">Recent Lead Activity</h3>
             <div className="space-y-8">
               {[
                 { brand: 'Skyline Realty', amt: '$120', date: 'Just now' },
                 { brand: 'SolarMax', amt: '$45', date: '1h ago' },
                 { brand: 'Aura Dental', amt: '$85', date: '4h ago' },
               ].map((tx, i) => (
                 <div key={i} className="flex justify-between items-center group cursor-pointer">
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                     <div>
                       <p className="text-sm font-black text-slate-950 group-hover:text-indigo-600 transition-colors">{tx.brand}</p>
                       <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{tx.date}</p>
                     </div>
                   </div>
                   <p className="text-sm font-black text-emerald-600">+{tx.amt}</p>
                 </div>
               ))}
             </div>
             <button className="w-full mt-10 py-4 bg-slate-50 text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-100 transition-all">
               View All History
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;
