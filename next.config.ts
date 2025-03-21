import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1yei2z3i6k35z.cloudfront.net',
        pathname: '**', // Allow all paths under this hostname
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
