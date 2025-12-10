'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Palette, Zap, Search } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  const skills = [
    { icon: Code, name: 'HTML, CSS, JavaScript' },
    { icon: Zap, name: 'React & Next.js' },
    { icon: Palette, name: 'UI/UX Design' },
    { icon: Search, name: 'SEO Basics' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section id="about" ref={ref} className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-500 rounded-2xl transform rotate-6 will-change-transform"
                animate={shouldReduceMotion ? {} : { rotate: [6, 8, 6] }}
                transition={
                  shouldReduceMotion
                    ? {}
                    : { duration: 6, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }
                }
              />
              <div className="relative bg-gray-200 dark:bg-gray-800 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary-400 to-blue-500 rounded-full flex items-center justify-center text-6xl font-bold text-white mb-4">
                    N
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Photo Placeholder</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              About Me
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
            >
              Hey there! I&apos;m <span className="font-semibold text-primary-600 dark:text-primary-400">Noah</span>, a 19-year-old web developer from Sunshine Coast, Australia who&apos;s genuinely passionate about helping people get online.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Whether you&apos;re a small business, tradie, local shop, startup, or just need a personal website - I&apos;m here to help! I know how overwhelming it can be, so I keep things simple, affordable, and I&apos;ll walk you through everything. No tech jargon, just honest help.
            </motion.p>

            {/* Skills Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : 0.2 + index * 0.05,
                      duration: shouldReduceMotion ? 0.01 : 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus-within:bg-gray-100 dark:focus-within:bg-gray-700 transition-colors group focus-within:ring-2 focus-within:ring-primary-400 focus-within:ring-offset-2"
                  >
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

