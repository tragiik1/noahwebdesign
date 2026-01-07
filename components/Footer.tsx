'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-coffee-200 dark:border-coffee-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-coffee-500 dark:text-coffee-400">
          © {new Date().getFullYear()} Noah Varlet
        </p>

        <nav className="flex gap-6 text-sm">
          <Link 
            href="/privacy" 
            className="text-coffee-500 dark:text-coffee-400 hover:text-coffee-900 dark:hover:text-cream-100 transition-colors"
          >
            Privacy
          </Link>
          <Link 
            href="/terms" 
            className="text-coffee-500 dark:text-coffee-400 hover:text-coffee-900 dark:hover:text-cream-100 transition-colors"
          >
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  )
}
