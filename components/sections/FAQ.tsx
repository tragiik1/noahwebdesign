'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How long does a website take?',
    answer: 'Most projects take 2-4 weeks from start to finish. Simple landing pages can be done in about a week, while larger sites with custom features take longer.',
  },
  {
    question: 'What do you need to get started?',
    answer: 'An idea of what you want and any content you have ready (text, images, logo). I can help with content planning if needed.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes. Typically 50% deposit to begin, 50% on completion. For larger projects, we can split it into more milestones.',
  },
  {
    question: 'Can I update the site myself?',
    answer: 'Yes, I can set up a content management system that lets you edit text and images without touching code.',
  },
  {
    question: 'What about hosting and domain?',
    answer: 'I help set that up. Hosting typically runs $5-20/month depending on your needs. Domain registration is around $15-20/year.',
  },
  {
    question: 'Do you do ongoing maintenance?',
    answer: 'Yes, maintenance packages start at $49/month covering updates, security patches, backups, and minor changes.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-display font-semibold text-coffee-900 dark:text-cream-100 mb-12">
          Frequently asked questions
        </h2>

        <div className="divide-y divide-coffee-200 dark:divide-coffee-800">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-coffee-900 dark:text-cream-100 font-medium pr-8">
                  {faq.question}
                </span>
                <span className="text-xl text-coffee-400 dark:text-coffee-500 flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-coffee-600 dark:text-cream-400 pr-12">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
