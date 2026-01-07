'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto w-full py-24">
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-6 tracking-wide uppercase">
          Web Developer — Sunshine Coast
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display leading-[1.15] mb-8 text-stone-900 dark:text-stone-100">
          I design and build websites for small businesses
        </h1>
        
        <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-400 mb-12 max-w-2xl leading-relaxed">
          I&apos;m Noah, a freelance web developer. I create simple, effective websites 
          that help businesses establish their online presence without overcomplicating things.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#contact"
            className="inline-flex justify-center px-6 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-sm font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
          >
            Get in touch
          </Link>
          <Link
            href="#portfolio"
            className="inline-flex justify-center px-6 py-3 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-sm font-medium hover:border-stone-400 dark:hover:border-stone-600 transition-colors"
          >
            View work
          </Link>
        </div>
      </div>
    </section>
  )
}
