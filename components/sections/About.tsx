'use client'

import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-6 tracking-wide uppercase">
          About
        </p>
        
        <h2 className="text-3xl sm:text-4xl font-display mb-8 text-stone-900 dark:text-stone-100">
          A bit about me
        </h2>
        
        <div className="space-y-6 text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
          <p>
            I&apos;m Noah, a 19-year-old web developer based on the Sunshine Coast, Australia. 
            I work with small businesses, tradies, and startups who need a solid web presence 
            without the agency price tag.
          </p>
          
          <p>
            My approach is straightforward: understand what you need, build something that works, 
            and keep communication clear throughout. No jargon, no unnecessary features, 
            just practical websites that do their job.
          </p>
          
          <p>
            I work with modern tools like React and Next.js, but what matters more is that 
            the end result is fast, looks good on all devices, and is easy for you to maintain.
          </p>
        </div>

        <div className="mt-12 pt-12 border-t border-stone-200 dark:border-stone-800">
          <h3 className="text-sm text-stone-500 dark:text-stone-400 mb-6 tracking-wide uppercase">
            What I work with
          </h3>
          <div className="flex flex-wrap gap-3">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1.5 text-sm text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/how-i-work"
            className="text-sm text-stone-900 dark:text-stone-100 underline underline-offset-4 hover:no-underline"
          >
            See how I work →
          </Link>
        </div>
      </div>
    </section>
  )
}
