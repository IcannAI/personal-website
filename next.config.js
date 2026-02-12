const isProd = process.env.NODE_ENV === 'production';
const repoName = 'personal-website'; // 改成你的 repo 名

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,

  // 關鍵修正：子目錄必加
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
};