'use client'

import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Local Cafe Website',
    description: 'Website for a local cafe with menu and online booking.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Booking System'],
  },
  {
    id: 2,
    title: 'Tradie Business Site',
    description: 'Professional site for a plumbing business with contact forms.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    tags: ['React', 'SEO'],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-50 dark:bg-stone-900/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-6 tracking-wide uppercase">
          Work
        </p>
        
        <h2 className="text-3xl sm:text-4xl font-display mb-4 text-stone-900 dark:text-stone-100">
          Recent projects
        </h2>
        
        <p className="text-lg text-stone-600 dark:text-stone-400 mb-12 max-w-2xl">
          A few projects I&apos;ve worked on recently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article key={project.id} className="group">
              <div className="relative aspect-[4/3] mb-4 overflow-hidden bg-stone-200 dark:bg-stone-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-lg font-display mb-2 text-stone-900 dark:text-stone-100">
                {project.title}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 mb-3">
                {project.description}
              </p>
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-stone-500 dark:text-stone-500">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 p-8 border border-stone-200 dark:border-stone-800">
          <p className="text-lg font-display mb-2 text-stone-900 dark:text-stone-100">
            Want to be next?
          </p>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            I&apos;m taking on new projects. Get in touch to discuss yours.
          </p>
          <a
            href="#contact"
            className="text-sm text-stone-900 dark:text-stone-100 underline underline-offset-4 hover:no-underline"
          >
            Start a project →
          </a>
        </div>
      </div>
    </section>
  )
}
