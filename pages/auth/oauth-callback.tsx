import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { createClient } from '@/utils/supabase/components'

export default function OAuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return

    const supabase = createClient()

    const syncSessionAndRedirect = async () => {
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession()

      if (sessionError || !sessionData?.session) {
        router.replace('/auth/login')
        return
      }

      // 🔄 Synchroniser la session côté serveur
      try {
        const response = await fetch('/api/supabase/set-server-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sessionData.session),
        })

        if (!response.ok) {
          console.error('Échec de la synchro serveur :', await response.text())
        }
      } catch (err) {
        console.error('Erreur lors de la synchro :', err)
      }

      // ✅ Vérifie maintenant que le user existe bien
      const { data: userData, error: userError } = await supabase.auth.getUser()
      if (userError || !userData?.user) {
        router.replace('/auth/login')
      } else {
        router.replace('/')
      }
    }

    syncSessionAndRedirect()
  }, [router])

  return <div>⏳ Vérification de l'authentification...</div>
}
