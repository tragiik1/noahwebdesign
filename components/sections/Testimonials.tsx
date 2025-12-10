'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Cafe Owner',
    company: 'Coastal Brew',
    content: 'Noah built us an amazing website that perfectly captures our brand. The booking system he integrated has increased our reservations by 40%. Highly professional and affordable!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mike Thompson',
    role: 'Tradie',
    company: 'Thompson Plumbing',
    content: 'As a tradie, I needed a simple, professional site. Noah delivered exactly that and more. My phone hasn\'t stopped ringing since the site went live. Great value for money!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Creative Director',
    company: 'Personal Brand',
    content: 'Noah created a stunning portfolio website for me. The animations and design are beautiful, and it loads incredibly fast. Couldn\'t be happier with the result!',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Startup Founder',
    company: 'Tech Startup',
    content: 'We needed a landing page fast, and Noah delivered a high-converting design in record time. The attention to detail and modern design exceeded our expectations.',
    rating: 5,
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
    }, 5000)
    return () => clearInterval(timer)
  }, [shouldReduceMotion])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don&apos;t just take my word for it! Here&apos;s what some awesome people I&apos;ve worked with have to say.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl min-h-[320px] md:min-h-[360px] flex flex-col"
            >
              <Quote className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-6" aria-hidden="true" />
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic flex-grow">
                &quot;{testimonials[currentIndex].content}&quot;
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                  </p>
                  <div className="flex mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 focus:bg-primary-600 focus:text-white dark:focus:bg-primary-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" aria-hidden="true" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 ${
                    index === currentIndex
                      ? 'bg-primary-600 w-8'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 focus:bg-primary-600 focus:text-white dark:focus:bg-primary-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

