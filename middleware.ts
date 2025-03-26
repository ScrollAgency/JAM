import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const loginPage = '/login'

// Liste des routes accessibles sans authentification
const publicRoutes = [
    '/login',
    '/register-candidat',
    '/register-company',
    '/register',
    '/plasmic-host',
    '/',
    '/forgot-password',
    '/reset-password',
    '/reset-password/[recovery_token]',
    '/first-install',
    '/plasmic-library',
]

export async function middleware(request: NextRequest) {
    // Préparer la réponse Next.js
    let supabaseResponse = NextResponse.next()

    // Créer le client Supabase SSR
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    // On met à jour les cookies dans la réponse
                    cookiesToSet.forEach(({ name, value, options }) => {
                        supabaseResponse.cookies.set(name, value, options)
                    })
                },
            },
        }
    )

    // Récupère l'utilisateur connecté
    const {
        data: { user },
    } = await supabase.auth.getUser()

    // Vérifie si la route est publique
    const isPublicRoute = publicRoutes.some((route) => {
        if (route.includes('[recovery_token]')) {
            const regex = new RegExp(`^${route.replace('[recovery_token]', '.*')}$`)
            return regex.test(request.nextUrl.pathname)
        }
        return route === request.nextUrl.pathname
    })

    // Si ce n'est pas une route publique et que l'utilisateur n'est pas connecté ➜ redirige vers login
    if (!isPublicRoute && !user) {
        const url = request.nextUrl.clone()
        url.pathname = loginPage
        return NextResponse.redirect(url)
    }

    // Sinon, retourne la réponse avec les cookies
    return supabaseResponse
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
