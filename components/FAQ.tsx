'use client';

import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  title: string;
  items: FAQItem[];
}

export function FAQ({ title, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          {title}
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg">
              <button
                type="button"
                onClick={() => toggleItem(idx)}
                className="w-full flex items-center justify-between px-6 py-4 text-left focus-ring rounded-lg"
                aria-expanded={openIndex === idx}
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {item.q}
                </span>
                <svg
                  className={`h-5 w-5 text-brand-primary flex-shrink-0 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
