'use client'

import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-7">
            <p className="text-sm text-coffee-500 dark:text-coffee-400 uppercase tracking-wide mb-3">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-coffee-900 dark:text-cream-100 mb-8">
              Building websites for businesses that want to grow online
            </h2>
            
            <div className="space-y-4 text-coffee-600 dark:text-cream-300 leading-relaxed">
              <p>
                I&apos;m Noah, a web developer based on the Sunshine Coast. I help small businesses 
                and startups establish a professional online presence without the agency overhead.
              </p>
              
              <p>
                Every project starts with understanding your goals. From there, I design and build 
                a site that&apos;s fast, looks great on any device, and actually helps your business.
              </p>
            </div>

            <Link
              href="/how-i-work"
              className="inline-flex mt-8 px-5 py-2.5 border border-coffee-300 dark:border-coffee-700 text-coffee-900 dark:text-cream-100 font-medium hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-colors rounded"
            >
              How I work
            </Link>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-sm text-coffee-500 dark:text-coffee-400 uppercase tracking-wide mb-4">
                What I use
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-coffee-100 dark:bg-coffee-900 text-coffee-700 dark:text-cream-300 text-sm rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-coffee-200 dark:border-coffee-800">
              <p className="text-sm text-coffee-500 dark:text-coffee-400 uppercase tracking-wide mb-4">
                Quick facts
              </p>
              <div className="space-y-3 text-coffee-700 dark:text-cream-300">
                <div className="flex justify-between">
                  <span>Location</span>
                  <span className="text-coffee-900 dark:text-cream-100">Sunshine Coast, QLD</span>
                </div>
                <div className="flex justify-between">
                  <span>Availability</span>
                  <span className="text-coffee-900 dark:text-cream-100">Taking projects</span>
                </div>
                <div className="flex justify-between">
                  <span>Response time</span>
                  <span className="text-coffee-900 dark:text-cream-100">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
