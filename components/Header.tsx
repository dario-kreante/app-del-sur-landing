'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SITE_CONFIG } from '@/lib/constants';
import { getWhatsAppLink } from '@/lib/utils';
import { trackClickWhatsApp } from '@/lib/analytics';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    trackClickWhatsApp('header');
  };

  const whatsappLink = getWhatsAppLink(
    SITE_CONFIG.whatsapp,
    'Hola Apps del Sur, quiero conversar sobre desarrollo de software a medida.'
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="container-custom py-4" aria-label="Primary navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 focus-ring rounded-md">
            <div className="text-xl font-bold text-brand-primary">
              Apps del Sur
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/#servicios"
              className="text-sm font-medium text-gray-700 hover:text-brand-primary transition-colors focus-ring rounded px-2 py-1"
            >
              Servicios
            </Link>
            <Link
              href="/#proceso"
              className="text-sm font-medium text-gray-700 hover:text-brand-primary transition-colors focus-ring rounded px-2 py-1"
            >
              Proceso
            </Link>
            <Link
              href="/#regiones"
              className="text-sm font-medium text-gray-700 hover:text-brand-primary transition-colors focus-ring rounded px-2 py-1"
            >
              Zonas
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium text-gray-700 hover:text-brand-primary transition-colors focus-ring rounded px-2 py-1"
            >
              FAQ
            </Link>
            <a
              href={whatsappLink}
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-brand-primary hover:bg-brand-secondary transition-colors rounded-lg focus-ring"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-700 hover:text-brand-primary focus-ring rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-gray-200 pt-4">
            <Link
              href="/#servicios"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/#proceso"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Proceso
            </Link>
            <Link
              href="/#regiones"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Zonas
            </Link>
            <Link
              href="/#faq"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <a
              href={whatsappLink}
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-semibold text-white bg-brand-primary hover:bg-brand-secondary rounded-md text-center"
            >
              WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
