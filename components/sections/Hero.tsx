'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full pt-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-sm text-coffee-700 dark:text-coffee-300 bg-coffee-100/80 dark:bg-coffee-900/60 rounded-full border border-coffee-200/50 dark:border-coffee-700/50">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            Available for projects
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-semibold text-coffee-900 dark:text-cream-100 leading-[1.1] tracking-tight">
            Web developer for
            <br />
            <span className="text-coffee-500 dark:text-coffee-400">small businesses</span>
          </h1>
          
          <p className="mt-6 text-lg text-coffee-600 dark:text-coffee-300 leading-relaxed max-w-lg">
            I design and build clean, fast websites that help local businesses grow online. Based on the Sunshine Coast.
          </p>
          
          <div className="mt-10 flex items-center gap-4">
            <Link
              href="#contact"
              className="px-5 py-2.5 bg-coffee-800 dark:bg-cream-100 text-cream-50 dark:text-coffee-900 text-sm font-medium rounded-lg hover:bg-coffee-700 dark:hover:bg-cream-200 transition-colors"
            >
              Get in touch
            </Link>
            <Link
              href="#portfolio"
              className="px-5 py-2.5 text-coffee-600 dark:text-coffee-300 text-sm font-medium hover:text-coffee-900 dark:hover:text-cream-100 transition-colors"
            >
              View work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
