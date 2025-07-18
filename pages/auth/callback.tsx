import { NextApiRequest, NextApiResponse } from 'next';
import { createSupabaseServerClient } from '@/lib/supabaseCookies';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createSupabaseServerClient(req.headers.cookie, res);

  const { query } = req;
  const code = query.code as string;

  let next = (query.next as string) ?? '/';
  if (!next.startsWith('/')) next = '/';

  const origin = req.headers.origin ?? `http://${req.headers.host}`;

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      const forwardedHost = req.headers['x-forwarded-host'];
      const isLocalEnv = process.env.NODE_ENV === 'development';

      if (isLocalEnv) {
        return res.redirect(307, `${origin}${next}`);
      } else if (forwardedHost) {
        return res.redirect(307, `https://${forwardedHost}${next}`);
      } else {
        return res.redirect(307, `${origin}${next}`);
      }
    }
  }

  return res.redirect(307, `${origin}/auth/auth-code-error`);
}
