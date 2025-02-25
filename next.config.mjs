/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['flagcdn.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    PLASMIC_PROJECT_ID: process.env.PLASMIC_PROJECT_ID,
    PLASMIC_API_TOKEN: process.env.PLASMIC_API_TOKEN,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_MAPBOX_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
  },
};

export default nextConfig;
