'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Layout, RefreshCw, ShoppingCart, Server, Wrench, Check } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Full Website Build',
    description: 'Complete website from concept to launch. Custom designs tailored to your brand.',
    features: ['Custom design', 'Mobile responsive', 'SEO ready'],
  },
  {
    icon: Layout,
    title: 'Landing Pages',
    description: 'High-converting single-page websites perfect for campaigns or products.',
    features: ['Fast delivery', 'Conversion focused', 'A/B ready'],
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    description: 'Modernize your existing website with fresh designs and improved functionality.',
    features: ['Modern look', 'Better UX', 'Performance boost'],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Setup',
    description: 'Online stores with product catalogues and secure payment integration.',
    features: ['Product management', 'Secure checkout', 'Inventory tracking'],
  },
  {
    icon: Server,
    title: 'Hosting Guidance',
    description: 'Help choosing the right hosting and getting your site live quickly.',
    features: ['Best options', 'Setup help', 'DNS config'],
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Ongoing support, updates, and maintenance to keep your site running smoothly.',
    features: ['Regular updates', 'Security patches', 'Priority support'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="services" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-surface-50/30 to-white dark:from-[#070b14] dark:via-[#0a1020] dark:to-[#070b14]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-600 dark:text-primary-400 font-medium text-sm tracking-wide uppercase mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            What I Can Do For You
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            I&apos;m flexible and happy to work with whatever you need. Let&apos;s chat about what would work best for you.
          </p>
          
          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 0.08,
              duration: shouldReduceMotion ? 0.01 : 0.25,
            }}
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 px-8 py-6 bg-white dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-elevated"
          >
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Simple Websites</p>
              <p className="text-2xl font-display font-bold text-gray-900 dark:text-white">$499–$1,199</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200 dark:bg-gray-700" />
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Polished Sites</p>
              <p className="text-2xl font-display font-bold text-gray-900 dark:text-white">$1,199–$2,499</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.03,
                  duration: shouldReduceMotion ? 0.01 : 0.25,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group"
              >
                <div className="h-full p-6 bg-white dark:bg-gray-800/30 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-200 dark:hover:border-primary-800/50 transition-all duration-300 hover:shadow-elevated">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-display font-bold mb-2 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Check className="w-4 h-4 text-primary-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
