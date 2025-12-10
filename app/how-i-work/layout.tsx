import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How I Work | My Process',
  description: 'Discover my step-by-step process for building websites: Discovery → Design → Development → Launch. Transparent, simple, and focused on your success.',
}

export default function HowIWorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

