'use client'

import { useState } from 'react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://formspree.io/f/xanwggwr', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      
      if (response.ok) {
        setFormStatus('sent')
        form.reset()
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-coffee-50 dark:bg-coffee-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-coffee-900 dark:text-cream-100 mb-4">
              Let&apos;s work together
            </h2>
            <p className="text-lg text-coffee-600 dark:text-cream-400 mb-8">
              Have a project in mind? Send me a message and I&apos;ll get back to you within 24 hours.
            </p>
            
            <div className="space-y-3">
              <p className="text-coffee-700 dark:text-cream-300">
                <span className="text-coffee-500 dark:text-coffee-400">Email: </span>
                <a href="mailto:hello@noahvarlet.com" className="hover:text-coffee-900 dark:hover:text-cream-100 transition-colors">
                  hello@noahvarlet.com
                </a>
              </p>
              <p className="text-coffee-700 dark:text-cream-300">
                <span className="text-coffee-500 dark:text-coffee-400">Phone: </span>
                <a href="tel:+61490523663" className="hover:text-coffee-900 dark:hover:text-cream-100 transition-colors">
                  0490 523 663
                </a>
              </p>
              <p className="text-coffee-700 dark:text-cream-300">
                <span className="text-coffee-500 dark:text-coffee-400">Location: </span>
                Sunshine Coast, QLD
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 bg-cream-100 dark:bg-coffee-900 border-0 text-coffee-900 dark:text-cream-100 rounded placeholder:text-coffee-400 dark:placeholder:text-coffee-500 focus:outline-none focus:ring-2 focus:ring-coffee-500"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 bg-cream-100 dark:bg-coffee-900 border-0 text-coffee-900 dark:text-cream-100 rounded placeholder:text-coffee-400 dark:placeholder:text-coffee-500 focus:outline-none focus:ring-2 focus:ring-coffee-500"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Tell me about your project"
                rows={5}
                required
                className="w-full px-4 py-3 bg-cream-100 dark:bg-coffee-900 border-0 text-coffee-900 dark:text-cream-100 rounded placeholder:text-coffee-400 dark:placeholder:text-coffee-500 focus:outline-none focus:ring-2 focus:ring-coffee-500 resize-none"
              />
            </div>
            
            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full px-6 py-3 bg-coffee-900 dark:bg-cream-100 hover:bg-coffee-800 dark:hover:bg-cream-200 text-cream-50 dark:text-coffee-900 font-medium rounded transition-colors disabled:opacity-50"
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            
            {formStatus === 'sent' && (
              <p className="text-green-600 dark:text-green-400 text-sm">
                Message sent. I&apos;ll be in touch soon.
              </p>
            )}
            
            {formStatus === 'error' && (
              <p className="text-red-600 dark:text-red-400 text-sm">
                Something went wrong. Try emailing directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
