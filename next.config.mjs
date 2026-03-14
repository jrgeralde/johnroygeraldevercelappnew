/** @type {import('next').NextConfig} */
const repoName = 'smart-home-dashboard';

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  ...(isProd ? {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  } : {}),
};

export default nextConfig;
