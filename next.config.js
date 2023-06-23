/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "fakestoreapi.com",
      "pngimg.com",
      "www.pngarts.com",
      "ramin021.pythonanywhere.com",
    ],
  },
};

module.exports = nextConfig;
