'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Local Cafe Website',
    description: 'Modern, responsive website for a local cafe with online menu and booking system.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Tailwind', 'Booking'],
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    id: 2,
    title: 'Tradie Business Site',
    description: 'Professional website for a local tradie with service showcase and contact forms.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    tags: ['React', 'UI/UX', 'SEO'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="portfolio" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-50 via-surface-100/50 to-surface-50 dark:from-[#0a1020] dark:via-[#0d1525] dark:to-[#0a1020]" />
      
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary-500/5 to-transparent dark:from-primary-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-600 dark:text-primary-400 font-medium text-sm tracking-wide uppercase mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            My Recent Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here&apos;s what I&apos;ve built so far! I&apos;m just getting started and would love to add your project to this list.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              transition={{
                delay: shouldReduceMotion ? 0 : index * 0.05,
                duration: shouldReduceMotion ? 0.01 : 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group"
            >
              <div className="relative bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-elevated hover:shadow-elevated-lg transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50">
                {/* Image container */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 mix-blend-multiply dark:mix-blend-soft-light z-10`} />
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent z-20" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary-600/90 dark:bg-primary-800/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold shadow-lg"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.15,
            duration: shouldReduceMotion ? 0.01 : 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 bg-white dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-elevated">
            <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Want to help me build my portfolio? 🚀
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              I&apos;d love to work on your project! Let&apos;s chat about what you need.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span>Let&apos;s Work Together</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
