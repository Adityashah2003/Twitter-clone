/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ['cdn.cms-twdigitalassets.com']
  }
}

module.exports = nextConfig
