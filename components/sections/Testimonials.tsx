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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-coffee-900 dark:bg-coffee-975">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-display font-semibold text-cream-100 mb-12">
          What clients say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <blockquote key={index} className="border-l-2 border-coffee-700 pl-6">
              <p className="text-cream-200 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer>
                <p className="text-cream-100 font-medium">
                  {testimonial.name}
                </p>
                <p className="text-cream-400 text-sm">
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
