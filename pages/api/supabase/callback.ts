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

  // Récupérer le code_verifier dans les cookies (à adapter selon où tu le stockes)
  const cookies = parse(req.headers.cookie || '')
  const codeVerifier = cookies['sb-idwomihieftgogbgivic-auth-token-code-verifier']?.replace(/^"|"$/g, '')

  if (!code || !codeVerifier) {
    console.error('❌ Code ou code_verifier manquant')
    return res.redirect(307, '/auth/auth-code-error')
  }

  try {
    // Echange avec codeVerifier (obligatoire pour PKCE)
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    if (error || !data?.session) {
      console.error('❌ Supabase exchange error:', error)
      return res.redirect(307, '/auth/auth-code-error')
    }

    const { access_token, refresh_token } = data.session

    if (access_token && refresh_token) {
      const authTokenValue = encodeURIComponent(JSON.stringify({ access_token, refresh_token }))

      const cookieOptions = `Path=/; HttpOnly; SameSite=Lax; Max-Age=604800${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`

      res.setHeader('Set-Cookie', [
        `sb-access-token=${access_token}; ${cookieOptions}`,
        `sb-refresh-token=${refresh_token}; ${cookieOptions}`,
        // ici sans HttpOnly si besoin d'accès JS
        `sb-idwomihieftgogbgivic-auth-token=${authTokenValue}; Path=/; SameSite=Lax; Max-Age=604800${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
      ])
    } else {
      console.error('Tokens manquants, impossible de set cookies')
    }

    return res.redirect(307, `${origin}${next}`)
  } catch (err) {
    console.error('❌ Erreur inattendue:', err)
    return res.redirect(307, '/auth/auth-code-error')
  }
}
