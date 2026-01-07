'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-coffee-900 dark:text-cream-100 leading-[1.1] tracking-tight">
            Building websites
            <br />
            <span className="text-coffee-500 dark:text-coffee-400">that actually work</span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-coffee-600 dark:text-cream-300 max-w-xl leading-relaxed">
            Web developer for small businesses on the Sunshine Coast. Clean design, fast sites, fair prices.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="inline-flex justify-center items-center px-6 py-3 bg-coffee-900 dark:bg-cream-100 hover:bg-coffee-800 dark:hover:bg-cream-200 text-cream-50 dark:text-coffee-900 font-medium rounded transition-colors"
            >
              Start a project
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex justify-center items-center px-6 py-3 text-coffee-700 dark:text-cream-200 font-medium hover:text-coffee-900 dark:hover:text-cream-100 transition-colors"
            >
              See my work →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
