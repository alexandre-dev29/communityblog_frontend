module.exports = {
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
};
