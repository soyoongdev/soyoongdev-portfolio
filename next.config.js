/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'datsolar.com',
      },
      {
        protocol: 'https',
        hostname: 'thietthach.vn',
      },
      {
        protocol: 'https',
        hostname: 'github-production-user-asset-6210df.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'phungnguyengarment.vn',
      },
    ],
  },
}

module.exports = nextConfig
