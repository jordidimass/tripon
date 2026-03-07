import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a54ak187y1.ufs.sh",
        pathname: "/f/**",
      },
    ],
  },
};

export default nextConfig;
