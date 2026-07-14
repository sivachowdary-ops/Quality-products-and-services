import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/services/fire-safety-equipment",
        destination: "/products/fire-equipment",
        permanent: true,
      },
      {
        source: "/services/cleaning-supplies",
        destination: "/products/housekeeping-sanitary-solutions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
