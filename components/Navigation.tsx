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
      initial={{ y: shouldReduceMotion ? 0 : -80 }}
      animate={{ y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-sm shadow-gray-200/50 dark:shadow-gray-900/50 border-b border-gray-200/50 dark:border-gray-800/50'
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              href="/#home" 
              onClick={(e) => handleNavClick(e, '/#home')} 
              className="text-2xl font-display font-bold relative group" 
              aria-label="Noah - Home"
            >
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-500 bg-clip-text text-transparent">
                Noah
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-400 group-hover:w-full transition-all duration-300"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = isHomePage && activeSection === link.id
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'text-primary-600 dark:text-primary-400' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary-50 dark:bg-primary-950/50 rounded-lg border border-primary-100 dark:border-primary-900/50"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={mounted ? toggleTheme : undefined}
              className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-amber-500" aria-hidden="true" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" aria-hidden="true" />
                )}
              </motion.div>
            </button>
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={mounted ? toggleTheme : undefined}
              className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-500" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" aria-hidden="true" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </motion.div>
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
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.2 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-800/50"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => {
                const isActive = isHomePage && activeSection === link.id
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        setIsMobileMenuOpen(false)
                        handleNavClick(e, link.href)
                      }}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isActive 
                          ? 'bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2"
              >
                <Link
                  href="/#contact"
                  onClick={(e) => {
                    setIsMobileMenuOpen(false)
                    handleNavClick(e, '/#contact')
                  }}
                  className="block w-full text-center px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
                >
                  Get Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
