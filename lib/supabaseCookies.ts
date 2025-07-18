import { createServerClient } from '@supabase/ssr'
import cookie from 'cookie'
import type { NextApiResponse } from 'next'

// Ajoute `res` en paramètre
export function createSupabaseServerClient(cookieHeader: string | undefined, res: NextApiResponse) {
  const parsedCookies = cookie.parse(cookieHeader || '')

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        getAll() {
          return Object.entries(parsedCookies)
            .filter(([_, value]) => value !== undefined)
            .map(([name, value]) => ({
              name,
              value: value!,
            }))
        },
        setAll(cookiesToSet) {
          // Important : pour chaque cookie, ajoute un header Set-Cookie
          cookiesToSet.forEach(({ name, value, options }) => {
            // Attention à ajouter les headers sans écraser les précédents
            const serializedCookie = cookie.serialize(name, value, { ...options })
            const currentHeader = res.getHeader('Set-Cookie') as string | string[] | undefined;

            if (!currentHeader) {
              res.setHeader('Set-Cookie', serializedCookie)
            } else if (Array.isArray(currentHeader)) {
              res.setHeader('Set-Cookie', [...currentHeader, serializedCookie])
            } else {
              res.setHeader('Set-Cookie', [currentHeader, serializedCookie])
            }
          })
        }
      }
    }
  )
}
