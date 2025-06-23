'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export const useProfile = () => {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single()
        if (!error) setProfile(data)
      }
    })
  }, [])

  return profile
}
