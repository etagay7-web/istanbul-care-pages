/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'fastly.picsum.photos' }
    ]
  },
  async redirects() {
    return [
      { source: '/tools/patient-reviews', destination: '/review', permanent: true },
      { source: '/tools/patient-reviews/:path*', destination: '/review/:path*', permanent: true },
      { source: '/tools/hair-transplant', destination: '/hair-transplant', permanent: true },
      { source: '/tools/hair-transplant/:path*', destination: '/hair-transplant/:path*', permanent: true },
      { source: '/tools/blog', destination: '/blog', permanent: true },
      { source: '/tools/blog/:path*', destination: '/blog/:path*', permanent: true }
    ];
  }
};

export default nextConfig;
