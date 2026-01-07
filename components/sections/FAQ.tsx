'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

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
    <section id="faq" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-surface-50/30 to-white dark:from-[#070b14] dark:via-[#0a1020] dark:to-[#070b14]" />
      
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary-600 dark:text-primary-400 font-medium text-sm tracking-wide uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            Got Questions?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here are some common things people ask me.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              transition={{
                delay: shouldReduceMotion ? 0 : index * 0.03,
                duration: shouldReduceMotion ? 0.01 : 0.25,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group"
            >
              <div className={`bg-white dark:bg-gray-800/30 rounded-xl border transition-all duration-300 ${
                openId === faq.id 
                  ? 'border-primary-200 dark:border-primary-800/50 shadow-elevated' 
                  : 'border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600'
              }`}>
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                  aria-expanded={openId === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openId === faq.id 
                      ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400' 
                      : 'bg-gray-100 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400'
                  }`}>
                    {openId === faq.id ? (
                      <Minus className="w-4 h-4" aria-hidden="true" />
                    ) : (
                      <Plus className="w-4 h-4" aria-hidden="true" />
                    )}
                  </div>
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
                      <div className="px-6 pb-5 pt-0">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
