'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <Link href="/" className="text-lg font-display text-stone-900 dark:text-stone-100">
              Noah
            </Link>
            <p className="mt-2 text-sm text-stone-500 dark:text-stone-500">
              Web developer, Sunshine Coast
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link 
              href="/#portfolio" 
              className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
            >
              Work
            </Link>
            <Link 
              href="/#services" 
              className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
            >
              Services
            </Link>
            <Link 
              href="/#contact" 
              className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
            >
              Contact
            </Link>
            <Link 
              href="/privacy" 
              className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
            >
              Terms
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-200 dark:border-stone-800">
          <p className="text-sm text-stone-400 dark:text-stone-600">
            © {new Date().getFullYear()} Noah Varlet
          </p>
        </div>
      </div>
    </footer>
  )
}
