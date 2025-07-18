// pages/auth/callback.tsx
import { GetServerSideProps } from 'next'
import { createSupabaseServerClient } from '@/lib/supabaseCookies'
import { NextApiResponse } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  try {
    const supabase = createSupabaseServerClient(req.headers.cookie, res as NextApiResponse)

    const code = query.code as string
    let next = (query.next as string) ?? '/'
    if (!next.startsWith('/')) next = '/'

    const protocol =
      req.headers['x-forwarded-proto']?.toString() || (process.env.NODE_ENV === 'development' ? 'http' : 'https')
    const host = req.headers.host || 'localhost:3000'
    const origin = `${protocol}://${host}`

    if (code) {
      const { error } = await supabase.auth.exchangeCodeForSession(code)

      if (!error) {
        const forwardedHost = req.headers['x-forwarded-host']
        const isLocalEnv = process.env.NODE_ENV === 'development'

        const redirectUrl = isLocalEnv
          ? `${origin}${next}`
          : forwardedHost
          ? `https://${forwardedHost}${next}`
          : `${origin}${next}`

        return {
          redirect: {
            destination: redirectUrl,
            permanent: false,
          },
        }
      }
    }

    return {
      redirect: {
        destination: `${origin}/auth/auth-code-error`,
        permanent: false,
      },
    }
  } catch (error) {
    console.error('🔴 Erreur dans getServerSideProps /auth/callback:', error)
    return {
      redirect: {
        destination: '/auth/auth-code-error',
        permanent: false,
      },
    }
  }
}

export default function Callback() {
  return <p>Connexion en cours...</p>
}
