/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["files.cinerama.uz", "upload.wikimedia.org"],
  },
};

module.exports = withVideos();

module.exports = nextConfig;
