'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'How long does a website take?',
    answer: 'Most projects take 2-4 weeks from start to finish, depending on complexity. A simple landing page might be done in a week, while a full site with custom features takes longer.',
  },
  {
    question: 'What do you need from me to get started?',
    answer: 'Usually just an idea of what you want and any content you have ready (text, images, logo). I can help with content planning if needed.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes. Typically 50% upfront and 50% on completion. For larger projects, we can split it into more milestones.',
  },
  {
    question: 'Will I be able to update the site myself?',
    answer: 'If you want to, yes. I can set up a content management system that lets you edit text and images without touching code.',
  },
  {
    question: 'What about hosting and domain?',
    answer: 'I can help you set that up. Hosting usually runs $5-20/month depending on your needs. Domain registration is around $15-20/year.',
  },
  {
    question: 'Do you do ongoing maintenance?',
    answer: 'Yes, I offer maintenance packages starting at $49/month. This covers updates, security, backups, and minor changes.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-6 tracking-wide uppercase">
          FAQ
        </p>
        
        <h2 className="text-3xl sm:text-4xl font-display mb-12 text-stone-900 dark:text-stone-100">
          Common questions
        </h2>

        <div className="divide-y divide-stone-200 dark:divide-stone-800 border-t border-b border-stone-200 dark:border-stone-800">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-5 flex items-center justify-between text-left"
              >
                <span className="text-stone-900 dark:text-stone-100 pr-8">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-4 h-4 text-stone-400 flex-shrink-0" />
                ) : (
                  <Plus className="w-4 h-4 text-stone-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-5 pr-8">
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
