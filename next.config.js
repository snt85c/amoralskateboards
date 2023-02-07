/** @type {import('next').NextConfig} */
// next.config.js
module.exports = {
  env: {
    SANITY_STUDIO_API_PROJECT_ID : "fzj0fwgg"
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpg|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|webp)$/,
      type: "asset",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
      },
    });

    return config;
  },
};
