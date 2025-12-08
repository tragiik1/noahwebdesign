'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Hey there! I&apos;m Noah, and I take your privacy seriously. This Privacy Policy explains how I collect, use, and protect your personal information when you visit my website or use my services.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By using this website, you agree to the collection and use of information in accordance with this policy. If you have any questions, feel free to reach out to me at{' '}
                <a href="mailto:hello@noahwebdesign.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                  hello@noahwebdesign.com
                </a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Information I Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Contact Form Information</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                When you fill out the contact form on this website, I collect:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your message content</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This information is processed through Formspree, a third-party service that handles form submissions securely. I use this information solely to respond to your inquiries and provide my services.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-white">Automatically Collected Information</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Like most websites, this site may automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This information helps me understand how visitors use my website and improve the user experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">How I Use Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I use the information I collect to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Communicate with you about projects and services</li>
                <li>Improve my website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I do not sell, trade, or rent your personal information to third parties. Your information is kept confidential and used only for the purposes stated above.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Data Storage and Security</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Your contact form submissions are processed and stored by Formspree, which has its own privacy policy and security measures. I recommend reviewing their privacy policy at{' '}
                <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">
                  formspree.io/legal/privacy-policy
                </a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Cookies</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                This website may use cookies to enhance your browsing experience. Cookies are small text files stored on your device that help me remember your preferences and improve site functionality.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You can control cookies through your browser settings. However, disabling cookies may affect some functionality of this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Your Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to object to processing of your information</li>
                <li>The right to data portability</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To exercise these rights, please contact me at{' '}
                <a href="mailto:hello@noahwebdesign.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                  hello@noahwebdesign.com
                </a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Third-Party Services</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                This website uses the following third-party services:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Formspree:</strong> For processing contact form submissions</li>
                <li><strong>Vercel:</strong> For website hosting and analytics (if applicable)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These services have their own privacy policies, and I encourage you to review them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Children&apos;s Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This website is not intended for children under the age of 13. I do not knowingly collect personal information from children. If you believe I have collected information from a child, please contact me immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact Me</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or my data practices, please contact me:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:hello@noahwebdesign.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                    hello@noahwebdesign.com
                  </a>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Location:</strong> Sunshine Coast, Australia
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

