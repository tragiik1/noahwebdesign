'use client'

import Link from 'next/link'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { Instagram, Github, Mail, Linkedin, ArrowUpRight, Heart } from 'lucide-react'

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

  return (
    <footer ref={ref} className="relative bg-surface-50 dark:bg-[#070b14] border-t border-gray-200/50 dark:border-gray-800/50">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/[0.02] to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-5"
          >
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-500 bg-clip-text text-transparent">
                Noah
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Friendly web developer helping businesses get online. Clean websites that work, without the crazy prices.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{
                      delay: 0.1 + index * 0.03,
                      duration: 0.2,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    whileHover={shouldReduceMotion ? {} : { y: -2 }}
                    className="p-2.5 rounded-lg bg-white dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-900/20 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.25,
              delay: shouldReduceMotion ? 0 : 0.05,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="md:col-span-3"
          >
            <h4 className="font-display font-semibold text-gray-900 dark:text-white mb-4 text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.25,
              delay: shouldReduceMotion ? 0 : 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="md:col-span-2"
          >
            <h4 className="font-display font-semibold text-gray-900 dark:text-white mb-4 text-sm">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.25,
              delay: shouldReduceMotion ? 0 : 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="md:col-span-2"
          >
            <h4 className="font-display font-semibold text-gray-900 dark:text-white mb-4 text-sm">
              Location
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Sunshine Coast<br />
              Australia 🇦🇺
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.25, delay: 0.15 }}
          className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-800/50"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              &copy; {currentYear} Noah. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> on the Sunshine Coast
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
