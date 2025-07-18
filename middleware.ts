import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

const loginPage = '/login';

const publicRoutes = [
  '/',
  '/accueil-employeur',
  '/plasmic-host',
  '/login',
  '/register-candidat',
  '/register-company',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/reset-password/[recovery_token]',
  '/first-install',
  '/plasmic-library',
  '/pages/api/supabase/callback',
  '/api/supabase/callback',
  '/auth/callback',
];

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          for (const { name, value, options } of cookiesToSet) {
            // Ignore les cookies vides pour ne pas écraser un cookie valide par un vide
            if (!value || value === '') continue;

            response.cookies.set(name, value, {
              path: '/',
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'lax',
              maxAge: 60 * 60,
              ...options,
            });
          }
          // Tu peux conserver ce cookie refresh si tu veux (ou le gérer aussi selon ta logique)
          response.cookies.set(`sb-${process.env.NEXT_PUBLIC_SUPABASE_ID}-refresh-token`, 'stub-refresh-token', {
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 30,
          });
        }
      }
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  const isPublicRoute = publicRoutes.some(route => {
    if (route.includes('[recovery_token]')) {
      const regex = new RegExp(`^${route.replace('[recovery_token]', '(.*)')}$`);
      return regex.test(request.nextUrl.pathname);
    }
    return route === request.nextUrl.pathname;
  });

  if (!isPublicRoute && !user) {
    const url = request.nextUrl.clone();
    url.pathname = loginPage;
    return NextResponse.redirect(url);
  }

  // Cookie de test pour debug, pas httpOnly
  response.cookies.set("middleware-test", "ok", {
    path: "/",
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 5,
  });

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
