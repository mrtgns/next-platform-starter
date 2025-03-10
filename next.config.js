const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  experimental: {
      appDir: true
  },
  webpack: (config) => {
      config.resolve.alias['@'] = __dirname;
      return config;
  }
};

module.exports = nextConfig;