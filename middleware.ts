import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const loginPage = '/login'

// Liste des routes accessibles sans authentification
const publicRoutes = [
    '/login',
    '/',
    '/register-candidat',
    '/register-company',
    '/register',
    '/plasmic-host',
    '/forgot-password',
    '/reset-password',
    '/reset-password/[recovery_token]',
    '/first-install',
    '/plasmic-library',
    '/parametres',
]

export async function middleware(request: NextRequest) {
    // Préparer la réponse Next.js
    let supabaseResponse = NextResponse.next()

    // ⚠ Correction : Utiliser SUPABASE_SECRET_KEY au lieu de la clé ANON (meilleure sécurité)
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SECRET_KEY!, // ⚠ Assurez-vous d'avoir défini cette clé côté serveur !
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    // On met à jour les cookies dans la réponse en évitant les erreurs avec `options`
                    cookiesToSet.forEach(({ name, value, options = {} }) => {
                        supabaseResponse.cookies.set(name, value, options)
                    })
                },
            },
        }
    )

    // ⚠ Correction : `auth.getUser()` ne fonctionne pas bien ici, on utilise `auth.getSession()`
    const { data: { session } } = await supabase.auth.getSession()
    const user = session?.user

    // Vérification améliorée des routes publiques (corrige problème de comparaison exacte)
    const isPublicRoute = publicRoutes.some(route => {
        if (route.includes('[recovery_token]')) {
            // ⚠ Correction : On utilise une regex qui fonctionne pour les routes dynamiques
            const regex = new RegExp(`^${route.replace('[recovery_token]', '.*')}$`)
            return regex.test(request.nextUrl.pathname)
        }
        return request.nextUrl.pathname.startsWith(route)
    })

    // ⚠ Correction : Empêcher une boucle infinie en vérifiant si on est déjà sur `/login`
    if (!isPublicRoute && !user && request.nextUrl.pathname !== loginPage) {
        const url = request.nextUrl.clone()
        url.pathname = loginPage
        return NextResponse.redirect(url)
    }

    // Retourner la réponse avec les cookies si tout est OK
    return supabaseResponse
}

// Configuration du middleware pour éviter de matcher les fichiers statiques, images et API
export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|api/).*)',
    ],
}