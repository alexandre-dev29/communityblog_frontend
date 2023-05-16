/** @type {import("next").NextConfig} */
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
        hostname: "**",
        protocol: "https",
      },
    ],
  },
  staticPageGenerationTimeout: 15000,
});
module.exports = nextConfig;
