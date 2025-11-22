import { Hero } from '@/components/Hero';
import { PainPoints } from '@/components/PainPoints';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { OfferDiscovery } from '@/components/OfferDiscovery';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { JsonLd } from '@/components/JsonLd';
import { buildMetadata } from '@/components/Seo';
import {
  buildLocalBusinessJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from '@/lib/schema';
import { SITE_CONFIG } from '@/lib/constants';
import ohigginsContent from '@/content/ohiggins.es-CL.json';

export const metadata = buildMetadata({
  title: ohigginsContent.meta.title,
  description: ohigginsContent.meta.description,
  canonical: ohigginsContent.meta.canonical,
  ogImage: 'https://apps-del-sur.cl/images/og/og-ohiggins.png',
  keywords: [
    'desarrollo software O&apos;Higgins',
    'software Rancagua',
    'desarrollo web San Fernando',
    'apps a medida Machalí',
    'software Pichilemu',
  ],
});

export default function OHigginsPage() {
  const localBusinessJsonLd = buildLocalBusinessJsonLd(
    'ohiggins',
    "O&apos;Higgins",
    ohigginsContent.local.communes
  );

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Inicio', url: SITE_CONFIG.url },
    { name: 'Zonas', url: `${SITE_CONFIG.url}/#regiones` },
    { name: "O&apos;Higgins", url: `${SITE_CONFIG.url}/ohiggins` },
  ]);

  const faqJsonLd = buildFaqJsonLd(ohigginsContent.faq.items);

  return (
    <>
      {/* JSON-LD structured data */}
      <JsonLd data={localBusinessJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* Page sections */}
      <Hero
        h1={ohigginsContent.hero.h1}
        sub={ohigginsContent.hero.sub}
        ctaPrimary={ohigginsContent.hero.ctaPrimary}
        ctaSecondary={ohigginsContent.hero.ctaSecondary}
        whatsAppText={ohigginsContent.hero.whatsAppText}
      />

      <PainPoints
        title={ohigginsContent.local.painTitle}
        text=""
        items={ohigginsContent.local.pain}
      />

      <Services
        title={ohigginsContent.services.title}
        cards={ohigginsContent.services.cards}
      />

      <Process
        title={ohigginsContent.process.title}
        steps={ohigginsContent.process.steps}
      />

      <OfferDiscovery
        title={ohigginsContent.offer.title}
        text={ohigginsContent.offer.text}
        cta="Quiero agendar mi Discovery"
      />

      <FAQ title={ohigginsContent.faq.title} items={ohigginsContent.faq.items} />

      <ContactForm
        title={ohigginsContent.contact.title}
        text={ohigginsContent.contact.text}
        whatsAppText={ohigginsContent.hero.whatsAppText}
      />

      {/* Local area section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Comunas que atendemos en O&apos;Higgins
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center mb-6">
              Trabajamos con pymes en toda la región de O&apos;Higgins, incluyendo:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-sm text-gray-700">
              {ohigginsContent.local.communes.map((commune) => (
                <div key={commune} className="text-center">
                  {commune}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
