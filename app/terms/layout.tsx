import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Noah Web Developer. Read our terms and conditions for using our web development services.',
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

