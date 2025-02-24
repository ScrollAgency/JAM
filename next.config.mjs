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
  },
};

export default nextConfig;
