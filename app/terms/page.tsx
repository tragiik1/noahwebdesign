'use client'

import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/" 
          className="text-sm text-stone-500 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 mb-8 inline-block"
        >
          ← Back
        </Link>

        <h1 className="text-3xl sm:text-4xl font-display mb-2 text-stone-900 dark:text-stone-100">
          Terms of Service
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-500 mb-12">
          Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="space-y-10">
          <Section title="Agreement">
            <p>
              By using this website and my services, you agree to these terms. If you don&apos;t agree, please don&apos;t use my services.
            </p>
          </Section>

          <Section title="Services">
            <p>I offer web development services including:</p>
            <ul>
              <li>Website design and development</li>
              <li>Website redesigns</li>
              <li>Landing pages</li>
              <li>E-commerce setup</li>
              <li>Hosting guidance</li>
              <li>Maintenance</li>
            </ul>
            <p>Terms, timelines, and pricing are agreed before work begins.</p>
          </Section>

          <Section title="Payment">
            <p>Payment terms are agreed before starting. Generally:</p>
            <ul>
              <li>50% deposit to begin</li>
              <li>50% on completion</li>
              <li>Bank transfer or PayPal</li>
            </ul>
            <p>All prices are in AUD.</p>
          </Section>

          <Section title="Timeline">
            <p>
              Project timelines are estimates. They can vary based on complexity, feedback speed, and third-party dependencies. I&apos;ll communicate any changes.
            </p>
          </Section>

          <Section title="Revisions">
            <p>
              Each project includes a reasonable number of revisions as agreed. Additional revisions may incur extra fees. Major scope changes may require a new quote.
            </p>
          </Section>

          <Section title="Ownership">
            <p>After full payment, you own the final website. I keep the right to:</p>
            <ul>
              <li>Use the project in my portfolio</li>
              <li>Retain non-project-specific code and tools</li>
            </ul>
            <p>Third-party assets remain subject to their licenses.</p>
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
              Email: <a href="mailto:hello@noahvarlet.com" className="underline underline-offset-4 hover:no-underline">hello@noahvarlet.com</a>
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
    <section className="pb-10 border-b border-stone-200 dark:border-stone-800 last:border-0">
      <h2 className="text-xl font-display mb-4 text-stone-900 dark:text-stone-100">{title}</h2>
      <div className="text-stone-600 dark:text-stone-400 space-y-3 leading-relaxed [&>ul]:space-y-2 [&>ul]:pl-5 [&>ul]:list-disc">
        {children}
      </div>
    </section>
  )
}
