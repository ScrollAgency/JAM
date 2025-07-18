// pages/api/auth/callback.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { createSupabaseServerClient } from '@/lib/supabaseCookies'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createSupabaseServerClient(req.headers.cookie, res)

  const code = req.query.code as string
  let next = (req.query.next as string) ?? '/'

  if (!next.startsWith('/')) next = '/'

  const protocol =
    req.headers['x-forwarded-proto']?.toString() || (process.env.NODE_ENV === 'development' ? 'http' : 'https')
  const host = req.headers.host || 'localhost:3000'
  const origin = `${protocol}://${host}`

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      return res.redirect(307, `${origin}${next}`)
    }
  }

  return res.redirect(307, `${origin}/auth/auth-code-error`)
}
