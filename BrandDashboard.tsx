
import React from 'react';
import { TrendingUp, Users, DollarSign, Target, ArrowUpRight, MoreVertical } from 'lucide-react';
import { MOCK_CAMPAIGNS, MOCK_CREATORS } from '../../constants';

const BrandDashboard: React.FC = () => {
  const metrics = [
    { label: 'Total Leads', value: '1,284', trend: '+12.5%', icon: Target, color: 'indigo' },
    { label: 'Avg. CPL', value: '$84.50', trend: '-2.1%', icon: DollarSign, color: 'emerald' },
    { label: 'Active Creators', value: '42', trend: '+4', icon: Users, color: 'orange' },
    { label: 'Pipeline Value', value: '$108.5K', trend: '+18.2%', icon: TrendingUp, color: 'purple' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Dashboard Overview</h2>
          <p className="text-slate-500">Monitoring performance for Skyline Realty</p>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all">
          Launch New Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl bg-${m.color}-50 text-${m.color}-600`}>
                <m.icon size={24} />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${m.trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                {m.trend}
              </span>
            </div>
            <p className="text-slate-500 font-medium text-sm mb-1">{m.label}</p>
            <h3 className="text-3xl font-bold text-slate-900">{m.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold">Top Performing Creators</h3>
              <button className="text-indigo-600 font-bold text-sm">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-slate-400 text-xs font-bold uppercase tracking-wider border-b border-slate-50">
                    <th className="pb-4 font-bold">Creator</th>
                    <th className="pb-4 font-bold">Leads</th>
                    <th className="pb-4 font-bold">Conversion</th>
                    <th className="pb-4 font-bold">CPL Paid</th>
                    <th className="pb-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {MOCK_CREATORS.map(creator => (
                    <tr key={creator.id} className="group">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <img src={creator.avatar} className="w-10 h-10 rounded-full" alt="" />
                          <div>
                            <p className="font-bold text-slate-900">{creator.name}</p>
                            <p className="text-xs text-slate-500">{creator.handle}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 font-semibold">{creator.leadsGenerated}</td>
                      <td className="py-4 font-semibold">14.2%</td>
                      <td className="py-4 font-semibold">${creator.totalEarnings.toLocaleString()}</td>
                      <td className="py-4 text-right">
                        <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreVertical size={20} className="text-slate-400" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
             <h3 className="text-xl font-bold mb-6">Recent Active Campaigns</h3>
             <div className="space-y-4">
                {MOCK_CAMPAIGNS.slice(0, 2).map(camp => (
                  <div key={camp.id} className="flex items-center justify-between p-4 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <img src={camp.image} className="w-16 h-12 object-cover rounded-xl" alt="" />
                      <div>
                        <h4 className="font-bold">{camp.title}</h4>
                        <p className="text-xs text-slate-500">${camp.cpl} Per Lead • {camp.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">142 Leads</p>
                      <p className="text-xs text-emerald-500 font-bold">Active</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-[32px] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 opacity-20 rounded-full -mr-16 -mt-16" />
            <h3 className="text-xl font-bold mb-2">Campaign Budget</h3>
            <p className="text-slate-400 text-sm mb-6">Total monthly allocation</p>
            <div className="text-4xl font-black mb-8">$25,000.00</div>
            <div className="space-y-4">
               <div className="flex justify-between text-sm">
                 <span className="text-slate-400">Spent</span>
                 <span>$14,240 (57%)</span>
               </div>
               <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                 <div className="w-[57%] h-full bg-indigo-500" />
               </div>
            </div>
            <button className="w-full mt-8 py-3 bg-white text-slate-900 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors">
              Add Funds <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold mb-6">Activity Feed</h3>
            <div className="space-y-6">
              {[
                { text: 'New lead from @TravelWithBen', time: '2 mins ago', type: 'lead' },
                { text: 'Payout processed to Sarah Chen', time: '4 hours ago', type: 'payout' },
                { text: 'SolarMax campaign reached 50% budget', time: '1 day ago', type: 'budget' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">{item.text}</p>
                    <p className="text-xs text-slate-400">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDashboard;
