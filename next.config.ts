import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  /* config options here */
  // (https://ecommerce.routemisr.com/Route-Academy-categories/1681511964020.jpeg
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/Route-Academy-products/**',
      },
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/Route-Academy-categories/**',
      },
    ],
  },
};

export default nextConfig;
