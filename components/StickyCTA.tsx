'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link
        href="#contact"
        className="px-5 py-3 bg-coffee-900 dark:bg-cream-100 hover:bg-coffee-800 dark:hover:bg-cream-200 text-cream-50 dark:text-coffee-900 font-medium shadow-lg rounded transition-colors"
      >
        Get in touch
      </Link>
    </div>
  )
}
