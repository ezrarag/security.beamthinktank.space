import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for TypeScript
export interface Volunteer {
  id: string
  name: string
  email: string
  phone: string
  city: string
  state: string
  skills: string[]
  availability: string[]
  created_at: string
}

export interface Donation {
  id: string
  amount: number
  donor_name: string
  donor_email: string
  purpose: string
  anonymous: boolean
  created_at: string
}

export interface TrainingClass {
  id: string
  title: string
  description: string
  instructor: string
  city: string
  state: string
  start_date: string
  end_date: string
  max_participants: number
  current_participants: number
  price: number
  category: string
}

export interface ServiceActivation {
  id: string
  type: string
  description: string
  city: string
  state: string
  status: 'active' | 'pending' | 'completed'
  volunteers_needed: number
  volunteers_committed: number
  start_time: string
  end_time: string
  created_at: string
}
