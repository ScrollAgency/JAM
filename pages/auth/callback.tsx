// pages/auth/callback.tsx
import { GetServerSideProps } from 'next'
import { createSupabaseServerClient } from '@/lib/supabaseCookies'
import { NextApiRequest, NextApiResponse } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const supabase = createSupabaseServerClient(req.headers.cookie, res as NextApiResponse)

  const code = query.code as string
  let next = (query.next as string) ?? '/'

  if (!next.startsWith('/')) next = '/'

  const origin = req.headers.origin ?? `http://${req.headers.host}`

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
}

// Page React fallback pendant la redirection
export default function Callback() {
  return <p>Connexion en cours...</p>
}
