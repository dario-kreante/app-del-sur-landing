'use client';

import { FormEvent, useState } from 'react';
import { isValidEmail } from '@/lib/utils';
import { trackGenerateLead } from '@/lib/analytics';
import { WhatsAppCTA } from './WhatsAppCTA';

interface ContactFormProps {
  title: string;
  text: string;
  whatsAppText: string;
}

export function ContactForm({ title, text, whatsAppText }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Honeypot check
    if (formData.honeypot) {
      setStatus('error');
      return;
    }

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Por favor completa todos los campos requeridos.');
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatus('error');
      setErrorMessage('Por favor ingresa un email válido.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      setStatus('success');
      trackGenerateLead('contact-form');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        honeypot: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        'Hubo un error al enviar tu mensaje. Por favor intenta nuevamente o contáctanos por WhatsApp.'
      );
    }
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600">{text}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="mb-4">
                  <svg
                    className="h-16 w-16 text-green-500 mx-auto"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gray-600 mb-6">
                  Gracias por contactarnos. Te responderemos pronto.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-brand-primary hover:text-brand-secondary font-semibold focus-ring rounded px-4 py-2"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field (hidden) */}
                <input
                  type="text"
                  name="website"
                  value={formData.honeypot}
                  onChange={(e) =>
                    setFormData({ ...formData, honeypot: e.target.value })
                  }
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>

                {errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex-1 px-6 py-3 text-base font-semibold text-white bg-brand-primary hover:bg-brand-secondary disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors rounded-lg shadow-md hover:shadow-lg focus-ring"
                  >
                    {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                  <WhatsAppCTA
                    text={whatsAppText}
                    source="contact-form"
                    className="flex-1 px-6 py-3 text-base font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors rounded-lg shadow-md hover:shadow-lg focus-ring text-center"
                  >
                    WhatsApp
                  </WhatsAppCTA>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
