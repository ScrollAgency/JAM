// pages/auth/callback.tsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Callback() {
  const router = useRouter()

  useEffect(() => {
    const code = router.query.code as string | undefined
    const next = (router.query.next as string) ?? '/'

    if (code) {
      // Redirection vers l'API pour gérer le cookie et session
      window.location.href = `/api/supabase/callback?code=${encodeURIComponent(code)}&next=${encodeURIComponent(next)}`
    } else {
      // Redirection si code absent
      router.replace('/auth/auth-code-error')
    }
  }, [router.query])

  return <p>Connexion en cours...</p>
}
