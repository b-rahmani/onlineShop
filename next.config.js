/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "fakestoreapi.com",
      "pngimg.com",
      "www.pngarts.com",
      "about.digikala.com",
    ],
  },
};

module.exports = nextConfig;
