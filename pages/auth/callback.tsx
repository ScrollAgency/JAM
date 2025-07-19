// pages/auth/callback.tsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function CallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const code = router.query.code
    const next = router.query.next ?? '/'
    if (typeof code === 'string') {
      const encodedNext = encodeURIComponent(next as string)
      router.replace(`/api/supabase/callback?code=${code}&next=${encodedNext}`)
    }
  }, [router])

  return <p>Connexion en cours...</p>
}
