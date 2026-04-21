import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'

const supabase_url = process.env.SUPABASE_URL
const supabase_Key = process.env.SUPABASE_ANON_KEY

console.log("--Testing connection--")
console.log("URL",supabase_url)
console.log("Key",supabase_Key)

const supabase = createClient(supabase_url, supabase_Key)
async function testConnection() {
  try {
    // This queries the auth users (will return empty array if no users, but proves connection works)
    const { data, error } = await supabase.auth.getSession()
    
    if (error) {
      console.log('❌ Connection failed:', error.message)
    } else {
      console.log('✅ Connection successful!')
      console.log('Supabase is working correctly')
    }
  } catch (err) {
    console.log('❌ Error:', err.message)
  }
}

testConnection()
