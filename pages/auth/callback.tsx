// pages/auth/callback.tsx
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const code = context.query.code
  const next = context.query.next ?? '/'

  if (typeof code === 'string') {
    return {
      redirect: {
        destination: `/api/supabase/callback?code=${code}&next=${encodeURIComponent(next as string)}`,
        permanent: false,
      },
    }
  }

  return {
    redirect: {
      destination: '/auth/auth-code-error',
      permanent: false,
    },
  }
}

export default function CallbackPage() {
  return <p>Connexion en cours...</p>
}
