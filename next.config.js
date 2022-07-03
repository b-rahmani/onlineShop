/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 900, 1500],
    imageSizes: [16, 30, 60],
  },
};

module.exports = nextConfig;
