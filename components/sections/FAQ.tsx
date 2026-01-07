'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How long does a website take?',
    answer: 'Most projects take 2-4 weeks. Simple landing pages can be done in about a week.',
  },
  {
    question: 'What do you need to get started?',
    answer: 'An idea of what you want and any content you have ready. I can help with planning.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: '50% deposit to begin, 50% on completion. Larger projects can be split into milestones.',
  },
  {
    question: 'Can I update the site myself?',
    answer: 'Yes, I can set up a CMS for easy editing without touching code.',
  },
  {
    question: 'What about hosting?',
    answer: 'I help set that up. Hosting runs $5-20/month, domains are $15-20/year.',
  },
  {
    question: 'Do you do maintenance?',
    answer: 'Packages start at $49/month for updates, security, and support.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="text-sm text-coffee-500 dark:text-coffee-500 mb-3">FAQ</p>
          <h2 className="text-3xl font-display font-semibold text-coffee-900 dark:text-cream-100">
            Questions
          </h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-coffee-200/60 dark:border-coffee-800/60 first:border-t"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-5 flex items-center justify-between text-left group"
              >
                <span className="text-coffee-800 dark:text-cream-200 pr-8 group-hover:text-coffee-600 dark:group-hover:text-cream-100 transition-colors">
                  {faq.question}
                </span>
                <span className="text-coffee-400 dark:text-coffee-600 text-xl flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-40 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-coffee-600 dark:text-coffee-400 pr-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
