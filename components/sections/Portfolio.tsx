'use client'

import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Coastal Cafe',
    category: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Patterson Plumbing',
    category: 'Trade Services',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-coffee-900 dark:text-cream-100">
            Recent projects
          </h2>
          <p className="text-coffee-600 dark:text-cream-400">
            Recent projects for local businesses
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded bg-coffee-100 dark:bg-coffee-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-display font-medium text-coffee-900 dark:text-cream-100">
                    {project.title}
                  </h3>
                  <p className="text-coffee-500 dark:text-coffee-400 text-sm mt-1">
                    {project.category}
                  </p>
                </div>
                <span className="text-coffee-400 dark:text-coffee-500 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center p-8 bg-coffee-100 dark:bg-coffee-900 rounded">
          <p className="text-xl font-display font-medium text-coffee-900 dark:text-cream-100 mb-2">
            Want to work together?
          </p>
          <p className="text-coffee-600 dark:text-cream-400 mb-6">
            I&apos;m currently taking on new projects.
          </p>
          <a
            href="#contact"
            className="inline-flex px-6 py-3 bg-coffee-900 dark:bg-cream-100 hover:bg-coffee-800 dark:hover:bg-cream-200 text-cream-50 dark:text-coffee-900 font-medium rounded transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
