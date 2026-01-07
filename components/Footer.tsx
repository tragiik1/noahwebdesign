'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-coffee-500 dark:text-coffee-500">
        <p>© {new Date().getFullYear()} Noah Varlet</p>

        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-coffee-900 dark:hover:text-cream-100 transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-coffee-900 dark:hover:text-cream-100 transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
