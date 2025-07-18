// pages/auth/callback.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { supabaseServer } from '@/lib/supabaseServer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, headers } = req;
  const code = query.code as string;

  let next = (query.next as string) ?? '/';
  if (!next.startsWith('/')) {
    next = '/';
  }

  if (code) {
    const { error } = await supabaseServer.auth.exchangeCodeForSession(code);

    if (!error) {
      const forwardedHost = headers['x-forwarded-host'];
      const isLocalEnv = process.env.NODE_ENV === 'development';

      if (isLocalEnv) {
        return res.redirect(307, `${headers.origin}${next}`);
      } else if (forwardedHost) {
        return res.redirect(307, `https://${forwardedHost}${next}`);
      } else {
        return res.redirect(307, `${headers.origin}${next}`);
      }
    }
  }

  return res.redirect(307, `${headers.origin}/auth/auth-code-error`);
}
