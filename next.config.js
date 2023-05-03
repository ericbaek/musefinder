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
  images: {
      loader: 'akamai',
      path: '/',
  }
}