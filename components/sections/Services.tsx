'use client'

const services = [
  {
    title: 'Website Design & Build',
    description: 'Complete websites from concept to launch, tailored to your needs.',
    price: 'From $499',
  },
  {
    title: 'Landing Pages',
    description: 'Single-page sites for campaigns, products, or services.',
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
    description: 'Ongoing updates, security patches, and support.',
    price: 'From $49/mo',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-6 tracking-wide uppercase">
          Services
        </p>
        
        <h2 className="text-3xl sm:text-4xl font-display mb-4 text-stone-900 dark:text-stone-100">
          What I offer
        </h2>
        
        <p className="text-lg text-stone-600 dark:text-stone-400 mb-12 max-w-2xl">
          Flexible packages tailored to what you actually need.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 dark:bg-stone-800 border border-stone-200 dark:border-stone-800">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="p-6 bg-white dark:bg-stone-950"
            >
              <h3 className="font-display text-lg mb-2 text-stone-900 dark:text-stone-100">
                {service.title}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 mb-4">
                {service.description}
              </p>
              <p className="text-sm font-medium text-stone-900 dark:text-stone-100">
                {service.price}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-stone-500 dark:text-stone-500">
          All prices in AUD. Final quote depends on project scope.
        </p>
      </div>
    </section>
  )
}
