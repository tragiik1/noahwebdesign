'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowLeft, Search, Palette, Code, Rocket, CheckCircle } from 'lucide-react'

const processSteps = [
  {
    id: 1,
    title: 'Discovery',
    icon: Search,
    description: 'We start with a conversation about your goals, target audience, and what you want to achieve. I\'ll ask questions to understand your business and create a plan that works for you.',
    details: [
      'Initial consultation call',
      'Understanding your business goals',
      'Defining target audience',
      'Project scope and timeline',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Design',
    icon: Palette,
    description: 'I\'ll create a design that reflects your brand and speaks to your audience. You\'ll see mockups and have the chance to give feedback before we move forward.',
    details: [
      'Brand identity review',
      'Wireframes and mockups',
      'Design revisions',
      'Final design approval',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Development',
    icon: Code,
    description: 'This is where your website comes to life! I\'ll build it using modern technologies, making sure it\'s fast, responsive, and works perfectly on all devices.',
    details: [
      'Clean, modern code',
      'Mobile-responsive design',
      'Performance optimisation',
      'Regular progress updates',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Launch',
    icon: Rocket,
    description: 'Time to go live! I\'ll help you get everything set up, test everything thoroughly, and make sure you\'re comfortable managing your new website.',
    details: [
      'Final testing and review',
      'Hosting setup assistance',
      'Launch and go live',
      'Training and documentation',
    ],
    color: 'from-orange-500 to-red-500',
  },
]

export default function HowIWorkPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <main className="min-h-screen bg-white dark:bg-[#070b14]">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-50 via-white to-white dark:from-[#0a1020] dark:via-[#070b14] dark:to-[#070b14]" />
        
        {/* Decorative gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-primary-500/10 to-transparent rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center"
          >
            <Link
              href="/#about"
              className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to About</span>
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-gray-900 dark:text-white">
              How I Work
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A simple, transparent process that gets you from idea to launch. No surprises, just clear steps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section ref={ref} className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.id}
                step={step}
                index={index}
                isInView={isInView}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-surface-50 to-white dark:from-[#070b14] dark:via-[#0a1020] dark:to-[#070b14]" />
        
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-white dark:bg-gray-800/30 rounded-2xl p-8 lg:p-12 border border-gray-200/50 dark:border-gray-700/50 shadow-elevated"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4 text-gray-900 dark:text-white">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
              Let&apos;s chat about your project! I&apos;m here to answer any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/#portfolio"
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 rounded-xl font-semibold transition-all duration-200"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function ProcessStep({
  step,
  index,
  isInView,
  shouldReduceMotion,
}: {
  step: typeof processSteps[0]
  index: number
  isInView: boolean
  shouldReduceMotion: boolean
}) {
  const stepRef = useRef(null)
  const stepInView = useInView(stepRef, { once: true, margin: '-50px' })
  const Icon = step.icon

  return (
    <motion.div
      ref={stepRef}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={stepInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      transition={{
        delay: shouldReduceMotion ? 0 : index * 0.05,
        duration: shouldReduceMotion ? 0.01 : 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="relative"
    >
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
        {/* Step number and icon */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
              <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" aria-hidden="true" />
            </div>
            <div className="absolute -top-2 -right-2 w-7 h-7 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-sm font-bold text-gray-900 dark:text-white border-2 border-gray-100 dark:border-gray-800 shadow-sm">
              {step.id}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-3 text-gray-900 dark:text-white">
            {step.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {step.description}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {step.details.map((detail, detailIndex) => (
              <motion.div
                key={detailIndex}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -5 }}
                animate={stepInView ? { opacity: 1, x: 0 } : { opacity: 0, x: shouldReduceMotion ? 0 : -5 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.1 + detailIndex * 0.03,
                  duration: shouldReduceMotion ? 0.01 : 0.2,
                }}
                className="flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{detail}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
