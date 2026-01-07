'use client'

import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/" 
          className="text-coffee-500 dark:text-coffee-400 hover:text-coffee-700 dark:hover:text-coffee-300 mb-8 inline-block"
        >
          ← Back
        </Link>

        <h1 className="text-3xl sm:text-4xl font-display font-semibold text-coffee-900 dark:text-cream-100 mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-coffee-500 dark:text-coffee-400 mb-12">
          Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="space-y-8">
          <Section title="Agreement">
            <p>
              By using this website and my services, you agree to these terms. If you don&apos;t agree, please don&apos;t use my services.
            </p>
          </Section>

          <Section title="Services">
            <p>I offer web development services including website design and development, redesigns, landing pages, e-commerce setup, hosting guidance, and maintenance.</p>
            <p>Terms, timelines, and pricing are agreed before work begins.</p>
          </Section>

          <Section title="Payment">
            <p>Payment terms are agreed before starting. Generally: 50% deposit to begin, 50% on completion. All prices are in AUD.</p>
          </Section>

          <Section title="Timeline">
            <p>
              Project timelines are estimates. They can vary based on complexity, feedback speed, and third-party dependencies.
            </p>
          </Section>

          <Section title="Revisions">
            <p>
              Each project includes a reasonable number of revisions as agreed. Additional revisions may incur extra fees.
            </p>
          </Section>

          <Section title="Ownership">
            <p>After full payment, you own the final website. I keep the right to use the project in my portfolio and retain non-project-specific code.</p>
          </Section>

          <Section title="Warranty">
            <p>
              I provide a 30-day warranty after completion to fix bugs from my work. This doesn&apos;t cover changes made by others, hosting issues, or content updates.
            </p>
          </Section>

          <Section title="Governing Law">
            <p>These terms are governed by the laws of Queensland, Australia.</p>
          </Section>

          <Section title="Contact">
            <p>
              Email: <a href="mailto:hello@noahvarlet.com" className="text-coffee-600 dark:text-coffee-400 hover:underline">hello@noahvarlet.com</a>
            </p>
            <p>Location: Sunshine Coast, Australia</p>
          </Section>
        </div>
      </div>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="pb-8 border-b border-coffee-200 dark:border-coffee-800 last:border-0">
      <h2 className="text-xl font-display font-medium text-coffee-900 dark:text-cream-100 mb-4">{title}</h2>
      <div className="text-coffee-600 dark:text-cream-400 space-y-3 leading-relaxed">
        {children}
      </div>
    </section>
  )
}
