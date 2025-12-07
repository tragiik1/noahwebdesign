'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Instagram, Github, Mail, Linkedin, MessageCircle } from 'lucide-react'

const socialLinks = [
  {
    icon: Instagram,
    name: 'Instagram',
    href: '#',
  },
  {
    icon: MessageCircle,
    name: 'TikTok',
    href: '#',
  },
  {
    icon: Github,
    name: 'GitHub',
    href: '#',
  },
  {
    icon: Mail,
    name: 'Email',
    href: 'mailto:hello@noahwebdesign.com',
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: '#',
  },
]

export default function Socials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Come say hi! Follow along with what I&apos;m working on, check out my code, or just reach out if you want to chat. I&apos;m always up for connecting!
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -2 }}
                className="group px-6 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-500 dark:hover:border-primary-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium text-sm">{social.name}</span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

