'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()
  const shouldReduceMotion = useReducedMotion()
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle hash navigation when arriving from other pages
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const hash = window.location.hash.substring(1)
      const element = document.getElementById(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          setActiveSection(hash)
        }, 300)
      }
    }
  }, [isHomePage])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Improved active section detection using Intersection Observer with fallback
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('')
      return
    }

    const sections = ['home', 'about', 'portfolio', 'services', 'faq', 'contact']
    const observers: IntersectionObserver[] = []
    let timeoutId: NodeJS.Timeout

    const updateActiveSection = (sectionId: string) => {
      setActiveSection((prev) => {
        if (prev !== sectionId) {
          return sectionId
        }
        return prev
      })
    }

    const initObservers = () => {
      // Clean up existing observers
      observers.forEach((observer) => observer.disconnect())
      observers.length = 0

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId)
        if (section) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                clearTimeout(timeoutId)
                updateActiveSection(sectionId)
              }
            },
            {
              rootMargin: '-10% 0px -60% 0px',
              threshold: [0, 0.1, 0.5],
            }
          )
          observer.observe(section)
          observers.push(observer)
        }
      })
    }

    // Initial setup with delay to ensure DOM is ready
    timeoutId = setTimeout(() => {
      initObservers()
    }, 100)

    // Fallback: scroll-based detection with throttling
    let ticking = false
    const handleScrollFallback = () => {
      if (!isHomePage || ticking) return
      
      ticking = true
      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 200
        let currentSection = 'home'
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i])
          if (section) {
            const sectionTop = section.offsetTop
            if (scrollPosition >= sectionTop) {
              currentSection = sections[i]
              break
            }
          }
        }
        
        updateActiveSection(currentSection)
        ticking = false
      })
    }

    window.addEventListener('scroll', handleScrollFallback, { passive: true })

    return () => {
      clearTimeout(timeoutId)
      observers.forEach((observer) => observer.disconnect())
      window.removeEventListener('scroll', handleScrollFallback)
    }
  }, [isHomePage])

  const navLinks = [
    { name: 'Home', href: '/#home', id: 'home' },
    { name: 'About', href: '/#about', id: 'about' },
    { name: 'Portfolio', href: '/#portfolio', id: 'portfolio' },
    { name: 'Services', href: '/#services', id: 'services' },
    { name: 'FAQ', href: '/#faq', id: 'faq' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ]

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.split('#')[1]
    
    if (isHomePage && hash) {
      // On home page, just scroll to section
      e.preventDefault()
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // Update active section immediately
        setActiveSection(hash)
      }
    } else if (!isHomePage && hash) {
      // On other pages, navigate to home then scroll
      e.preventDefault()
      router.push('/')
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          setActiveSection(hash)
        }
      }, 100)
    }
    // If no hash, let default Link behavior handle it
  }, [isHomePage, router])

  return (
    <motion.nav
      initial={{ y: shouldReduceMotion ? 0 : -100 }}
      animate={{ y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/#home" onClick={(e) => handleNavClick(e, '/#home')} className="text-2xl font-bold relative group" aria-label="Noah - Home">
              <motion.span
                className="inline-block bg-gradient-to-r from-primary-600 via-blue-600 to-primary-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 100%',
                }}
              >
                Noah
              </motion.span>
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-400 group-hover:w-full"
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = isHomePage && activeSection === link.id
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium py-2"
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              )
            })}
            <button
              onClick={mounted ? toggleTheme : undefined}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:bg-gray-200 dark:focus:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:bg-primary-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={mounted ? toggleTheme : undefined}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:bg-gray-200 dark:focus:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:bg-gray-200 dark:focus:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => {
                const isActive = isHomePage && activeSection === link.id
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false)
                      handleNavClick(e, link.href)
                    }}
                    className={`block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium py-2 relative ${
                      isActive ? 'text-primary-600 dark:text-primary-400' : ''
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 to-primary-400 rounded-r-full"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                )
              })}
              <Link
                href="/#contact"
                onClick={(e) => {
                  setIsMobileMenuOpen(false)
                  handleNavClick(e, '/#contact')
                }}
                className="block w-full text-center px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:bg-primary-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

