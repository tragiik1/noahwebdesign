'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Clock, MapPin, Send, CheckCircle, XCircle, ArrowRight } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/mwpgnbna', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-50 via-surface-100/50 to-white dark:from-[#0a1020] dark:via-[#0d1525] dark:to-[#070b14]" />
      
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary-500/10 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-600 dark:text-primary-400 font-medium text-sm tracking-wide uppercase mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Got a project in mind? I&apos;m always happy to help or just chat through ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -15 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: shouldReduceMotion ? 0 : -15 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 0.05,
              duration: shouldReduceMotion ? 0.01 : 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-gray-800/30 rounded-2xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-elevated">
              <form onSubmit={handleSubmit} className="space-y-5">
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 rounded-xl flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-green-800 dark:text-green-200 text-sm">
                        Awesome! Your message is on its way. I&apos;ll get back to you super soon!
                      </p>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-xl flex items-start gap-3"
                    >
                      <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-red-800 dark:text-red-200 text-sm">
                        Oops! Something went wrong. Try again or email me directly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 bg-surface-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 bg-surface-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-surface-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none resize-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
                  className="w-full px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-4 h-4" aria-hidden="true" />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 15 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: shouldReduceMotion ? 0 : 15 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 0.1,
              duration: shouldReduceMotion ? 0.01 : 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-display font-bold mb-2 text-gray-900 dark:text-white">
                Quick Response
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                I usually respond within a few hours. No pressure, just friendly conversation.
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="mailto:hello@noahwebdesign.com"
                className="group flex items-start gap-4 p-4 bg-white dark:bg-gray-800/30 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-200 dark:hover:border-primary-800/50 transition-all duration-200"
              >
                <div className="p-2.5 bg-primary-50 dark:bg-primary-900/30 rounded-lg group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
                  <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">Email</h4>
                  <p className="text-primary-600 dark:text-primary-400 text-sm">hello@noahwebdesign.com</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all mt-1" />
              </a>

              <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800/30 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                <div className="p-2.5 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                  <Clock className="w-5 h-5 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">Hours</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Mon–Fri: 9am–6pm<br />
                    Sat: 10am–4pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800/30 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                <div className="p-2.5 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Sunshine Coast, Australia</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
