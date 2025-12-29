
import React, { useState } from 'react';
import { MOCK_CAMPAIGNS } from '../../constants';
import { Campaign } from '../../types';
import { Plus, Search, Filter, MoreHorizontal, X, Save, Settings2, CheckCircle2, Layout, DollarSign, Image as ImageIcon } from 'lucide-react';

const BrandCampaigns: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(MOCK_CAMPAIGNS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState<Partial<Campaign> | null>(null);

  const availableFields = ['Full Name', 'Email', 'Phone', 'Budget Range', 'Timeline', 'Current Provider', 'Notes', 'Role/Industry'];

  const handleOpenModal = (campaign?: Campaign) => {
    if (campaign) {
      setEditingCampaign({ ...campaign });
    } else {
      setEditingCampaign({
        brand: 'Skyline Realty',
        status: 'active',
        formFields: ['Full Name', 'Email', 'Phone'],
        category: 'Real Estate'
      });
    }
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCampaign) return;

    if (editingCampaign.id) {
      // Update
      setCampaigns(prev => prev.map(c => c.id === editingCampaign.id ? (editingCampaign as Campaign) : c));
    } else {
      // Create
      const newCampaign: Campaign = {
        ...editingCampaign,
        id: Math.random().toString(36).substr(2, 9),
        slug: editingCampaign.title?.toLowerCase().replace(/\s+/g, '-') || 'new-campaign',
      } as Campaign;
      setCampaigns([newCampaign, ...campaigns]);
    }
    setIsModalOpen(false);
    setEditingCampaign(null);
  };

  const toggleField = (field: string) => {
    if (!editingCampaign) return;
    const currentFields = editingCampaign.formFields || [];
    if (currentFields.includes(field)) {
      setEditingCampaign({ ...editingCampaign, formFields: currentFields.filter(f => f !== field) });
    } else {
      setEditingCampaign({ ...editingCampaign, formFields: [...currentFields, field] });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-slate-950">Campaigns</h2>
          <p className="text-slate-500 font-medium">Manage your active and drafted lead generation projects.</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center gap-2"
        >
          <Plus size={20} /> Create Campaign
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search campaigns..." 
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all font-medium"
          />
        </div>
        <button className="px-6 py-4 bg-white border border-slate-200 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 transition-all">
          <Filter size={20} /> Filters
        </button>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {campaigns.map(camp => (
          <div key={camp.id} className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <img src={camp.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
                {camp.status}
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black text-indigo-600 uppercase bg-indigo-50 px-3 py-1.5 rounded-full tracking-widest">
                  {camp.category}
                </span>
                <div className="relative">
                  <button className="text-slate-400 hover:text-slate-900 transition-colors p-1"><MoreHorizontal size={20} /></button>
                </div>
              </div>
              <h3 className="text-2xl font-black mb-3 group-hover:text-indigo-600 transition-colors leading-tight">{camp.title}</h3>
              <p className="text-sm text-slate-500 mb-8 line-clamp-2 leading-relaxed">{camp.description}</p>
              
              <div className="mt-auto space-y-6">
                <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">CPL Offer</p>
                    <p className="text-2xl font-black text-slate-900">${camp.cpl}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Total Leads</p>
                    <p className="text-2xl font-black text-slate-900">1.2k</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleOpenModal(camp)}
                  className="w-full py-4 bg-slate-50 text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Settings2 size={16} /> Edit Campaign Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create/Edit Modal */}
      {isModalOpen && editingCampaign && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[48px] shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="p-10 border-b border-slate-50 sticky top-0 bg-white z-10 flex justify-between items-center">
              <div>
                <h3 className="text-3xl font-black text-slate-950 tracking-tight">
                  {editingCampaign.id ? 'Edit Campaign' : 'Create Campaign'}
                </h3>
                <p className="text-slate-500 font-medium">Define your offer and lead requirements.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-3 bg-slate-50 rounded-2xl text-slate-400 hover:text-red-500 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSave} className="p-10 space-y-12">
              {/* Campaign Basics */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 text-indigo-600">
                  <Layout size={20} />
                  <h4 className="text-sm font-black uppercase tracking-[0.2em]">General Information</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Campaign Title</label>
                    <input 
                      required
                      value={editingCampaign.title || ''}
                      onChange={e => setEditingCampaign({ ...editingCampaign, title: e.target.value })}
                      placeholder="e.g. Luxury Penthouse Inquiries"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Category</label>
                    <select 
                      value={editingCampaign.category}
                      onChange={e => setEditingCampaign({ ...editingCampaign, category: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none font-bold"
                    >
                      <option>Real Estate</option>
                      <option>Solar</option>
                      <option>Medical</option>
                      <option>Travel</option>
                      <option>Finance</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Campaign Description</label>
                    <textarea 
                      required
                      value={editingCampaign.description || ''}
                      onChange={e => setEditingCampaign({ ...editingCampaign, description: e.target.value })}
                      rows={3}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all font-medium resize-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">CPL Offer (USD)</label>
                    <div className="relative">
                      <DollarSign size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        required
                        type="number"
                        value={editingCampaign.cpl || ''}
                        onChange={e => setEditingCampaign({ ...editingCampaign, cpl: parseFloat(e.target.value) })}
                        className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all font-bold"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Budget (USD)</label>
                    <div className="relative">
                      <DollarSign size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        required
                        type="number"
                        value={editingCampaign.budget || ''}
                        onChange={e => setEditingCampaign({ ...editingCampaign, budget: parseFloat(e.target.value) })}
                        className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all font-bold"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Campaign Image URL</label>
                    <div className="relative">
                      <ImageIcon size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        value={editingCampaign.image || ''}
                        onChange={e => setEditingCampaign({ ...editingCampaign, image: e.target.value })}
                        className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 transition-all font-bold"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Requirements Builder */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 text-indigo-600">
                  <CheckCircle2 size={20} />
                  <h4 className="text-sm font-black uppercase tracking-[0.2em]">Lead Form Requirements</h4>
                </div>
                <p className="text-sm text-slate-500 font-medium bg-indigo-50 p-4 rounded-2xl border border-indigo-100/50">
                  Select the data points you need to collect for a lead to be considered valid and payable.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {availableFields.map(field => {
                    const isSelected = editingCampaign.formFields?.includes(field);
                    return (
                      <button
                        key={field}
                        type="button"
                        onClick={() => toggleField(field)}
                        className={`p-5 rounded-3xl border-2 transition-all flex flex-col items-center text-center gap-3 ${
                          isSelected 
                            ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-100 scale-105' 
                            : 'bg-white border-slate-100 text-slate-500 hover:border-indigo-200'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isSelected ? 'bg-white/20' : 'bg-slate-50'}`}>
                          {isSelected ? <CheckCircle2 size={20} /> : <div className="w-2 h-2 bg-slate-300 rounded-full" />}
                        </div>
                        <span className="text-xs font-black uppercase tracking-widest">{field}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-10 border-t border-slate-50 flex gap-6">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-5 bg-slate-50 text-slate-900 rounded-[24px] font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-[2] py-5 bg-indigo-600 text-white rounded-[24px] font-black text-xs uppercase tracking-widest hover:bg-indigo-700 shadow-2xl shadow-indigo-100 transition-all flex items-center justify-center gap-3"
                >
                  <Save size={20} /> {editingCampaign.id ? 'Save Changes' : 'Launch Campaign'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandCampaigns;
