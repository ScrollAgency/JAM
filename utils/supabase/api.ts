import { createServerClient, serializeCookieHeader } from '@supabase/ssr'
import { type NextApiRequest, type NextApiResponse } from 'next'

export default function createClient(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          const cookies =
            req.headers.cookie
              ?.split(';')
              .map((c) => {
                const [name, ...rest] = c.trim().split('=')
                return {
                  name,
                  value: decodeURIComponent(rest.join('=')),
                }
              }) ?? []

          console.log('✅ Cookies lus:', cookies)
          const verifier = cookies.find((c) => c.name.includes('code-verifier'))
          console.log('🎯 code_verifier:', verifier?.value || '❌ not found')

          return cookies
        },
        setAll(cookiesToSet) {
          res.setHeader(
            'Set-Cookie',
            cookiesToSet.map(({ name, value, options }) =>
              serializeCookieHeader(name, value, options)
            )
          )
        },
      },
    }
  )

  return supabase
}
