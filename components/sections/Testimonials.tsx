'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Cafe Owner',
    company: 'Coastal Brew',
    content: 'Noah built us an amazing website that perfectly captures our brand. The booking system he integrated has increased our reservations by 40%. Highly professional and affordable!',
    avatar: 'S',
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 2,
    name: 'Mike Thompson',
    role: 'Tradie',
    company: 'Thompson Plumbing',
    content: 'As a tradie, I needed a simple, professional site. Noah delivered exactly that and more. My phone hasn\'t stopped ringing since the site went live. Great value for money!',
    avatar: 'M',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Creative Director',
    company: 'Personal Brand',
    content: 'Noah created a stunning portfolio website for me. The animations and design are beautiful, and it loads incredibly fast. Couldn\'t be happier with the result!',
    avatar: 'E',
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Startup Founder',
    company: 'Tech Startup',
    content: 'We needed a landing page fast, and Noah delivered a high-converting design in record time. The attention to detail and modern design exceeded our expectations.',
    avatar: 'J',
    color: 'from-green-400 to-emerald-500',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Pause auto-rotation if user prefers reduced motion
    if (shouldReduceMotion) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [shouldReduceMotion])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-50 via-surface-100/50 to-surface-50 dark:from-[#0a1020] dark:via-[#0d1525] dark:to-[#0a1020]" />
      
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-primary-500/5 to-transparent dark:from-primary-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary-600 dark:text-primary-400 font-medium text-sm tracking-wide uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don&apos;t just take my word for it!
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 md:p-12 shadow-elevated border border-gray-200/50 dark:border-gray-700/50"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-primary-200 dark:text-primary-800" aria-hidden="true" />
              </div>
              
              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed font-medium">
                &quot;{testimonials[currentIndex].content}&quot;
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[currentIndex].color} flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" aria-hidden="true" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-primary-600 dark:bg-primary-500'
                      : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
