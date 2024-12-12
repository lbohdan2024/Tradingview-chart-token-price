// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: false,
      },
    ];
  },
};
module.exports = nextConfig;

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

