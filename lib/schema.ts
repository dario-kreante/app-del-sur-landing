import { SITE_CONFIG, BUSINESS_HOURS, REGIONS, SERVICE_AREAS } from './constants';

// Organization + LocalBusiness JSON-LD
export const orgJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
      '@id': `${SITE_CONFIG.url}/#org`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      logo: `${SITE_CONFIG.url}/images/og/apps-del-sur-logo.png`,
      areaServed: REGIONS.map(region => ({
        '@type': 'State',
        name: region.name,
      })),
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: BUSINESS_HOURS.daysOfWeek,
        opens: BUSINESS_HOURS.opens,
        closes: BUSINESS_HOURS.closes,
      },
      sameAs: [`https://www.google.com/search?q=Apps+del+Sur+Talca`],
    },
    {
      '@type': 'Service',
      '@id': `${SITE_CONFIG.url}/#service`,
      serviceType: 'Desarrollo de software a medida',
      provider: { '@id': `${SITE_CONFIG.url}/#org` },
      areaServed: 'CL',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Consultoría y desarrollo',
        itemListElement: [
          { '@type': 'Offer', name: 'Discovery & Consultoría' },
          { '@type': 'Offer', name: 'Aplicaciones web y móviles' },
          { '@type': 'Offer', name: 'Integraciones y datos' },
          { '@type': 'Offer', name: 'Soporte y evolutivos' },
        ],
      },
    },
  ],
};

// Build FAQ JSON-LD
export function buildFaqJsonLd(items: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_CONFIG.url}/#faq`,
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

// Build LocalBusiness JSON-LD for regional pages
export function buildLocalBusinessJsonLd(
  pageName: string,
  region: string,
  localities: string[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/${pageName}#localbusiness`,
    name: `${SITE_CONFIG.name} - ${region}`,
    url: `${SITE_CONFIG.url}/${pageName}`,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    areaServed: localities.map(locality => ({
      '@type': 'City',
      name: locality,
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: BUSINESS_HOURS.daysOfWeek,
      opens: BUSINESS_HOURS.opens,
      closes: BUSINESS_HOURS.closes,
    },
  };
}

// Build BreadcrumbList JSON-LD
export function buildBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
