'use client'

import { Github, Linkedin, Twitter } from 'lucide-react'

const socials = [
  { name: 'GitHub', href: 'https://github.com/noahvarlet', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/noahvarlet', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/noahvarlet', icon: Twitter },
]

export default function Socials() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-coffee-200/50 dark:border-coffee-800/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <p className="text-sm text-coffee-500 dark:text-coffee-600">
          Find me online
        </p>

        <div className="flex gap-1">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-coffee-400 dark:text-coffee-600 hover:text-coffee-700 dark:hover:text-coffee-300 hover:bg-coffee-100/50 dark:hover:bg-coffee-900/50 rounded-lg transition-all"
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
