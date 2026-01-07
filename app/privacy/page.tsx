'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#070b14]">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-50 via-white to-white dark:from-[#0a1020] dark:via-[#070b14] dark:to-[#070b14]" />
        
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-xl">
                <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white">
                  Privacy Policy
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="prose prose-gray dark:prose-invert max-w-none"
          >
            <div className="space-y-10">
              <Section title="Introduction">
                <p>
                  Hey there! I&apos;m Noah, and I take your privacy seriously. This Privacy Policy explains how I collect, use, and protect your personal information when you visit my website or use my services.
                </p>
                <p>
                  By using this website, you agree to the collection and use of information in accordance with this policy. If you have any questions, feel free to reach out to me at{' '}
                  <a href="mailto:hello@noahwebdesign.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                    hello@noahwebdesign.com
                  </a>.
                </p>
              </Section>

              <Section title="Information I Collect">
                <h3>Contact Form Information</h3>
                <p>When you fill out the contact form on this website, I collect:</p>
                <ul>
                  <li>Your name</li>
                  <li>Your email address</li>
                  <li>Your message content</li>
                </ul>
                <p>
                  This information is processed through Formspree, a third-party service that handles form submissions securely.
                </p>

                <h3>Automatically Collected Information</h3>
                <p>Like most websites, this site may automatically collect certain information, including:</p>
                <ul>
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                </ul>
              </Section>

              <Section title="How I Use Your Information">
                <p>I use the information I collect to:</p>
                <ul>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Communicate with you about projects and services</li>
                  <li>Improve my website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p>
                  I do not sell, trade, or rent your personal information to third parties.
                </p>
              </Section>

              <Section title="Browser Storage">
                <p>This website uses browser storage (localStorage and sessionStorage) to enhance your experience:</p>
                <ul>
                  <li><strong>Theme Preference:</strong> Your dark/light mode preference is saved so it persists across visits</li>
                  <li><strong>UI Preferences:</strong> Some interface preferences are stored for your current session</li>
                </ul>
                <p>
                  This data is stored locally on your device and is not sent to any servers. Note: This website does not use cookies.
                </p>
              </Section>

              <Section title="Your Rights">
                <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                <ul>
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to request deletion of your information</li>
                  <li>The right to object to processing of your information</li>
                </ul>
                <p>
                  To exercise these rights, please contact me at{' '}
                  <a href="mailto:hello@noahwebdesign.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                    hello@noahwebdesign.com
                  </a>.
                </p>
              </Section>

              <Section title="Contact Me">
                <div className="bg-surface-50 dark:bg-gray-800/30 rounded-xl p-6 not-prose border border-gray-200/50 dark:border-gray-700/50">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong className="text-gray-900 dark:text-white">Email:</strong>{' '}
                    <a href="mailto:hello@noahwebdesign.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                      hello@noahwebdesign.com
                    </a>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">Location:</strong> Sunshine Coast, Australia
                  </p>
                </div>
              </Section>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
      <div className="text-gray-600 dark:text-gray-300 space-y-4 [&>p]:leading-relaxed [&>ul]:space-y-2 [&>ul]:pl-5 [&>ul]:list-disc [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-gray-900 [&>h3]:dark:text-white [&>h3]:mt-6 [&>h3]:mb-3">
        {children}
      </div>
    </section>
  )
}
