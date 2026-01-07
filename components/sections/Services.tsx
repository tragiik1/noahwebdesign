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
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#f5f2ed] dark:bg-[#100c09]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm text-coffee-500 dark:text-coffee-500 mb-3">Services</p>
          <h2 className="text-3xl font-display font-semibold text-coffee-900 dark:text-cream-100 mb-4">
            What I offer
          </h2>
          <p className="text-coffee-600 dark:text-coffee-400 max-w-lg">
            Straightforward packages. No hidden fees or surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="group p-6 bg-white/70 dark:bg-coffee-900/40 rounded-xl border border-coffee-200/40 dark:border-coffee-800/40 hover:border-coffee-300 dark:hover:border-coffee-700 hover:bg-white dark:hover:bg-coffee-900/60 transition-all"
            >
              <h3 className="font-display font-medium text-coffee-900 dark:text-cream-100 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-coffee-600 dark:text-coffee-400 mb-5">
                {service.description}
              </p>
              <p className="text-sm font-medium text-coffee-800 dark:text-cream-200">
                {service.price}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-coffee-500 dark:text-coffee-600">
          All prices in AUD. Final quote based on requirements.
        </p>
      </div>
    </section>
  )
}
