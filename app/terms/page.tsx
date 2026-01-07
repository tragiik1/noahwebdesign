'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'

export default function TermsPage() {
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
                <FileText className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white">
                  Terms of Service
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
              <Section title="Agreement to Terms">
                <p>
                  Welcome! By accessing or using this website and my services, you agree to be bound by these Terms of Service. If you don&apos;t agree with any part of these terms, please don&apos;t use my services.
                </p>
              </Section>

              <Section title="Services Provided">
                <p>I offer freelance web development and design services, including but not limited to:</p>
                <ul>
                  <li>Website design and development</li>
                  <li>Website redesign and updates</li>
                  <li>Landing page creation</li>
                  <li>E-commerce setup</li>
                  <li>Hosting guidance and support</li>
                  <li>Website maintenance packages</li>
                </ul>
                <p>
                  All services are provided on a project-by-project basis, with specific terms, timelines, and pricing agreed upon before work begins.
                </p>
              </Section>

              <Section title="Payment Terms">
                <p>Payment terms will be agreed upon before work begins. Generally:</p>
                <ul>
                  <li>A deposit may be required to begin work (typically 50% of the total project cost)</li>
                  <li>Final payment is due upon project completion and before final delivery</li>
                  <li>Payment methods accepted: Bank transfer, PayPal, or other agreed-upon methods</li>
                  <li>Late payments may result in project delays or suspension of services</li>
                </ul>
                <p>All prices are in Australian Dollars (AUD) unless otherwise specified.</p>
              </Section>

              <Section title="Project Timeline">
                <p>Project timelines are estimates and may vary based on:</p>
                <ul>
                  <li>Project complexity and scope</li>
                  <li>Client responsiveness and feedback speed</li>
                  <li>Third-party dependencies (hosting, domain setup, etc.)</li>
                  <li>Unforeseen technical challenges</li>
                </ul>
                <p>I will communicate any timeline changes promptly.</p>
              </Section>

              <Section title="Revisions and Changes">
                <p>
                  Each project includes a reasonable number of revisions as agreed upon in the project scope. Additional revisions beyond the agreed amount may incur additional fees.
                </p>
                <p>
                  Major changes to the project scope after work has begun may require a new quote and timeline adjustment.
                </p>
              </Section>

              <Section title="Intellectual Property">
                <p>Upon full payment, clients receive ownership of the final website and its design, with the following exceptions:</p>
                <ul>
                  <li>I retain the right to use the project in my portfolio and marketing materials</li>
                  <li>Third-party assets (fonts, stock images, plugins) remain subject to their respective licenses</li>
                  <li>I retain rights to any custom code or tools I develop that are not specific to your project</li>
                </ul>
              </Section>

              <Section title="Warranty and Support">
                <p>
                  I provide a warranty period (typically 30 days) after project completion to fix any bugs or issues that arise from my work. This warranty does not cover:
                </p>
                <ul>
                  <li>Changes made by the client or third parties</li>
                  <li>Issues caused by hosting, server, or third-party service problems</li>
                  <li>Browser compatibility issues with unsupported browsers</li>
                  <li>Content updates or additions</li>
                </ul>
                <p>Ongoing support and maintenance are available through separate maintenance packages.</p>
              </Section>

              <Section title="Governing Law">
                <p>
                  These Terms of Service are governed by the laws of Queensland, Australia.
                </p>
              </Section>

              <Section title="Contact Information">
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
      <div className="text-gray-600 dark:text-gray-300 space-y-4 [&>p]:leading-relaxed [&>ul]:space-y-2 [&>ul]:pl-5 [&>ul]:list-disc">
        {children}
      </div>
    </section>
  )
}
