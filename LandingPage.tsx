
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Shield, ArrowRight, BarChart3, Users, DollarSign, Quote, 
  Rocket, ShoppingBag, Target, Trophy, TrendingUp, Globe
} from 'lucide-react';
import { MOCK_CAMPAIGNS } from '../constants';

const LandingPage: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter gradient-text cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            LeadLink
          </div>
          <div className="hidden md:flex items-center gap-10 font-bold text-slate-500 text-sm uppercase tracking-widest">
            <button onClick={() => scrollToSection('how-it-works')} className="hover:text-indigo-600 transition-colors uppercase">How it Works</button>
            <button onClick={() => scrollToSection('marketplace')} className="hover:text-indigo-600 transition-colors uppercase">Marketplace</button>
            <button onClick={() => scrollToSection('results')} className="hover:text-indigo-600 transition-colors uppercase">Results</button>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-slate-600 font-bold hover:text-slate-900 px-4 py-2 text-sm uppercase">Login</Link>
            <Link to="/signup" className="bg-slate-950 text-white px-7 py-3 rounded-2xl font-bold shadow-xl hover:bg-indigo-600 transition-all text-sm uppercase">Join Free</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-white" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-10">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full font-black text-xs uppercase tracking-widest border border-indigo-100">
              <Zap size={14} fill="currentColor" /> Disrupting Affiliate Marketing
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] text-slate-950 tracking-tighter">
              Bigger Brands. <br/> <span className="gradient-text">Higher Payouts.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-xl leading-relaxed font-medium">
              Join the elite CPL marketplace. We connect top-tier creators with high-ticket brands paying $50 to $250 for every verified lead.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/signup?role=creator" className="bg-indigo-600 text-white px-10 py-5 rounded-[24px] font-black text-lg shadow-2xl shadow-indigo-300 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
                Start Earning <ArrowRight size={22} />
              </Link>
              <Link to="/signup?role=brand" className="bg-white border-2 border-slate-200 text-slate-900 px-10 py-5 rounded-[24px] font-black text-lg hover:border-indigo-600 hover:shadow-lg transition-all flex items-center justify-center gap-3">
                List a Campaign
              </Link>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=av${i}`} className="w-12 h-12 rounded-full border-4 border-white object-cover" alt="" />
                ))}
              </div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">
                Join <span className="text-slate-900">2,400+</span> Top Tier Creators
              </p>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-10 bg-indigo-500/10 blur-[100px] rounded-full" />
            <div className="relative glass p-4 rounded-[48px] shadow-2xl border-white border-8">
              <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&w=1200&q=80" alt="Dashboard" className="rounded-[40px] w-full" />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden lg:block">
                 <div className="flex items-center gap-4 mb-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Real-time Lead</span>
                 </div>
                 <p className="text-2xl font-black text-slate-900">+$120.00</p>
                 <p className="text-[10px] font-bold text-slate-400 uppercase">Skyline Realty Campaign</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">The Modern <span className="text-indigo-400">Creator Flywheel.</span></h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">Skip the complicated funnels. We've simplified high-ticket sales into a three-step process designed for conversions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                step: '01', 
                title: 'Curate Offers', 
                desc: 'Browse our marketplace for premium brands that align with your content niche—from Real Estate to Solar.',
                icon: ShoppingBag,
                color: 'bg-indigo-500'
              },
              { 
                step: '02', 
                title: 'Deploy Link', 
                desc: 'Generate a customized lead capture form in seconds. No coding, no hosting, no hassle.',
                icon: Rocket,
                color: 'bg-purple-500'
              },
              { 
                step: '03', 
                title: 'Scale Revenue', 
                desc: 'Every verified lead submission is tracked in real-time. Get paid weekly directly to your account.',
                icon: DollarSign,
                color: 'bg-emerald-500'
              }
            ].map((item, i) => (
              <div key={i} className="group relative p-10 bg-slate-900/50 rounded-[40px] border border-slate-800 hover:border-indigo-500/50 transition-all duration-500">
                <div className={`w-20 h-20 ${item.color} rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-indigo-500/20 group-hover:scale-110 transition-transform`}>
                  <item.icon size={32} />
                </div>
                <div className="absolute top-10 right-10 text-5xl font-black text-slate-800 group-hover:text-indigo-900 transition-colors">
                  {item.step}
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Marketplace Preview */}
      <section id="marketplace" className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full">Explore Offers</span>
              <h2 className="text-5xl font-black tracking-tighter text-slate-900">Top-Tier Campaigns</h2>
            </div>
            <Link to="/signup" className="flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-slate-200 border border-slate-100 hover:bg-indigo-600 hover:text-white transition-all">
              View Marketplace <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_CAMPAIGNS.map(camp => (
              <div key={camp.id} className="bg-white rounded-[40px] shadow-sm border border-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img src={camp.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={camp.title} />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-600 shadow-sm">
                    {camp.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-black text-slate-950">${camp.cpl}</span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Per Lead</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-tight">{camp.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-8">{camp.description}</p>
                  <Link to="/signup" className="w-full py-4 bg-slate-50 text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all text-center block">Apply for Access</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results / Stats */}
      <section id="results" className="py-32 px-6 bg-indigo-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid.png')]" />
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">Real Performance. <br/> <span className="text-indigo-200">Real Scale.</span></h2>
              <p className="text-indigo-100 text-xl font-medium leading-relaxed">We don't just track clicks. we track enterprise-level results. Join a platform built for professional creators.</p>
              <div className="grid grid-cols-2 gap-10">
                {[
                  { val: '$4.8M+', label: 'Creator Revenue', icon: DollarSign },
                  { val: '240k+', label: 'Verified Leads', icon: Target },
                  { val: '92%', label: 'Offer Approval', icon: Trophy },
                  { val: '2.4s', label: 'Form Loading', icon: TrendingUp },
                ].map((stat, i) => (
                  <div key={i} className="space-y-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <stat.icon size={20} />
                    </div>
                    <div>
                      <div className="text-4xl font-black">{stat.val}</div>
                      <div className="text-indigo-200 font-bold uppercase tracking-widest text-[10px]">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 blur-[120px] rounded-full" />
              <div className="relative bg-slate-900 rounded-[48px] p-10 border border-white/10 shadow-3xl">
                <div className="flex justify-between items-center mb-10">
                   <h4 className="font-bold text-lg flex items-center gap-2">
                     <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                     Network Performance
                   </h4>
                   <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">Global Live</div>
                </div>
                <div className="space-y-8">
                  {[
                    { user: 'LifeWithLeo', niche: 'Finance', amount: 240, time: '2m' },
                    { user: 'TechTrend', niche: 'B2B', amount: 120, time: '5m' },
                    { user: 'AuraStyle', niche: 'Medical', amount: 85, time: '12m' },
                  ].map((earner, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4">
                       <div className="flex items-center gap-4">
                          <img src={`https://i.pravatar.cc/100?u=earner${i}`} className="w-12 h-12 rounded-2xl object-cover" alt="" />
                          <div>
                            <p className="font-bold">@{earner.user}</p>
                            <p className="text-[10px] text-slate-500 uppercase font-black">{earner.niche} Campaign</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className="text-emerald-400 font-black">+${earner.amount}.00</p>
                          <p className="text-[9px] text-slate-600 uppercase font-bold tracking-widest">{earner.time} ago</p>
                       </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-indigo-600/20 rounded-3xl border border-indigo-500/20">
                   <div className="flex justify-between items-center mb-3">
                     <span className="text-xs font-black uppercase text-indigo-300">Daily Payout Velocity</span>
                     <span className="text-xs font-black text-white">82%</span>
                   </div>
                   <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                     <div className="w-[82%] h-full bg-indigo-500" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-40 px-6 text-center bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-12">
           <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-950">Ready to <span className="gradient-text">Unlock</span> High-Ticket?</h2>
           <p className="text-xl text-slate-500 font-medium">Join 2,400+ creators and brands making the future of marketing a reality.</p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Link to="/signup" className="bg-slate-950 text-white px-12 py-6 rounded-[32px] font-black text-xl shadow-2xl hover:bg-indigo-600 hover:scale-105 transition-all">Create Account</Link>
             <Link to="/login" className="bg-white border-2 border-slate-200 text-slate-900 px-12 py-6 rounded-[32px] font-black text-xl hover:border-indigo-600 transition-all">Brand Login</Link>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          <div className="space-y-6">
            <div className="text-3xl font-black tracking-tighter gradient-text">LeadLink</div>
            <p className="text-slate-500 text-sm leading-relaxed">The premier B2B marketplace for high-ticket creator commerce. Built for performance, designed for scale.</p>
          </div>
          <div>
            <h5 className="font-black uppercase text-[10px] tracking-widest text-slate-400 mb-6">Marketplace</h5>
            <ul className="space-y-4 text-sm font-bold text-slate-600">
              <li><button className="hover:text-indigo-600">Real Estate</button></li>
              <li><button className="hover:text-indigo-600">Solar Energy</button></li>
              <li><button className="hover:text-indigo-600">Medical/Health</button></li>
              <li><button className="hover:text-indigo-600">Travel/Luxury</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black uppercase text-[10px] tracking-widest text-slate-400 mb-6">Platform</h5>
            <ul className="space-y-4 text-sm font-bold text-slate-600">
              <li><button className="hover:text-indigo-600" onClick={() => scrollToSection('how-it-works')}>How it Works</button></li>
              <li><button className="hover:text-indigo-600">For Creators</button></li>
              <li><button className="hover:text-indigo-600">For Brands</button></li>
              <li><button className="hover:text-indigo-600" onClick={() => scrollToSection('results')}>Case Studies</button></li>
            </ul>
          </div>
          <div>
             <h5 className="font-black uppercase text-[10px] tracking-widest text-slate-400 mb-6">Company</h5>
             <ul className="space-y-4 text-sm font-bold text-slate-600">
                <li><button className="hover:text-indigo-600">Privacy Policy</button></li>
                <li><button className="hover:text-indigo-600">Terms of Use</button></li>
                <li><button className="hover:text-indigo-600">API Documentation</button></li>
                <li><button className="hover:text-indigo-600">Contact Sales</button></li>
             </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-16 mt-16 border-t border-slate-200 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
           © 2024 LeadLink Marketplace. Built with Passion for the Creator Economy.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
