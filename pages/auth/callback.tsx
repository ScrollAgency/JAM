// pages/auth/callback.tsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '@/lib/supabase'

export default function CallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const run = async () => {
      const url = new URL(window.location.href)
      const googleAccessToken = url.searchParams.get('access_token') // ou provider_token selon ton flow

      if (!googleAccessToken) {
        console.error('❌ Token Google manquant')
        router.replace('/auth/auth-code-error')
        return
      }

      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: 'google',
        token: googleAccessToken,
      })

      if (error || !data.session) {
        console.error('❌ Erreur Supabase:', error)
        router.replace('/auth/auth-code-error')
        return
      }

      // Pose correctement la session (optionnel si déjà fait par supabase.auth.signInWithIdToken)
      await supabase.auth.setSession({
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
      })

      // Redirige vers la home ou next param
      const next = url.searchParams.get('next') || '/'
      router.replace(next)
    }

    run()
  }, [router])

  return <p>Connexion en cours...</p>
}
