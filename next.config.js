/** @type {import("next").NextConfig} */
const removeImports = require("next-remove-imports")();

const nextConfig = (module.exports = {
  experimental: {
    newNextLinkBehavior: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  images: {
    remotePatterns: [
      {
        port: "",
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        port: "",
        hostname: "cdn.sanity.io",
        protocol: "https",
      },
      {
        port: "",
        hostname: "firebasestorage.googleapis.com",
        protocol: "https",
      },
    ],
  },
});
module.exports = nextConfig;
module.exports = removeImports();
