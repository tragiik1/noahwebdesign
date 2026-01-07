'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

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
        headers: {
          'Accept': 'application/json'
        }
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
    <section id="contact" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-50 dark:bg-stone-900/50">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-6 tracking-wide uppercase">
          Contact
        </p>
        
        <h2 className="text-3xl sm:text-4xl font-display mb-4 text-stone-900 dark:text-stone-100">
          Get in touch
        </h2>
        
        <p className="text-lg text-stone-600 dark:text-stone-400 mb-12">
          Have a project in mind? Send me a message and I&apos;ll get back to you within 24 hours.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-stone-700 dark:text-stone-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-400 dark:focus:border-stone-600"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm text-stone-700 dark:text-stone-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-400 dark:focus:border-stone-600"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm text-stone-700 dark:text-stone-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-400 dark:focus:border-stone-600 resize-none"
              />
            </div>
            
            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full px-6 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-sm font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors disabled:opacity-50"
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            
            {formStatus === 'sent' && (
              <p className="text-sm text-green-600 dark:text-green-400">
                Message sent. I&apos;ll be in touch soon.
              </p>
            )}
            
            {formStatus === 'error' && (
              <p className="text-sm text-red-600 dark:text-red-400">
                Something went wrong. Try emailing directly.
              </p>
            )}
          </form>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-stone-400 mt-0.5" />
              <div>
                <p className="text-sm text-stone-500 dark:text-stone-500 mb-1">Email</p>
                <a 
                  href="mailto:hello@noahvarlet.com" 
                  className="text-stone-900 dark:text-stone-100 hover:underline"
                >
                  hello@noahvarlet.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-stone-400 mt-0.5" />
              <div>
                <p className="text-sm text-stone-500 dark:text-stone-500 mb-1">Phone</p>
                <a 
                  href="tel:+61412345678" 
                  className="text-stone-900 dark:text-stone-100 hover:underline"
                >
                  0412 345 678
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-stone-400 mt-0.5" />
              <div>
                <p className="text-sm text-stone-500 dark:text-stone-500 mb-1">Location</p>
                <p className="text-stone-900 dark:text-stone-100">
                  Sunshine Coast, QLD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
