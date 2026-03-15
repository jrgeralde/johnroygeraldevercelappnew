/** @type {import('next').NextConfig} */
const repoName = 'smart-home-dashboard';
const isGitHubPages =
  process.env.DEPLOY_TARGET === 'github-pages' ||
  process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(isGitHubPages
    ? {
        output: 'export',
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
};

export default nextConfig;
