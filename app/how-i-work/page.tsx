'use client'

import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Initial chat',
    description: 'We have a conversation about your business and what you need. No commitment, just figuring out if we\'re a good fit.',
  },
  {
    number: '02',
    title: 'Proposal',
    description: 'I send you a clear proposal with scope, timeline, and pricing. No surprises.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'I create mockups showing how your site will look. You give feedback, we refine until it\'s right.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'I build the site and keep you updated. You get to see progress along the way.',
  },
  {
    number: '05',
    title: 'Review',
    description: 'You test everything and request changes. We make sure it works perfectly.',
  },
  {
    number: '06',
    title: 'Launch',
    description: 'We go live. I handle the technical stuff and make sure everything runs smoothly.',
  },
]

export default function HowIWorkPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/" 
          className="text-sm text-stone-500 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 mb-8 inline-block"
        >
          ← Back
        </Link>

        <p className="text-sm text-stone-500 dark:text-stone-400 mb-6 tracking-wide uppercase">
          Process
        </p>
        
        <h1 className="text-3xl sm:text-4xl font-display mb-4 text-stone-900 dark:text-stone-100">
          How I work
        </h1>
        
        <p className="text-lg text-stone-600 dark:text-stone-400 mb-16">
          A straightforward process from first conversation to launch.
        </p>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`flex gap-8 ${index !== steps.length - 1 ? 'pb-12 border-b border-stone-200 dark:border-stone-800' : ''}`}
            >
              <span className="text-sm text-stone-400 dark:text-stone-600 font-mono">
                {step.number}
              </span>
              <div>
                <h2 className="text-xl font-display mb-2 text-stone-900 dark:text-stone-100">
                  {step.title}
                </h2>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-stone-200 dark:border-stone-800">
          <p className="text-lg font-display mb-4 text-stone-900 dark:text-stone-100">
            Ready to start?
          </p>
          <Link
            href="/#contact"
            className="text-sm text-stone-900 dark:text-stone-100 underline underline-offset-4 hover:no-underline"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </main>
  )
}
