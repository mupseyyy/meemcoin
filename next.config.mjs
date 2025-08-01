/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: false,
  distDir: "out",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
        port: "",
        pathname: "/api/v1/image/assets/**",
      },
      {
        protocol: "https",
        hostname: "api.builder.io",
        port: "",
        pathname: "/api/v1/image/assets/**",
      },
    ],
  },
};

export default nextConfig;
