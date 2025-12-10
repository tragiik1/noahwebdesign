'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Layout, RefreshCw, ShoppingCart, Server, Wrench } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Full Website Design + Build',
    description: 'Complete website solutions from concept to launch. Custom designs tailored to your brand.',
  },
  {
    icon: Layout,
    title: 'Landing Pages',
    description: 'High-converting single-page websites perfect for campaigns, products, or services.',
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    description: 'Modernize your existing website with fresh designs and improved functionality.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Setup',
    description: 'Online stores with product catalogues, shopping carts, and secure payment integration.',
  },
  {
    icon: Server,
    title: 'Hosting Guidance',
    description: 'Help choosing the right hosting solution and getting your site live quickly.',
  },
  {
    icon: Wrench,
    title: 'Maintenance Packages',
    description: 'Ongoing support, updates, and maintenance to keep your website running smoothly.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="services" ref={ref} className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Here&apos;s what I can help you with! I&apos;m flexible and happy to work with whatever you need. Let&apos;s chat about what would work best for you.
          </p>
          
          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 0.2,
              duration: shouldReduceMotion ? 0.01 : 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6 py-4 bg-primary-50 dark:bg-primary-900/20 border-2 border-primary-200 dark:border-primary-800 rounded-xl"
          >
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Simple Websites</p>
              <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">$499–$1199</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-primary-200 dark:bg-primary-800"></div>
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Polished Sites</p>
              <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">$1199–$2499</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.05,
                  duration: shouldReduceMotion ? 0.01 : 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-700 focus-within:bg-white dark:focus-within:bg-gray-700 transition-colors duration-200 shadow-lg hover:shadow-2xl focus-within:shadow-2xl border border-gray-200 dark:border-gray-700 will-change-transform focus-within:ring-2 focus-within:ring-primary-400 focus-within:ring-offset-2"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 group-focus-within:bg-primary-600 transition-all duration-200 will-change-transform">
                  <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400 group-hover:text-white group-focus-within:text-white transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

