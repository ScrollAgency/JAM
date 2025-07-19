// pages/api/supabase/callback.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import createClient from '@/utils/supabase/api'
import { parse } from 'cookie'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createClient(req, res)
  const code = req.query.code as string
  let next = (req.query.next as string) ?? '/'

  if (!next.startsWith('/')) next = '/'

  const protocol = 'https'
  const host = req.headers.host || 'localhost:3000'
  const origin = `${protocol}://${host}`

  const cookies = parse(req.headers.cookie || '')
  const codeVerifier = cookies['sb-idwomihieftgogbgivic-auth-token-code-verifier']?.replace(/^"|"$/g, '')

  if (!code || !codeVerifier) {
    console.error('❌ Code ou code_verifier manquant', { code, codeVerifier })
    return res.redirect(307, '/auth/auth-code-error')
  }

  try {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    if (error || !data?.session) {
      console.error('❌ Supabase exchange error:', error)
      return res.redirect(307, '/auth/auth-code-error')
    }

    const { access_token, refresh_token } = data.session

    if (access_token && refresh_token) {
      const encodeToken = (token: string) => `base64:${Buffer.from(token).toString('base64')}`
      const cookieOptions = `Path=/; HttpOnly; SameSite=Lax; Max-Age=604800${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`

      console.log('➡️ Set cookie sb-auth-token:', encodeToken)
      res.setHeader('Set-Cookie', [
        `sb-access-token=${encodeToken(access_token)}; ${cookieOptions}`,
        `sb-refresh-token=${encodeToken(refresh_token)}; ${cookieOptions}`,
        // Si besoin côté client :
        `sb-idwomihieftgogbgivic-auth-token=${encodeToken(access_token)}; Path=/; SameSite=Lax; Max-Age=604800${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
      ])

      res.setHeader('Cache-Control', 'no-store')
    } else {
      console.error('❌ Tokens manquants après échange Supabase')
    }

    return res.redirect(307, `${origin}${next}`)
  } catch (err) {
    console.error('❌ Erreur inattendue dans /callback.ts:', err)
    return res.redirect(307, '/auth/auth-code-error')
  }
}
