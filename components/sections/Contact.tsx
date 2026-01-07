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
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="text-sm text-coffee-500 dark:text-coffee-400 mb-3">Contact</p>
            <h2 className="text-3xl font-display font-semibold text-coffee-900 dark:text-cream-100 mb-6">
              Get in touch
            </h2>
            
            <p className="text-coffee-600 dark:text-cream-400 mb-8">
              Send a message and I&apos;ll get back to you within 24 hours.
            </p>
            
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-coffee-500 dark:text-coffee-500 mb-1">Email</p>
                <a href="mailto:hello@noahvarlet.com" className="text-coffee-900 dark:text-cream-100 hover:text-coffee-600 dark:hover:text-coffee-400 transition-colors">
                  hello@noahvarlet.com
                </a>
              </div>
              <div>
                <p className="text-coffee-500 dark:text-coffee-500 mb-1">Phone</p>
                <a href="tel:+61490523663" className="text-coffee-900 dark:text-cream-100 hover:text-coffee-600 dark:hover:text-coffee-400 transition-colors">
                  0490 523 663
                </a>
              </div>
              <div>
                <p className="text-coffee-500 dark:text-coffee-500 mb-1">Location</p>
                <p className="text-coffee-900 dark:text-cream-100">Sunshine Coast, QLD</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-coffee-200 dark:border-coffee-800 text-coffee-900 dark:text-cream-100 rounded placeholder:text-coffee-400 dark:placeholder:text-coffee-600 focus:outline-none focus:border-coffee-400 dark:focus:border-coffee-600 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-coffee-200 dark:border-coffee-800 text-coffee-900 dark:text-cream-100 rounded placeholder:text-coffee-400 dark:placeholder:text-coffee-600 focus:outline-none focus:border-coffee-400 dark:focus:border-coffee-600 transition-colors"
                />
              </div>
              
              <textarea
                name="message"
                placeholder="Tell me about your project"
                rows={6}
                required
                className="w-full px-4 py-3 bg-transparent border border-coffee-200 dark:border-coffee-800 text-coffee-900 dark:text-cream-100 rounded placeholder:text-coffee-400 dark:placeholder:text-coffee-600 focus:outline-none focus:border-coffee-400 dark:focus:border-coffee-600 transition-colors resize-none"
              />
              
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="px-6 py-3 bg-coffee-900 dark:bg-cream-100 hover:bg-coffee-800 dark:hover:bg-cream-200 text-cream-50 dark:text-coffee-900 text-sm font-medium rounded transition-colors disabled:opacity-50"
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send message'}
                </button>
                
                {formStatus === 'sent' && (
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Sent. I&apos;ll be in touch.
                  </p>
                )}
                
                {formStatus === 'error' && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    Error. Try emailing directly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
