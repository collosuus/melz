import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/blog/gtip-kodu-nedir.html', destination: '/blog/gtip-kodu-nedir', permanent: true },
      { source: '/blog/ithalat-belgeleri.html', destination: '/blog/ithalat-belgeleri', permanent: true },
      { source: '/blog/gumruk-vergisi-hesaplama.html', destination: '/blog/gumruk-vergisi-hesaplama', permanent: true },
    ];
  },
};

export default nextConfig;
