'use client'

import { motion } from 'framer-motion'
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
    description: 'Online stores with product catalogs, shopping carts, and secure payment integration.',
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

  return (
    <section id="services" ref={ref} className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive web solutions tailored to your business needs. Affordable, professional, and delivered on time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" />
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

