/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  experimental: {
    appDir: true
  },
  trailingSlash: true, // 🔥 404 hatasını önleyebilir
};

module.exports = nextConfig;