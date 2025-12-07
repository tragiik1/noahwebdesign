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
    color: 'from-pink-500 to-purple-500',
    hoverColor: 'hover:from-pink-600 hover:to-purple-600',
  },
  {
    icon: MessageCircle,
    name: 'TikTok',
    href: '#',
    color: 'from-gray-900 to-gray-700',
    hoverColor: 'hover:from-gray-800 hover:to-gray-600',
  },
  {
    icon: Github,
    name: 'GitHub',
    href: '#',
    color: 'from-gray-800 to-gray-600',
    hoverColor: 'hover:from-gray-700 hover:to-gray-500',
  },
  {
    icon: Mail,
    name: 'Email',
    href: 'mailto:hello@noahwebdesign.com',
    color: 'from-primary-500 to-blue-500',
    hoverColor: 'hover:from-primary-600 hover:to-blue-600',
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: '#',
    color: 'from-blue-600 to-blue-800',
    hoverColor: 'hover:from-blue-700 hover:to-blue-900',
  },
]

export default function Socials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Follow my work, check out my code, or reach out directly. I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`relative group px-8 py-6 bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-xl text-white shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 min-w-[200px]`}
              >
                <Icon className="w-6 h-6" />
                <span className="font-semibold">{social.name}</span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

