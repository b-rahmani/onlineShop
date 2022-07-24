/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // deviceSizes: [640, 900, 1500],
    // imageSizes: [16, 30, 60],
    domains: ["fakestoreapi.com", "pngimg.com"],
  },
  // env: {
  //   MONGODB_URI:
  //     "mongodb+srv://behnam:900251362@cluster0.ozeez.mongodb.net/behnam",
  // },
};

module.exports = nextConfig;
