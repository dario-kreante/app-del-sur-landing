interface Service {
  title: string;
  desc: string;
}

interface ServicesProps {
  title: string;
  cards: Service[];
  proofNote?: string;
}

export function Services({ title, cards, proofNote }: ServicesProps) {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cards.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>

        {proofNote && (
          <div className="max-w-3xl mx-auto bg-teal-50 border border-teal-200 rounded-lg p-6">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-brand-primary">
                Garantía:{' '}
              </span>
              {proofNote}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
