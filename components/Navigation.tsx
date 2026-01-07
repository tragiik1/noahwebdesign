'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { mode, setMode } = useTheme()
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'
  const themeMenuRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(e.target as Node)) {
        setIsThemeMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    { name: 'Work', href: '/#portfolio' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ]

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.split('#')[1]
    
    if (isHomePage && hash) {
      e.preventDefault()
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else if (!isHomePage && hash) {
      e.preventDefault()
      router.push('/')
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [isHomePage, router])

  const ThemeIcon = mode === 'system' ? Monitor : mode === 'dark' ? Moon : Sun

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/95 dark:bg-coffee-975/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-xl font-display font-semibold text-coffee-900 dark:text-cream-100"
          >
            Noah
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-coffee-600 dark:text-cream-300 hover:text-coffee-900 dark:hover:text-cream-100 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Theme Dropdown - Fixed width */}
            <div className="relative" ref={themeMenuRef}>
              <button
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="w-9 h-9 flex items-center justify-center text-coffee-600 dark:text-cream-300 hover:text-coffee-900 dark:hover:text-cream-100 transition-colors rounded hover:bg-coffee-100 dark:hover:bg-coffee-800"
                aria-label="Change theme"
              >
                {mounted && <ThemeIcon className="w-[18px] h-[18px]" />}
              </button>
              
              {isThemeMenuOpen && mounted && (
                <div className="absolute right-0 mt-2 w-36 bg-cream-50 dark:bg-coffee-900 rounded shadow-lg border border-coffee-200 dark:border-coffee-700 overflow-hidden py-1">
                  <button
                    onClick={() => { setMode('light'); setIsThemeMenuOpen(false) }}
                    className={`w-full px-4 py-2 text-left text-sm flex items-center gap-3 transition-colors ${
                      mode === 'light'
                        ? 'bg-coffee-100 dark:bg-coffee-800 text-coffee-900 dark:text-cream-100'
                        : 'text-coffee-600 dark:text-cream-400 hover:bg-coffee-50 dark:hover:bg-coffee-800/50'
                    }`}
                  >
                    <Sun className="w-4 h-4" />
                    Light
                  </button>
                  <button
                    onClick={() => { setMode('dark'); setIsThemeMenuOpen(false) }}
                    className={`w-full px-4 py-2 text-left text-sm flex items-center gap-3 transition-colors ${
                      mode === 'dark'
                        ? 'bg-coffee-100 dark:bg-coffee-800 text-coffee-900 dark:text-cream-100'
                        : 'text-coffee-600 dark:text-cream-400 hover:bg-coffee-50 dark:hover:bg-coffee-800/50'
                    }`}
                  >
                    <Moon className="w-4 h-4" />
                    Dark
                  </button>
                  <button
                    onClick={() => { setMode('system'); setIsThemeMenuOpen(false) }}
                    className={`w-full px-4 py-2 text-left text-sm flex items-center gap-3 transition-colors ${
                      mode === 'system'
                        ? 'bg-coffee-100 dark:bg-coffee-800 text-coffee-900 dark:text-cream-100'
                        : 'text-coffee-600 dark:text-cream-400 hover:bg-coffee-50 dark:hover:bg-coffee-800/50'
                    }`}
                  >
                    <Monitor className="w-4 h-4" />
                    System
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              className="w-9 h-9 flex items-center justify-center text-coffee-600 dark:text-cream-300"
              aria-label="Change theme"
            >
              {mounted && <ThemeIcon className="w-5 h-5" />}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-coffee-600 dark:text-cream-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Theme Menu */}
      {isThemeMenuOpen && mounted && (
        <div className="md:hidden absolute right-4 top-14 w-36 bg-cream-50 dark:bg-coffee-900 rounded shadow-lg border border-coffee-200 dark:border-coffee-700 overflow-hidden py-1 z-50">
          <button
            onClick={() => { setMode('light'); setIsThemeMenuOpen(false) }}
            className={`w-full px-4 py-2 text-left text-sm flex items-center gap-3 ${
              mode === 'light' ? 'bg-coffee-100 dark:bg-coffee-800' : ''
            } text-coffee-700 dark:text-cream-300`}
          >
            <Sun className="w-4 h-4" />
            Light
          </button>
          <button
            onClick={() => { setMode('dark'); setIsThemeMenuOpen(false) }}
            className={`w-full px-4 py-2 text-left text-sm flex items-center gap-3 ${
              mode === 'dark' ? 'bg-coffee-100 dark:bg-coffee-800' : ''
            } text-coffee-700 dark:text-cream-300`}
          >
            <Moon className="w-4 h-4" />
            Dark
          </button>
          <button
            onClick={() => { setMode('system'); setIsThemeMenuOpen(false) }}
            className={`w-full px-4 py-2 text-left text-sm flex items-center gap-3 ${
              mode === 'system' ? 'bg-coffee-100 dark:bg-coffee-800' : ''
            } text-coffee-700 dark:text-cream-300`}
          >
            <Monitor className="w-4 h-4" />
            System
          </button>
        </div>
      )}

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream-50 dark:bg-coffee-975 border-t border-coffee-200 dark:border-coffee-800">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setIsMobileMenuOpen(false)
                  handleNavClick(e, link.href)
                }}
                className="block py-3 text-coffee-700 dark:text-cream-200 hover:text-coffee-900 dark:hover:text-cream-100"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
