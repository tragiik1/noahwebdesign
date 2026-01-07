'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Palette, Zap, Search, ArrowRight, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  const skills = [
    { icon: Code, name: 'Clean Code', desc: 'HTML, CSS, JavaScript' },
    { icon: Zap, name: 'Modern Stack', desc: 'React & Next.js' },
    { icon: Palette, name: 'Beautiful Design', desc: 'UI/UX Focus' },
    { icon: Search, name: 'Visibility', desc: 'SEO Optimised' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-surface-50/50 to-white dark:from-[#070b14] dark:via-[#0a1020] dark:to-[#070b14]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Section */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="relative bg-white dark:bg-gray-800/80 rounded-2xl p-8 shadow-elevated-lg border border-gray-200/50 dark:border-gray-700/50">
              <div className="aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-6xl font-display font-bold text-white shadow-glow mb-6">
                    N
                  </div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Sunshine Coast, AU
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <motion.span 
              variants={itemVariants}
              className="inline-block text-primary-600 dark:text-primary-400 font-medium text-sm tracking-wide uppercase mb-4"
            >
              About Me
            </motion.span>
            
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white"
            >
              Building websites that{' '}
              <span className="text-primary-600 dark:text-primary-400">actually work</span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
            >
              Hey there! I&apos;m <span className="font-semibold text-gray-900 dark:text-white">Noah</span>, a 19-year-old web developer who genuinely loves helping people get their businesses online.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Whether you&apos;re a small business, tradie, local shop, or startup — I&apos;m here to help! I keep things simple, affordable, and walk you through everything. No tech jargon, just honest help.
            </motion.p>

            {/* Skills Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : 0.1 + index * 0.03,
                      duration: shouldReduceMotion ? 0.01 : 0.25,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="group p-4 bg-surface-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700/50 hover:border-primary-200 dark:hover:border-primary-800/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg group-hover:bg-primary-500 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">{skill.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{skill.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* How I Work Link */}
            <motion.div variants={itemVariants}>
              <Link
                href="/how-i-work"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-sm"
              >
                <span>See How I Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
