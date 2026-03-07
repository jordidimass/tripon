import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@tripon/catalog", "@tripon/search-core"],
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
