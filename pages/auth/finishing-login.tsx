// pages/auth/finishing-login.tsx
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function FinishingLogin() {
  const router = useRouter()
  const next = typeof router.query.next === 'string' ? router.query.next : '/'

  useEffect(() => {
    // Redirige après un court délai pour laisser les cookies se fixer
    const timeout = setTimeout(() => {
      router.replace(next)
    }, 500) // 500ms suffit souvent, tu peux ajuster si besoin

    return () => clearTimeout(timeout)
  }, [next, router])

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Connexion en cours...</h1>
      <p>Veuillez patienter, vous allez être redirigé.</p>
    </div>
  )
}
