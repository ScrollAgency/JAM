import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { createClient } from '@/utils/supabase/components'

export default function OAuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return

    const supabase = createClient()

    supabase.auth.getSession().then(async ({ data, error }) => {
      if (error || !data?.session) {
        router.replace('/auth/login')
        return
      }

      // 🔄 Sync session côté serveur (cookies HTTP-only)
      try {
        await fetch('/api/auth/set-server-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data.session),
        })
      } catch (err) {
        console.error('Erreur lors de la synchronisation de la session :', err)
      }

      router.replace('/')
    })
  }, [router])

  return <div>⏳ Vérification de l'authentification...</div>
}
