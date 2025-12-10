'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import Link from 'next/link'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Show button after scrolling down 300px
    const handleScroll = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
    // Remember dismissal for this session
    sessionStorage.setItem('ctaDismissed', 'true')
  }

  useEffect(() => {
    // Check if dismissed in this session
    if (sessionStorage.getItem('ctaDismissed') === 'true') {
      setIsDismissed(true)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 100 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 will-change-transform"
        >
          <div className="relative">
            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 dark:bg-gray-200 rounded-full flex items-center justify-center text-white dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-300 focus:bg-gray-700 dark:focus:bg-gray-300 transition-colors shadow-lg z-10 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
              aria-label="Dismiss"
            >
              <X className="w-3 h-3" aria-hidden="true" />
            </button>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="group flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-3 sm:py-4 bg-primary-600 hover:bg-primary-700 focus:bg-primary-700 text-white rounded-full shadow-2xl hover:shadow-primary-500/50 focus:shadow-primary-500/50 transition-all duration-300 font-semibold text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="hidden sm:inline">Get a Free Quote</span>
              <span className="sm:hidden">Get Quote</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

