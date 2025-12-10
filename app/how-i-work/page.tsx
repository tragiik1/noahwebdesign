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
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <Link
              href="/#about"
              className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 rounded px-2"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to About</span>
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              How I Work
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A simple, transparent process that gets you from idea to launch. No surprises, just clear steps and honest communication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section ref={ref} className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600 dark:from-primary-900 dark:via-primary-700 dark:to-primary-500 transform -translate-x-1/2" />

            {/* Process Steps */}
            <div className="space-y-24 lg:space-y-32">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                const isEven = index % 2 === 0

                return (
                  <ProcessStep
                    key={step.id}
                    step={step}
                    index={index}
                    isEven={isEven}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s chat about your project! I&apos;m here to answer any questions and help you figure out what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 focus:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/#portfolio"
                className="px-8 py-4 bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-400 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:bg-primary-50 dark:focus:bg-primary-900/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
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
  isEven,
  shouldReduceMotion,
}: {
  step: typeof processSteps[0]
  index: number
  isEven: boolean
  shouldReduceMotion: boolean
}) {
  const stepRef = useRef(null)
  const stepInView = useInView(stepRef, { once: true, margin: '-20px' })
  const Icon = step.icon

  return (
    <motion.div
      ref={stepRef}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
      animate={stepInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
      transition={{
        delay: shouldReduceMotion ? 0 : index * 0.2,
        duration: shouldReduceMotion ? 0.01 : 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative flex flex-col lg:flex-row items-center gap-8 ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Step Number Circle */}
      <div className="relative z-10 flex-shrink-0">
        <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}>
          <Icon className="w-12 h-12 text-white" aria-hidden="true" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
          {step.id}
        </div>
      </div>

      {/* Content Card */}
      <div className={`flex-1 ${isEven ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {step.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {step.description}
          </p>
          <ul className={`space-y-3 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
            {step.details.map((detail, detailIndex) => (
              <motion.li
                key={detailIndex}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : (isEven ? 20 : -20) }}
                animate={stepInView ? { opacity: 1, x: 0 } : { opacity: 0, x: shouldReduceMotion ? 0 : (isEven ? 20 : -20) }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.2 + detailIndex * 0.1,
                  duration: shouldReduceMotion ? 0.01 : 0.4,
                }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-700 dark:text-gray-300">{detail}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

