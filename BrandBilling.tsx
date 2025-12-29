
import React from 'react';
import { CreditCard, Download, ExternalLink, ShieldCheck, Plus } from 'lucide-react';

const BrandBilling: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-slate-950">Billing & Payouts</h2>
          <p className="text-slate-500 font-medium">Manage your payment methods and campaign budget.</p>
        </div>
        <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center gap-2">
          <Plus size={20} /> Add Funds
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white p-10 rounded-[40px] border border-slate-200/60 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-5">
               <CreditCard size={140} />
             </div>
             <h3 className="text-xl font-bold mb-8">Active Payment Method</h3>
             <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-slate-50 rounded-[32px] border border-slate-100">
                <div className="w-20 h-14 bg-slate-950 rounded-xl flex items-center justify-center text-white font-black italic">VISA</div>
                <div className="flex-1 space-y-1 text-center md:text-left">
                  <p className="font-black text-slate-950 tracking-widest uppercase text-sm">•••• •••• •••• 4242</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Expires 12/26 • Secondary Card Attached</p>
                </div>
                <button className="text-xs font-black uppercase tracking-widest text-indigo-600 hover:underline">Edit Method</button>
             </div>
           </div>

           <div className="bg-white rounded-[40px] border border-slate-200/60 shadow-sm overflow-hidden">
             <div className="p-10 border-b border-slate-50">
               <h3 className="text-xl font-bold">Billing History</h3>
             </div>
             <div className="overflow-x-auto">
               <table className="w-full">
                 <thead>
                    <tr className="text-left text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] bg-slate-50/30">
                      <th className="px-10 py-6">Date</th>
                      <th className="px-10 py-6">Description</th>
                      <th className="px-10 py-6">Status</th>
                      <th className="px-10 py-6 text-right">Amount</th>
                      <th className="px-10 py-6"></th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                   {[
                     { date: 'Oct 14, 2024', desc: 'Campaign Budget Top-up', status: 'Succeeded', amt: '$5,000.00' },
                     { date: 'Sep 28, 2024', desc: 'Premium Network Subscription', status: 'Succeeded', amt: '$499.00' },
                     { date: 'Sep 12, 2024', desc: 'Campaign Budget Top-up', status: 'Succeeded', amt: '$10,000.00' },
                   ].map((inv, i) => (
                     <tr key={i} className="hover:bg-slate-50/50 transition-all">
                       <td className="px-10 py-6 font-bold text-slate-900 text-sm">{inv.date}</td>
                       <td className="px-10 py-6 font-medium text-slate-500 text-sm">{inv.desc}</td>
                       <td className="px-10 py-6">
                         <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest">Paid</span>
                       </td>
                       <td className="px-10 py-6 text-right font-black text-slate-950">{inv.amt}</td>
                       <td className="px-10 py-6 text-right">
                         <button className="p-2 text-slate-400 hover:text-indigo-600"><Download size={18} /></button>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>
        </div>

        <div className="space-y-8">
           <div className="bg-slate-950 text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 opacity-20 blur-[60px] rounded-full -mr-10 -mt-10" />
              <h3 className="text-xl font-bold mb-2">Wallet Balance</h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-10">Available for Payouts</p>
              <div className="text-5xl font-black mb-12">$14,840.00</div>
              <div className="space-y-4 pt-10 border-t border-white/5">
                 <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500">
                    <span>Pending Verified</span>
                    <span className="text-white">$1,240.00</span>
                 </div>
                 <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500">
                    <span>Network Fees</span>
                    <span className="text-white">5%</span>
                 </div>
              </div>
           </div>

           <div className="p-10 bg-indigo-50 rounded-[40px] border border-indigo-100 flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-xl">
                 <ShieldCheck size={32} />
              </div>
              <div>
                <h4 className="font-black text-slate-950 uppercase text-xs tracking-widest mb-2">Compliance Status</h4>
                <p className="text-sm text-slate-600 font-medium">Your account is fully verified for high-volume transactions.</p>
              </div>
              <button className="text-xs font-black uppercase tracking-widest text-indigo-600 flex items-center gap-2">View Documents <ExternalLink size={14} /></button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BrandBilling;
