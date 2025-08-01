import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { createClient } from '@/utils/supabase/components'

export default function OAuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return

    const supabase = createClient()

    supabase.auth.getUser().then(({ data, error }) => {
      if (error || !data?.user) {
        router.replace('/auth/login')
      } else {
        router.replace('/')
      }
    })
  }, [router])

  return <div>⏳ Vérification de l'authentification...</div>
}
