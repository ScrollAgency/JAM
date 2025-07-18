import { createServerClient } from '@supabase/ssr'
import * as cookie from 'cookie'
import type { NextApiResponse } from 'next'

export function createSupabaseServerClient(cookieHeader: string | undefined, res: NextApiResponse) {
  const parsedCookies = cookie.parse(cookieHeader || '')

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return Object.entries(parsedCookies)
            .filter(([_, value]) => value !== undefined)
            .map(([name, value]) => ({ name, value: value! }))
        },
        setAll(cookiesToSet) {
          const serialized = cookiesToSet.map(({ name, value, options }) =>
            cookie.serialize(name, value, options)
          )
          res.setHeader('Set-Cookie', serialized)
        },
      },
    }
  )
}
