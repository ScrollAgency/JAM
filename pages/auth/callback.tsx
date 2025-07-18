// pages/auth/callback.tsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Callback() {
  const router = useRouter()

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    const code = query.get('code')
    const next = query.get('next') ?? '/'
    if (code) {
      window.location.href = `/api/auth/callback?code=${code}&next=${next}`
    } else {
      router.push('/auth/auth-code-error')
    }
  }, [])

  return <p>Connexion en cours...</p>
}
