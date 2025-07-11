import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/villa-morticcione",
  assetPrefix: "/villa-morticcione",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
