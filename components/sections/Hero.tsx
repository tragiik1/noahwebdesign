'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles, Star } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.35,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section id="home" aria-label="Hero section" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-50 via-white to-primary-50/30 dark:from-[#070b14] dark:via-[#0a1020] dark:to-[#0d1525]" />
      
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary ambient orb */}
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 111, 196, 0.15) 0%, transparent 70%)',
          }}
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Secondary ambient orb */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 111, 196, 0.12) 0%, transparent 70%)',
          }}
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Accent orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(217, 70, 239, 0.05) 0%, transparent 60%)',
          }}
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 111, 196, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 111, 196, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-950/50 border border-primary-200/50 dark:border-primary-800/50 text-primary-700 dark:text-primary-300 text-sm font-medium shadow-sm"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
          >
            <motion.div
              animate={shouldReduceMotion ? {} : { rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <span>Freelance Web Developer</span>
            <span className="flex items-center gap-1 text-xs text-primary-500 dark:text-primary-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available
            </span>
          </motion.div>
        </motion.div>

        {/* Main headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.1] tracking-tight"
        >
          <span className="block text-gray-900 dark:text-white mb-2">
            Professional Websites
          </span>
          <span className="block bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 dark:from-primary-400 dark:via-primary-300 dark:to-primary-500 bg-clip-text text-transparent pb-2">
            for Your Business
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Hey! I&apos;m <span className="font-semibold text-gray-900 dark:text-white">Noah</span>. I build clean, fast websites that actually work — and I keep it affordable because I know what it&apos;s like starting out.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="#portfolio"
              className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30"
            >
              <span>View My Work</span>
              <motion.div
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </motion.div>
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800/80 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 rounded-xl font-semibold text-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get a Free Quote
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span>5-star reviews</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
          <span>Fast turnaround</span>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
          <span>Sunshine Coast, AU</span>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#070b14] to-transparent pointer-events-none" />
    </section>
  )
}
