import { Hero } from '@/components/Hero';
import { PainPoints } from '@/components/PainPoints';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Regions } from '@/components/Regions';
import { OfferDiscovery } from '@/components/OfferDiscovery';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { JsonLd } from '@/components/JsonLd';
import { buildMetadata } from '@/components/Seo';
import { orgJsonLd, buildFaqJsonLd } from '@/lib/schema';
import homeContent from '@/content/home.es-CL.json';

export const metadata = buildMetadata({
  title: homeContent.meta.title,
  description: homeContent.meta.description,
  canonical: homeContent.meta.canonical,
  ogImage: 'https://apps-del-sur.cl/images/og/og-home.png',
  keywords: [
    'desarrollo software',
    'apps a medida',
    'Talca',
    'Maule',
    'desarrollo web',
    'aplicaciones móviles',
    'pymes',
    'software empresarial',
  ],
});

export default function HomePage() {
  const faqJsonLd = buildFaqJsonLd(homeContent.faq.items);

  return (
    <>
      {/* JSON-LD structured data */}
      <JsonLd data={orgJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* Page sections */}
      <Hero
        h1={homeContent.hero.h1}
        sub={homeContent.hero.sub}
        ctaPrimary={homeContent.hero.ctaPrimary}
        ctaSecondary={homeContent.hero.ctaSecondary}
        trust={homeContent.hero.trust}
        whatsAppText={homeContent.contact.whatsAppText}
      />

      <PainPoints
        title={homeContent.painPoints.title}
        text={homeContent.painPoints.text}
        items={homeContent.painPoints.items}
      />

      <Services
        title={homeContent.services.title}
        cards={homeContent.services.cards}
        proofNote={homeContent.services.proofNote}
      />

      <Process
        title={homeContent.process.title}
        steps={homeContent.process.steps}
      />

      <Regions
        title={homeContent.regions.title}
        text={homeContent.regions.text}
        links={homeContent.regions.links}
      />

      <OfferDiscovery
        title={homeContent.offer.title}
        text={homeContent.offer.text}
        cta={homeContent.offer.cta}
      />

      <FAQ title={homeContent.faq.title} items={homeContent.faq.items} />

      <ContactForm
        title={homeContent.contact.title}
        text={homeContent.contact.text}
        whatsAppText={homeContent.contact.whatsAppText}
      />
    </>
  );
}
