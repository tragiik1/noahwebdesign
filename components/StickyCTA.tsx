'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Link
        href="#contact"
        className="group flex items-center gap-2 pl-5 pr-4 py-3 bg-coffee-900 dark:bg-cream-100 text-cream-50 dark:text-coffee-900 text-sm font-medium rounded-full shadow-xl shadow-coffee-900/20 dark:shadow-black/20 hover:shadow-2xl hover:shadow-coffee-900/30 dark:hover:shadow-black/30 hover:scale-[1.02] transition-all"
      >
        Get in touch
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </div>
  )
}
