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
        className="px-5 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-sm font-medium shadow-lg hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
      >
        Get in touch
      </Link>
    </div>
  )
}
