'use client'

import Link from 'next/link'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { Instagram, Github, Mail, Linkedin, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const shouldReduceMotion = useReducedMotion()

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hello@noahwebdesign.com', label: 'Email' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <footer ref={ref} className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-4">
              Noah
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Friendly web developer helping businesses get online. Clean websites that work, without the crazy prices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Quick Links</h4>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-2"
            >
              {quickLinks.map((link, index) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 focus:text-primary-600 dark:focus:text-primary-400 text-sm transition-colors duration-200 will-change-transform focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 rounded px-1"
                  >
                    <motion.span
                      className="inline-block"
                      whileHover={shouldReduceMotion ? {} : { x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.span>
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transform -translate-x-2 group-hover:translate-x-0 group-focus:translate-x-0 transition-all duration-200" aria-hidden="true" />
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                    className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 focus:bg-primary-600 focus:text-white dark:focus:bg-primary-600 transition-all duration-300 will-change-transform focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400"
        >
          <p>&copy; {currentYear} Noah. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-primary-600 dark:hover:text-primary-400 focus:text-primary-600 dark:focus:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 rounded px-1"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-400" aria-hidden="true">•</span>
            <Link
              href="/terms"
              className="hover:text-primary-600 dark:hover:text-primary-400 focus:text-primary-600 dark:focus:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 rounded px-1"
            >
              Terms of Service
            </Link>
          </div>
          <p className="mt-2">Sunshine Coast, Australia</p>
        </motion.div>
      </div>
    </footer>
  )
}

