'use client'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    business: 'Coastal Cafe',
    quote: 'Noah built our website quickly and it looks great. We get compliments from customers all the time.',
  },
  {
    name: 'James Patterson',
    business: 'Patterson Plumbing',
    quote: 'Professional, easy to work with, and the site brought in new enquiries within the first week.',
  },
  {
    name: 'Emma Chen',
    business: 'Sunshine Physiotherapy',
    quote: 'He explained everything clearly and delivered exactly what we discussed. Highly recommend.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-50 dark:bg-stone-900/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-6 tracking-wide uppercase">
          Testimonials
        </p>
        
        <h2 className="text-3xl sm:text-4xl font-display mb-12 text-stone-900 dark:text-stone-100">
          What clients say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <blockquote key={index} className="flex flex-col">
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6 flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer>
                <p className="text-stone-900 dark:text-stone-100 font-medium">
                  {testimonial.name}
                </p>
                <p className="text-sm text-stone-500 dark:text-stone-500">
                  {testimonial.business}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
