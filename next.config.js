/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static export for GitHub Pages
  trailingSlash: true, // Helps with GitHub Pages routing
}

module.exports = nextConfig

