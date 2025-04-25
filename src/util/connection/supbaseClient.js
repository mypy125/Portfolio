import { createClient } from '@supabase/supabase-js';

const supabaseUrl=import.meta.env.VITE_SUPABASE_URL;
const supabaseKey=import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase credentials:', { supabaseUrl, supabaseKey });
  throw new Error('Supabase URL and API key are required!');
}

export const supabase = createClient(supabaseUrl, supabaseKey);