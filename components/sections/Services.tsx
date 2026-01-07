'use client'

const services = [
  {
    title: 'Website Design & Build',
    description: 'Complete websites from concept to launch.',
    price: 'From $499',
  },
  {
    title: 'Landing Pages',
    description: 'Single-page sites for campaigns or products.',
    price: 'From $299',
  },
  {
    title: 'Website Redesign',
    description: 'Modernize your existing site.',
    price: 'From $399',
  },
  {
    title: 'E-commerce',
    description: 'Online stores with payment integration.',
    price: 'From $799',
  },
  {
    title: 'Hosting Setup',
    description: 'Domain and hosting configuration.',
    price: 'Included',
  },
  {
    title: 'Maintenance',
    description: 'Updates, backups, and support.',
    price: 'From $49/mo',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-coffee-50/50 dark:bg-coffee-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm text-coffee-500 dark:text-coffee-400 mb-3">Services</p>
          <h2 className="text-3xl font-display font-semibold text-coffee-900 dark:text-cream-100 mb-4">
            What I offer
          </h2>
          <p className="text-coffee-600 dark:text-cream-400 max-w-lg">
            Straightforward packages. No hidden fees or surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="p-6 bg-white dark:bg-coffee-900/50 border border-coffee-200 dark:border-coffee-800 rounded hover:border-coffee-300 dark:hover:border-coffee-700 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-medium text-coffee-900 dark:text-cream-100">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-coffee-600 dark:text-cream-400 mb-6">
                {service.description}
              </p>
              <p className="text-sm font-medium text-coffee-900 dark:text-cream-100">
                {service.price}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-coffee-500 dark:text-coffee-500">
          All prices in AUD. Final quote based on requirements.
        </p>
      </div>
    </section>
  )
}
