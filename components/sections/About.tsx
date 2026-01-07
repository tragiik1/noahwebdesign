'use client'

import Link from 'next/link'

export default function About() {
  const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js']
  
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-coffee-900 dark:text-cream-100 mb-6">
              About me
            </h2>
            
            <div className="space-y-4 text-coffee-600 dark:text-cream-300 leading-relaxed">
              <p>
                I&apos;m Noah, a web developer based on the Sunshine Coast, Australia. 
                I work with small businesses and startups who need a solid web presence 
                without the agency price tag.
              </p>
              
              <p>
                My approach is simple: understand what you need, build something that works, 
                and keep communication clear throughout the process.
              </p>
            </div>

            <Link
              href="/how-i-work"
              className="inline-flex mt-6 text-coffee-900 dark:text-cream-100 font-medium hover:text-coffee-600 dark:hover:text-coffee-400 transition-colors"
            >
              See how I work →
            </Link>
          </div>

          <div className="bg-coffee-100 dark:bg-coffee-900 rounded p-8">
            <p className="text-sm text-coffee-500 dark:text-coffee-400 mb-4 uppercase tracking-wide">
              Tech stack
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-cream-50 dark:bg-coffee-950 text-coffee-700 dark:text-cream-300 text-sm rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
