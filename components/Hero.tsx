import Link from 'next/link';
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
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
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-teal-50/30 py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-teal-100/50 to-transparent" />
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-teal-200/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-teal-200/50">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                Atendiendo centro-sur de Chile
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
              {h1}
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              {sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/#contacto"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary transition-all duration-300 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 focus-ring"
              >
                {ctaPrimary}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              {ctaSecondary && (
                <WhatsAppCTA
                  text={whatsAppText}
                  source="hero"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-green-500 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 focus-ring"
                >
                  <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  {ctaSecondary}
                </WhatsAppCTA>
              )}
            </div>

            {/* Trust Indicators */}
            {trust && trust.length > 0 && (
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {trust.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm md:text-base text-gray-700 font-medium"
                  >
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-teal-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
