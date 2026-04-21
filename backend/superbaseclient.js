import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.local.SUPABASE_URL
const supabaseKey = process.env.local.SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)