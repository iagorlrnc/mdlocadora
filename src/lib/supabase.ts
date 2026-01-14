import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Equipment {
  id: string;
  name: string;
  description: string;
  specifications: string;
  category: string;
  image_url: string;
  is_featured: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface SiteContent {
  id: string;
  section: string;
  key: string;
  value: string;
  type: string;
  updated_at: string;
}

export interface ContactRequest {
  id?: string;
  name: string;
  phone: string;
  email: string;
  equipment_type: string;
  message: string;
  status?: string;
  created_at?: string;
}

export interface BusinessHours {
  id: string;
  day_of_week: string;
  opening_time: string;
  closing_time: string;
  is_closed: boolean;
  display_order: number;
}
