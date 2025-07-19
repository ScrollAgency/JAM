import { createServerClient, serializeCookieHeader } from '@supabase/ssr'
import { type NextApiRequest, type NextApiResponse } from 'next'
import { parse } from 'cookie'

export default function createClient(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          const cookieHeader = req.headers.cookie ?? ''
          const parsed = parse(cookieHeader)

          const cookies = Object.entries(parsed).map(([name, value]) => ({
            name,
            value: decodeURIComponent((value ?? '').replace(/^"|"$/g, '')),
          }))

          console.log('✅ Cookies lus:', cookies)
          const verifier = cookies.find(c => c.name.includes('code-verifier'))
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
