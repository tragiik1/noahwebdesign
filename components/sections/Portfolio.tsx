'use client'

import Image from 'next/image'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm text-coffee-500 dark:text-coffee-400 mb-3">Work</p>
          <h2 className="text-3xl font-display font-semibold text-coffee-900 dark:text-cream-100">
            Recent project
          </h2>
        </div>

        <a 
          href="https://jteevents.com.au"
          target="_blank"
          rel="noopener noreferrer" 
          className="group block"
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded bg-coffee-100 dark:bg-coffee-900 border border-coffee-200 dark:border-coffee-800">
            <Image
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=675&fit=crop"
              alt="JTE Events website"
              fill
              className="object-cover transition-all duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
          </div>
          
          <div className="mt-6 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-display font-medium text-coffee-900 dark:text-cream-100">
                  JTE Events
                </h3>
                <span className="text-xs px-2 py-0.5 bg-coffee-100 dark:bg-coffee-900 text-coffee-600 dark:text-cream-400 rounded">
                  Event Hire
                </span>
              </div>
              <p className="text-coffee-500 dark:text-coffee-500 text-sm mt-2">
                jteevents.com.au
              </p>
            </div>
            <span className="text-coffee-400 dark:text-coffee-600 group-hover:text-coffee-600 dark:group-hover:text-coffee-400 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </span>
          </div>
        </a>

        <div className="mt-24 pt-16 border-t border-coffee-200 dark:border-coffee-800">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="text-xl font-display font-medium text-coffee-900 dark:text-cream-100">
                Have a project in mind?
              </h3>
              <p className="text-coffee-600 dark:text-cream-400 mt-1">
                Let&apos;s talk about how I can help.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex px-5 py-2.5 bg-coffee-900 dark:bg-cream-100 hover:bg-coffee-800 dark:hover:bg-cream-200 text-cream-50 dark:text-coffee-900 text-sm font-medium rounded transition-colors"
            >
              Start a project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
