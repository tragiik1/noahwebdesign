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
    quote: 'Professional, easy to work with. The site brought in new enquiries within the first week.',
  },
  {
    name: 'Emma Chen',
    business: 'Sunshine Physio',
    quote: 'He explained everything clearly and delivered exactly what we discussed.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm text-coffee-500 dark:text-coffee-400 mb-3">Testimonials</p>
          <h2 className="text-3xl font-display font-semibold text-coffee-900 dark:text-cream-100">
            What clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <blockquote key={index} className="flex flex-col">
              <p className="text-coffee-700 dark:text-cream-300 leading-relaxed flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 pt-6 border-t border-coffee-200 dark:border-coffee-800">
                <p className="font-medium text-coffee-900 dark:text-cream-100">
                  {testimonial.name}
                </p>
                <p className="text-sm text-coffee-500 dark:text-coffee-500">
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
