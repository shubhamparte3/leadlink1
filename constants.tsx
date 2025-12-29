
import { Campaign, Creator } from './types';

export const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: '1',
    brand: 'Skyline Penthouses',
    title: 'Luxury Real Estate Leads',
    slug: 'skyline-penthouses',
    category: 'Real Estate',
    cpl: 120,
    budget: 25000,
    status: 'active',
    description: 'Connect potential buyers with our premium luxury penthouse developments in downtown Miami.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&h=300',
    formFields: ['Full Name', 'Email', 'Phone', 'Budget Range']
  },
  {
    id: '2',
    brand: 'SolarMax',
    title: 'Residential Solar Consultations',
    slug: 'solar-max-residential',
    category: 'Solar',
    cpl: 45,
    budget: 15000,
    status: 'active',
    description: 'Looking for homeowners interested in reducing their monthly utility bills via solar installation.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=400&h=300',
    formFields: ['Full Name', 'Email', 'Phone', 'Current Monthly Bill']
  },
  {
    id: '3',
    brand: 'Aura Dental',
    title: 'Invisalign & Veneer Patients',
    slug: 'aura-dental-cosmetic',
    category: 'Medical',
    cpl: 85,
    budget: 12000,
    status: 'active',
    description: 'High-intent leads for cosmetic dentistry procedures including full veneers and Invisalign.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&h=300',
    formFields: ['Full Name', 'Email', 'Phone']
  },
  {
    id: '4',
    brand: 'Elysian Resorts',
    title: 'Vacation Membership Inquiries',
    slug: 'elysian-luxury-travel',
    category: 'Travel',
    cpl: 75,
    budget: 20000,
    status: 'active',
    description: 'Leads for high-end luxury vacation club memberships across the Caribbean.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=400&h=300',
    formFields: ['Full Name', 'Email', 'Phone', 'Travel Frequency']
  }
];

export const MOCK_CREATORS: Creator[] = [
  {
    id: 'c1',
    handle: 'travelwithben',
    name: 'Ben Thompson',
    category: 'Lifestyle',
    leadsGenerated: 142,
    totalEarnings: 12450,
    avatar: 'https://i.pravatar.cc/150?u=ben'
  },
  {
    id: 'c2',
    handle: 'techreviewer',
    name: 'Sarah Chen',
    category: 'Technology',
    leadsGenerated: 284,
    totalEarnings: 22800,
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  }
];
