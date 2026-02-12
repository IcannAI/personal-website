/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/personal-website',
  assetPrefix: '/personal-website/',
  images: {
    unoptimized: true
  },
  trailingSlash: true
}

module.exports = nextConfig