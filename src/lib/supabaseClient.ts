// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://euxzstertgqzmfxghtfe.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1eHpzdGVydGdxem1meGdodGZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzMjk0MDcsImV4cCI6MjA2NTkwNTQwN30.MBZvyn9k-qGRVZI1MAY0VJ3w1opazXioJ9ioDM6gLEQ'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
