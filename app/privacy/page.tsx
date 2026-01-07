'use client'

import Link from 'next/link'

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-500 mb-12">
          Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="space-y-10">
          <Section title="Introduction">
            <p>
              I&apos;m Noah, and I take your privacy seriously. This policy explains how I collect, use, and protect your information when you use my website or services.
            </p>
            <p>
              Questions? Email me at{' '}
              <a href="mailto:hello@noahvarlet.com" className="underline underline-offset-4 hover:no-underline">
                hello@noahvarlet.com
              </a>.
            </p>
          </Section>

          <Section title="Information I Collect">
            <p>When you use the contact form, I collect your name, email, and message. This is processed through Formspree.</p>
            <p>The site may also collect standard data like IP address, browser type, and pages visited.</p>
          </Section>

          <Section title="How I Use Your Information">
            <p>I use your information to:</p>
            <ul>
              <li>Respond to inquiries</li>
              <li>Communicate about projects</li>
              <li>Improve the website</li>
            </ul>
            <p>I don&apos;t sell or share your information with third parties.</p>
          </Section>

          <Section title="Browser Storage">
            <p>
              This site saves your theme preference (light/dark mode) in your browser&apos;s local storage. This data stays on your device. The site doesn&apos;t use cookies.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>
              You can request access to, correction of, or deletion of your personal information. Contact me at{' '}
              <a href="mailto:hello@noahvarlet.com" className="underline underline-offset-4 hover:no-underline">
                hello@noahvarlet.com
              </a>.
            </p>
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
