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
      { source: '/', destination: '/tools', permanent: false },
      { source: '/review', destination: '/tools/patient-reviews', permanent: true },
      { source: '/review/:path*', destination: '/tools/patient-reviews/:path*', permanent: true },
      { source: '/hair-transplant', destination: '/tools/hair-transplant', permanent: true },
      { source: '/hair-transplant/:path*', destination: '/tools/hair-transplant/:path*', permanent: true },
      { source: '/blog', destination: '/tools/blog', permanent: true },
      { source: '/blog/:path*', destination: '/tools/blog/:path*', permanent: true }
    ];
  }
};

export default nextConfig;
