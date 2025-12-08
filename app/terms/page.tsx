'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Agreement to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Welcome! By accessing or using this website and my services, you agree to be bound by these Terms of Service. If you don&apos;t agree with any part of these terms, please don&apos;t use my services.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These terms apply to all visitors, users, and clients who access or use my website and services. I reserve the right to update these terms at any time, and your continued use of the services constitutes acceptance of any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Services Provided</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I offer freelance web development and design services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Website design and development</li>
                <li>Website redesign and updates</li>
                <li>Landing page creation</li>
                <li>E-commerce setup</li>
                <li>Hosting guidance and support</li>
                <li>Website maintenance packages</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                All services are provided on a project-by-project basis, with specific terms, timelines, and pricing agreed upon before work begins.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Client Responsibilities</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To ensure a smooth project, clients agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Provide accurate and complete information about their project requirements</li>
                <li>Respond to requests for feedback, content, and approvals in a timely manner</li>
                <li>Provide necessary materials (logos, images, text content) as requested</li>
                <li>Make timely payments according to agreed payment terms</li>
                <li>Respect intellectual property rights and not use my work without proper authorization</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Payment Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Payment terms will be agreed upon before work begins. Generally:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>A deposit may be required to begin work (typically 50% of the total project cost)</li>
                <li>Final payment is due upon project completion and before final delivery</li>
                <li>Payment methods accepted: Bank transfer, PayPal, or other agreed-upon methods</li>
                <li>Late payments may result in project delays or suspension of services</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                All prices are in Australian Dollars (AUD) unless otherwise specified.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Project Timeline</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Project timelines are estimates and may vary based on:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Project complexity and scope</li>
                <li>Client responsiveness and feedback speed</li>
                <li>Third-party dependencies (hosting, domain setup, etc.)</li>
                <li>Unforeseen technical challenges</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I will communicate any timeline changes promptly and work to deliver projects within agreed timeframes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Revisions and Changes</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Each project includes a reasonable number of revisions as agreed upon in the project scope. Additional revisions beyond the agreed amount may incur additional fees.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Major changes to the project scope after work has begun may require a new quote and timeline adjustment.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Intellectual Property</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Upon full payment, clients receive ownership of the final website and its design, with the following exceptions:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>I retain the right to use the project in my portfolio and marketing materials</li>
                <li>Third-party assets (fonts, stock images, plugins) remain subject to their respective licenses</li>
                <li>I retain rights to any custom code, frameworks, or tools I develop that are not specific to your project</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Clients are responsible for ensuring they have rights to any content, images, or materials they provide for use in the project.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Cancellation and Refunds</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If a project is cancelled:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Work completed up to the cancellation date will be billed</li>
                <li>Deposits are non-refundable unless the cancellation is due to my inability to complete the work</li>
                <li>No refunds will be provided for completed work that has been delivered</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I reserve the right to cancel a project if payment is not received, if the client is unresponsive for extended periods, or if the project requirements become unreasonable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Warranty and Support</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I provide a warranty period (typically 30 days) after project completion to fix any bugs or issues that arise from my work. This warranty does not cover:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Changes made by the client or third parties</li>
                <li>Issues caused by hosting, server, or third-party service problems</li>
                <li>Browser compatibility issues with unsupported browsers</li>
                <li>Content updates or additions</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Ongoing support and maintenance are available through separate maintenance packages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>My liability is limited to the total amount paid for the specific project</li>
                <li>I am not liable for any indirect, incidental, or consequential damages</li>
                <li>I am not responsible for any loss of data, revenue, or business opportunities</li>
                <li>Clients are responsible for backing up their website and data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Third-Party Services</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Projects may involve third-party services (hosting, domains, payment processors, etc.). I am not responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>The availability, performance, or policies of third-party services</li>
                <li>Any fees, charges, or terms associated with third-party services</li>
                <li>Data loss or security breaches on third-party platforms</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Clients are responsible for reviewing and accepting terms of any third-party services used in their project.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Website Content</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Ensuring all content provided is accurate, legal, and does not infringe on any rights</li>
                <li>Obtaining necessary permissions for any copyrighted material</li>
                <li>Complying with all applicable laws and regulations</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I reserve the right to refuse to include content that is illegal, offensive, or violates these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Governing Law</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These Terms of Service are governed by the laws of Queensland, Australia. Any disputes will be resolved in the courts of Queensland, Australia.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Changes to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I reserve the right to modify these terms at any time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. Continued use of my services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact me:
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

