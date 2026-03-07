/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a54ak187y1.ufs.sh',
        port: '',
        pathname: '/f/**',
      },
    ],
  },
};

module.exports = nextConfig;
