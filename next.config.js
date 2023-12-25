const withBundleAnalyzer = require("next-bundle-analyzer");

module.exports = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true", // Optionally enable based on env var
})({
  reactStrictMode: true,
  swcMinify: true,
});
