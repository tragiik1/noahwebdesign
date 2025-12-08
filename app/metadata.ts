import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Noah - Web Developer',
  description: 'Friendly 19-year-old web developer from Sunshine Coast, Australia. Building clean, fast, affordable websites for businesses. Specializing in Next.js, React, and modern web development.',
  url: 'https://noahwebdesign.com', // Update with your actual domain
  ogImage: '/og-image.jpg', // You can add this later
  links: {
    instagram: '#',
    github: '#',
    email: 'mailto:hello@noahwebdesign.com',
    linkedin: '#',
  },
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Noah | Professional Web Developer | Sunshine Coast, Australia',
    template: '%s | Noah Web Developer',
  },
  description: siteConfig.description,
  keywords: [
    'web developer',
    'website developer',
    'freelance web developer',
    'Sunshine Coast web developer',
    'affordable website design',
    'Next.js developer',
    'React developer',
    'custom website development',
    'small business website',
    'professional website design',
    'responsive website',
    'modern website',
    'web design services',
    'website builder',
    'portfolio website',
  ],
  authors: [{ name: 'Noah', url: siteConfig.url }],
  creator: 'Noah',
  publisher: 'Noah',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: siteConfig.url,
    title: 'Noah | Professional Web Developer | Sunshine Coast, Australia',
    description: siteConfig.description,
    siteName: 'Noah Web Developer',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Noah - Web Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noah | Professional Web Developer',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@noahwebdesign', // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: 'technology',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Noah Web Developer',
  },
}

