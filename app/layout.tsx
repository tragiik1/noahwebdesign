import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Noah Web Design | Professional Websites for Sunshine Coast Businesses',
  description: 'Hi, I\'m Noah. I build clean, fast, affordable websites from scratch for local businesses, small companies, and personal brands.',
  keywords: 'web developer, sunshine coast, website design, freelance developer, affordable websites',
  authors: [{ name: 'Noah' }],
  openGraph: {
    title: 'Noah Web Design | Professional Websites',
    description: 'Affordable, professional websites for Sunshine Coast businesses',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
        <ThemeProvider>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

