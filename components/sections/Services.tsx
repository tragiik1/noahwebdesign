'use client'

const services = [
  {
    title: 'Website Design & Build',
    description: 'Complete websites from concept to launch, tailored to your business needs.',
    price: 'From $499',
  },
  {
    title: 'Landing Pages',
    description: 'Single-page sites for campaigns, products, or lead generation.',
    price: 'From $299',
  },
  {
    title: 'Website Redesign',
    description: 'Modernize your existing site with improved design and performance.',
    price: 'From $399',
  },
  {
    title: 'E-commerce',
    description: 'Online stores with product management and payment integration.',
    price: 'From $799',
  },
  {
    title: 'Hosting Setup',
    description: 'Help choosing and setting up the right hosting for your site.',
    price: 'Included',
  },
  {
    title: 'Maintenance',
    description: 'Ongoing updates, security patches, backups, and support.',
    price: 'From $49/mo',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-coffee-50 dark:bg-coffee-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-coffee-900 dark:text-cream-100 mb-4">
            Services & Pricing
          </h2>
          <p className="text-lg text-coffee-600 dark:text-cream-400">
            Flexible packages tailored to what you actually need. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-coffee-200 dark:bg-coffee-800 rounded overflow-hidden">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="p-6 bg-cream-50 dark:bg-coffee-950 hover:bg-cream-100 dark:hover:bg-coffee-900 transition-colors"
            >
              <h3 className="text-lg font-display font-medium text-coffee-900 dark:text-cream-100 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-coffee-600 dark:text-cream-400 mb-4">
                {service.description}
              </p>
              <p className="text-lg font-medium text-coffee-800 dark:text-cream-200">
                {service.price}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-coffee-500 dark:text-coffee-400">
          All prices in AUD. Final quote depends on project scope and requirements.
        </p>
      </div>
    </section>
  )
}
