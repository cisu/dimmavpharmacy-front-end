/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com']
  },
  i18n: {
    locales: ["el"],
    defaultLocale: "el",
  },
}

module.exports = nextConfig
