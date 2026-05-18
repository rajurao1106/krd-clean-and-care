/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/backend-api/:path*',
        destination: 'https://krd-admin-backend.vercel.app/api/:path*', // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;