'use client'

import { Github, Linkedin, Twitter } from 'lucide-react'

const socials = [
  { name: 'GitHub', href: 'https://github.com/noahvarlet', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/noahvarlet', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/noahvarlet', icon: Twitter },
]

export default function Socials() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xl font-display font-medium text-coffee-900 dark:text-cream-100">
          Find me elsewhere
        </p>

        <div className="flex gap-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-coffee-100 dark:bg-coffee-900 text-coffee-600 dark:text-cream-400 hover:text-coffee-900 dark:hover:text-cream-100 rounded transition-colors"
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
