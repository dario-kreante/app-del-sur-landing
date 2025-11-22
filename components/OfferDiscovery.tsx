import Link from 'next/link';

interface OfferDiscoveryProps {
  title: string;
  text: string;
  cta: string;
}

export function OfferDiscovery({ title, text, cta }: OfferDiscoveryProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-primary to-brand-secondary">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-lg text-teal-50 mb-8">{text}</p>
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand-primary bg-white hover:bg-gray-50 transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl focus-ring"
          >
            {cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
