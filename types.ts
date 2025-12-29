
export type UserRole = 'brand' | 'creator';

export interface Campaign {
  id: string;
  brand: string;
  title: string;
  slug: string; // URL-friendly identifier
  category: string;
  cpl: number;
  budget: number;
  status: 'active' | 'completed' | 'paused';
  description: string;
  image: string;
  formFields: string[]; // List of required fields for this campaign
}

export interface Creator {
  id: string;
  handle: string;
  name: string;
  category: string;
  leadsGenerated: number;
  totalEarnings: number;
  avatar: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  budget?: string;
  campaignId: string;
  creatorId: string;
  trackingId: string; // New field for attribution
  timestamp: string;
}

export interface AuthState {
  user: {
    id: string;
    name: string;
    role: UserRole;
    avatar: string;
    handle?: string; // Optional handle for creators
  } | null;
  isAuthenticated: boolean;
}
