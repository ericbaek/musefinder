/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const removeImports = require('next-remove-imports')({
  test: /node_modules([\s\S]*?)\.(tsx|ts|js|mjs|jsx)$/,
  matchImports: "\\.(less|css|scss|sass|styl)$"
});

module.exports = removeImports(nextConfig)

module.exports = {
  env: {
    DATABASE_URL: "mongodb+srv://ericbaek:9xgLf8bb7HDHpue@musefinder.zdqz4ua.mongodb.net/cluster0retryWrites=true&w=majority",
  },
};
