import Link from 'next/link';
import { WhatsAppCTA } from './WhatsAppCTA';

interface HeroProps {
  h1: string;
  sub: string;
  ctaPrimary: string;
  ctaSecondary?: string;
  trust?: string[];
  whatsAppText: string;
}

export function Hero({
  h1,
  sub,
  ctaPrimary,
  ctaSecondary,
  trust,
  whatsAppText,
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 to-white py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            {h1}
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-brand-primary hover:bg-brand-secondary transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl focus-ring"
            >
              {ctaPrimary}
            </Link>
            {ctaSecondary && (
              <WhatsAppCTA
                text={whatsAppText}
                source="hero"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand-primary bg-white hover:bg-gray-50 border-2 border-brand-primary transition-all duration-200 rounded-lg shadow-md hover:shadow-lg focus-ring"
              >
                {ctaSecondary}
              </WhatsAppCTA>
            )}
          </div>

          {/* Trust Indicators */}
          {trust && trust.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              {trust.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-brand-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
