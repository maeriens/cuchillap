import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env["NODE_ENV"] === "development" ? "" : "/cuchillap",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
