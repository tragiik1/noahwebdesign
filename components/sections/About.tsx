'use client'

import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="text-sm text-coffee-500 dark:text-coffee-400 mb-3">About</p>
            <h2 className="text-3xl font-display font-semibold text-coffee-900 dark:text-cream-100">
              Noah Varlet
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6 text-coffee-600 dark:text-cream-400 leading-relaxed">
              <p className="text-lg">
                I&apos;m a web developer on the Sunshine Coast helping small businesses 
                build their online presence.
              </p>
              
              <p>
                I focus on creating websites that are fast, look professional, and actually 
                help businesses grow. No unnecessary complexity — just effective solutions 
                at fair prices.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-coffee-200 dark:border-coffee-800">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-sm text-coffee-500 dark:text-coffee-500 mb-2">Location</p>
                  <p className="text-coffee-900 dark:text-cream-100">Sunshine Coast, QLD</p>
                </div>
                <div>
                  <p className="text-sm text-coffee-500 dark:text-coffee-500 mb-2">Response</p>
                  <p className="text-coffee-900 dark:text-cream-100">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-coffee-200 dark:border-coffee-800">
              <p className="text-sm text-coffee-500 dark:text-coffee-500 mb-4">Stack</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-sm text-coffee-600 dark:text-cream-400 border border-coffee-200 dark:border-coffee-800 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/how-i-work"
              className="inline-flex mt-8 text-sm text-coffee-900 dark:text-cream-100 font-medium hover:text-coffee-600 dark:hover:text-coffee-400 transition-colors"
            >
              How I work →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
