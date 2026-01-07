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
    description: 'I build the site and keep you updated on progress throughout.',
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
          className="text-coffee-500 dark:text-coffee-400 hover:text-coffee-700 dark:hover:text-coffee-300 mb-8 inline-block"
        >
          ← Back
        </Link>

        <h1 className="text-3xl sm:text-4xl font-display font-semibold text-coffee-900 dark:text-cream-100 mb-4">
          How I work
        </h1>
        
        <p className="text-lg text-coffee-600 dark:text-cream-400 mb-12">
          A straightforward process from first conversation to launch.
        </p>

        <div className="space-y-6">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="flex gap-6 p-6 bg-coffee-50 dark:bg-coffee-900/50 rounded"
            >
              <span className="text-sm text-coffee-400 dark:text-coffee-500 font-mono">
                {step.number}
              </span>
              <div>
                <h2 className="text-lg font-display font-medium text-coffee-900 dark:text-cream-100 mb-2">
                  {step.title}
                </h2>
                <p className="text-coffee-600 dark:text-cream-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-coffee-900 dark:bg-coffee-800 rounded text-center">
          <p className="text-xl font-display font-medium text-cream-100 mb-4">
            Ready to start?
          </p>
          <Link
            href="/#contact"
            className="inline-flex px-6 py-3 bg-cream-50 text-coffee-900 font-medium rounded hover:bg-cream-100 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  )
}
