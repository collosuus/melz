import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
  async redirects() {
    return [
      { source: '/blog/gtip-kodu-nedir.html', destination: '/blog/gtip-kodu-nedir', permanent: true },
      { source: '/blog/ithalat-belgeleri.html', destination: '/blog/ithalat-belgeleri', permanent: true },
      { source: '/blog/gumruk-vergisi-hesaplama.html', destination: '/blog/gumruk-vergisi-hesaplama', permanent: true },
    ];
  },
};

export default nextConfig;
