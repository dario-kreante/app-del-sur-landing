interface ProcessStep {
  title: string;
  desc: string;
}

interface ProcessProps {
  title: string;
  steps: ProcessStep[];
}

export function Process({ title, steps }: ProcessProps) {
  return (
    <section id="proceso" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            Proceso transparente con hitos claros
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative group"
              >
                {/* Connector line for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-brand-primary to-transparent -z-10" />
                )}

                <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-primary/30 h-full">
                  {/* Step number badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary shadow-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{idx + 1}</span>
                  </div>

                  {/* Content */}
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-brand-accent/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
