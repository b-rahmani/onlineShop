/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    deviceSizes: [640, 900, 1500],
    imageSizes: [16, 30, 60],
  },
};

module.exports = nextConfig;
