/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow any hostname
        port: '',
        pathname: '/**', // Allow any path on this host
      },
    ],
  },
};

export default nextConfig;
