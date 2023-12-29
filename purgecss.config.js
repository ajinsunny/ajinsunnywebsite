module.exports = {
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  css: ["./src/**/*.css"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
};
