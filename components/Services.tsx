import {
  Search,
  Globe,
  Smartphone,
  Link2,
  Headphones,
} from 'lucide-react';

interface Service {
  title: string;
  desc: string;
}

interface ServicesProps {
  title: string;
  cards: Service[];
  proofNote?: string;
}

const serviceIcons = [Search, Globe, Smartphone, Link2, Headphones];

export function Services({ title, cards, proofNote }: ServicesProps) {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            Servicios diseñados para escalar tu operación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {cards.map((service, idx) => {
            const Icon = serviceIcons[idx % serviceIcons.length];
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-primary/20 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>

                {/* Hover effect decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-accent/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

        {proofNote && (
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-r from-teal-50 to-brand-accent/5 border-2 border-teal-200/50 rounded-2xl p-8 shadow-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl" />
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    ✓
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Cómo garantizamos el resultado
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{proofNote}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
