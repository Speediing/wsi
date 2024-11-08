/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    ppr: 'incremental',
  },
};
