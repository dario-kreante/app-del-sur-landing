interface PainPointsProps {
  title: string;
  text: string;
  items: string[];
}

export function PainPoints({ title, text, items }: PainPointsProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {title}
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">{text}</p>

          <ul className="space-y-4">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-gray-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
