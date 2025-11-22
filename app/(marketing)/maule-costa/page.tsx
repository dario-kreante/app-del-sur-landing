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
import mauleCostaContent from '@/content/maule-costa.es-CL.json';

export const metadata = buildMetadata({
  title: mauleCostaContent.meta.title,
  description: mauleCostaContent.meta.description,
  canonical: mauleCostaContent.meta.canonical,
  ogImage: 'https://apps-del-sur.cl/images/og/og-maule-costa.png',
  keywords: [
    'desarrollo software Maule costa',
    'software Constitución',
    'desarrollo web Pelluhue',
    'apps Chanco',
    'software turismo costa',
  ],
});

export default function MauleCostaPage() {
  const localBusinessJsonLd = buildLocalBusinessJsonLd(
    'maule-costa',
    'Maule Costa',
    mauleCostaContent.local.localities
  );

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Inicio', url: SITE_CONFIG.url },
    { name: 'Zonas', url: `${SITE_CONFIG.url}/#regiones` },
    { name: 'Maule Costa', url: `${SITE_CONFIG.url}/maule-costa` },
  ]);

  const faqJsonLd = buildFaqJsonLd(mauleCostaContent.faq.items);

  return (
    <>
      {/* JSON-LD structured data */}
      <JsonLd data={localBusinessJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* Page sections */}
      <Hero
        h1={mauleCostaContent.hero.h1}
        sub={mauleCostaContent.hero.sub}
        ctaPrimary={mauleCostaContent.hero.ctaPrimary}
        ctaSecondary={mauleCostaContent.hero.ctaSecondary}
        whatsAppText={mauleCostaContent.hero.whatsAppText}
      />

      <PainPoints
        title={mauleCostaContent.local.painTitle}
        text=""
        items={mauleCostaContent.local.pain}
      />

      <Services
        title={mauleCostaContent.services.title}
        cards={mauleCostaContent.services.cards}
      />

      <Process
        title={mauleCostaContent.process.title}
        steps={mauleCostaContent.process.steps}
      />

      <OfferDiscovery
        title={mauleCostaContent.offer.title}
        text={mauleCostaContent.offer.text}
        cta="Quiero agendar mi Discovery"
      />

      <FAQ
        title={mauleCostaContent.faq.title}
        items={mauleCostaContent.faq.items}
      />

      <ContactForm
        title={mauleCostaContent.contact.title}
        text={mauleCostaContent.contact.text}
        whatsAppText={mauleCostaContent.hero.whatsAppText}
      />

      {/* Local area section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Localidades que atendemos en Maule Costa
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center mb-6">
              Trabajamos con pymes en toda la costa del Maule, incluyendo:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-gray-700">
              {mauleCostaContent.local.localities.map((locality) => (
                <div key={locality} className="text-center">
                  {locality}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
