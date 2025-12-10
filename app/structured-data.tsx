import { siteConfig } from './metadata'

export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Noah',
    jobTitle: 'Web Developer',
    description: 'Freelance web developer specializing in modern, affordable website development',
    url: 'https://noahwebdesign.com', // Update with your actual domain
    image: 'https://noahwebdesign.com/og-image.jpg', // Update with your actual image
    sameAs: [
      'https://github.com/yourusername', // Update
      'https://instagram.com/yourusername', // Update
      'https://linkedin.com/in/yourusername', // Update
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sunshine Coast',
      addressRegion: 'Queensland',
      addressCountry: 'AU',
    },
    knowsAbout: [
      'Web Development',
      'Next.js',
      'React',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'Website Design',
      'UI/UX Design',
    ],
    offers: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Web Development Services',
        description: 'Professional website development and design services',
        provider: {
          '@type': 'Person',
          name: 'Noah',
        },
      },
      priceRange: '$499-$2499',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Noah Web Developer',
    url: 'https://noahwebdesign.com', // Update with your actual domain
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://noahwebdesign.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://noahwebdesign.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://noahwebdesign.com#about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contact',
        item: 'https://noahwebdesign.com#contact',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Privacy Policy',
        item: 'https://noahwebdesign.com/privacy',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Terms of Service',
        item: 'https://noahwebdesign.com/terms',
      },
    ],
  }

  // ItemList schema to help Google understand important pages for sitelinks
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Main Site Pages',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        url: 'https://noahwebdesign.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        url: 'https://noahwebdesign.com#about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contact',
        url: 'https://noahwebdesign.com#contact',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Privacy Policy',
        url: 'https://noahwebdesign.com/privacy',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Terms of Service',
        url: 'https://noahwebdesign.com/terms',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  )
}

