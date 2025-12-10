'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useMemo } from 'react'

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
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

  // Generate random particles
  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }))
  }, [])

  return (
    <section id="home" aria-label="Hero section" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Blobs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-300 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 dark:opacity-20"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                  scale: [1, 1.2, 1],
                }
          }
          transition={{
            duration: shouldReduceMotion ? 0 : 20,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 dark:opacity-20"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -80, 0],
                  y: [0, 80, 0],
                  scale: [1, 1.3, 1],
                }
          }
          transition={{
            duration: shouldReduceMotion ? 0 : 25,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 dark:opacity-20"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 60, 0],
                  y: [0, -60, 0],
                  scale: [1, 1.1, 1],
                }
          }
          transition={{
            duration: shouldReduceMotion ? 0 : 30,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Particle Effects */}
        {!shouldReduceMotion &&
          particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-primary-500/60 dark:bg-primary-500/30"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: 'easeInOut',
              }}
            />
          ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 15 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Freelance Web Developer</span>
          </motion.div>
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <motion.span variants={itemVariants} className="block text-gray-900 dark:text-white">
            Professional Websites
          </motion.span>
          <motion.span variants={itemVariants} className="block bg-gradient-to-r from-primary-600 via-blue-600 to-primary-400 bg-clip-text text-transparent">
            for Your Business
          </motion.span>
        </h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Hey! I&apos;m <span className="font-semibold text-primary-600 dark:text-primary-400">Noah</span>. I love building clean, fast websites that actually work - and I keep it affordable because I know what it&apos;s like starting out.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4"
        >
          <motion.div
            whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="will-change-transform"
          >
            <Link
              href="#portfolio"
              className="group px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 focus:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 flex items-center space-x-2"
            >
              <span>View My Work</span>
              <motion.div
                animate={shouldReduceMotion ? {} : { x: [0, 4, 0] }}
                transition={
                  shouldReduceMotion
                    ? {}
                    : { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
                }
              >
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </motion.div>
            </Link>
          </motion.div>
          <motion.div
            whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="will-change-transform"
          >
            <Link
              href="#contact"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-400 rounded-lg font-semibold text-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:bg-primary-50 dark:focus:bg-primary-900/20 transition-colors duration-200 shadow-lg hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
            >
              Get a Free Quote
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

