/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'ironhearts.studio',
    ]
  },
  i18n: {
    locales: ['en-US', 'fr', 'de', 'es', 'ja', 'ko'],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en-US',
      },
      {
        domain: 'example.fr',
        defaultLocale: 'fr',
      },
      {
        domain: 'example.de',
        defaultLocale: 'de',
        http: true,
      },
    ],
  },
}

module.exports = nextConfig
