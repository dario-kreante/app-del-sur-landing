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
    <section id="proceso" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          {title}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6">
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white font-bold text-lg">
                    {idx + 1}
                  </div>
                </div>

                {/* Step content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
