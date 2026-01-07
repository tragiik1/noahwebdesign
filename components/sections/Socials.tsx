'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Instagram, Github, Mail, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react'

const socialLinks = [
  {
    icon: Instagram,
    name: 'Instagram',
    href: '#',
    color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500',
  },
  {
    icon: MessageCircle,
    name: 'TikTok',
    href: '#',
    color: 'hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900',
  },
  {
    icon: Github,
    name: 'GitHub',
    href: '#',
    color: 'hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900',
  },
  {
    icon: Mail,
    name: 'Email',
    href: 'mailto:hello@noahwebdesign.com',
    color: 'hover:bg-primary-600',
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: '#',
    color: 'hover:bg-blue-600',
  },
]

export default function Socials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-surface-50 dark:from-[#070b14] dark:to-[#0a1020]" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 text-gray-900 dark:text-white">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Follow along or reach out — I&apos;m always up for connecting!
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.03,
                  duration: shouldReduceMotion ? 0.01 : 0.25,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                className={`group flex items-center gap-3 px-5 py-3 bg-white dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 rounded-xl text-gray-700 dark:text-gray-300 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md ${social.color}`}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
                <span className="font-medium text-sm">{social.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
