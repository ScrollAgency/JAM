import type { NextApiRequest, NextApiResponse } from 'next'
import createClient from '@/utils/supabase/api'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createClient(req, res)
  const code = req.query.code as string
  let next = (req.query.next as string) ?? '/'

  if (!next.startsWith('/')) next = '/'

  const protocol = req.headers['x-forwarded-proto']?.toString() || (process.env.NODE_ENV === 'development' ? 'http' : 'https')
  const host = req.headers.host || 'localhost:3000'
  const origin = `${protocol}://${host}`

  if (code) {
    try {
      console.log('➡️ Auth code reçu:', code)
      const { error } = await supabase.auth.exchangeCodeForSession(code)

      if (!error) {
        return res.redirect(307, `${origin}${next}`)
      }

      console.error('❌ Supabase exchange error:', error)
      return res.redirect(307, `${origin}/auth/auth-code-error`)
    } catch (err) {
      console.error('❌ Unexpected error during Supabase exchange:', err)
      return res.redirect(307, `${origin}/auth/auth-code-error`)
    }
  }

  res.redirect(307, `${origin}/auth/auth-code-error`)
}
