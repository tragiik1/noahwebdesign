'use client'

import { Github, Linkedin, Twitter } from 'lucide-react'

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/noahvarlet',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/noahvarlet',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/noahvarlet',
    icon: Twitter,
  },
]

export default function Socials() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-6 tracking-wide uppercase">
          Connect
        </p>
        
        <h2 className="text-3xl sm:text-4xl font-display mb-8 text-stone-900 dark:text-stone-100">
          Find me elsewhere
        </h2>

        <div className="flex justify-center gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              aria-label={social.name}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
