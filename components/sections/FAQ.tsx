'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'How long does it take to build a website?',
    answer: 'It depends on the project! Simple websites can take anywhere from 3-7 days, while more polished sites with extra features typically take 10-21 days. I\'ll give you a specific timeline when we chat about your project.',
  },
  {
    id: 2,
    question: 'Do you provide hosting?',
    answer: 'I can help you set up hosting! I\'ll guide you through choosing the right hosting provider and getting everything connected. I don\'t host sites myself, but I make sure you\'re set up with something reliable and affordable.',
  },
  {
    id: 3,
    question: 'Will my website work on mobile phones?',
    answer: 'Absolutely! All websites I build are fully responsive, meaning they look great and work perfectly on phones, tablets, and computers. Mobile-friendly design is built in from the start.',
  },
  {
    id: 4,
    question: 'Can you help me update my website later?',
    answer: 'Yes! I offer maintenance packages to keep your site updated, secure, and running smoothly. You can also reach out anytime for updates or changes - I\'m here to help!',
  },
  {
    id: 5,
    question: 'What if I need changes after the website is done?',
    answer: 'No problem at all! I\'m happy to make adjustments and updates. Small tweaks are usually quick, and bigger changes we can discuss. I want you to be happy with your site!',
  },
  {
    id: 6,
    question: 'Do you work with businesses outside of Sunshine Coast?',
    answer: 'Yes! I work with clients anywhere. While I\'m based on the Sunshine Coast, I can work with businesses all over Australia (and beyond). Video calls make it easy to work together no matter where you are.',
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openId, setOpenId] = useState<number | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" ref={ref} className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Got questions? I&apos;ve got answers! Here are some common things people ask me.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              transition={{
                delay: shouldReduceMotion ? 0 : index * 0.05,
                duration: shouldReduceMotion ? 0.01 : 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-primary-400 focus-within:ring-offset-2"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 focus:bg-gray-50 dark:focus:bg-gray-800 transition-colors duration-200 focus:outline-none"
                aria-expanded={openId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openId === faq.id ? 'transform rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0.01 : 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

