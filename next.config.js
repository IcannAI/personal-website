const isProd = process.env.NODE_ENV === 'production';
const repoName = 'personal-website'; // repo 名

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 生成靜態文件
  images: { unoptimized: true }, // GitHub Pages 需要
  trailingSlash: true,

  // 關鍵修正：子目錄必加
  basePath: isProd ? `/${repoName}` : '/personal-website',
  assetPrefix: isProd ? `/${repoName}/` : '/personal-website',
}

module.exports = nextConfig