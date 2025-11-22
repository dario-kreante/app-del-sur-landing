'use client';

import { ReactNode } from 'react';
import { SITE_CONFIG } from '@/lib/constants';
import { getWhatsAppLink, cn } from '@/lib/utils';
import { trackClickWhatsApp } from '@/lib/analytics';

interface WhatsAppCTAProps {
  text: string;
  source: string;
  children?: ReactNode;
  className?: string;
}

export function WhatsAppCTA({
  text,
  source,
  children,
  className,
}: WhatsAppCTAProps) {
  const handleClick = () => {
    trackClickWhatsApp(source);
  };

  const whatsappLink = getWhatsAppLink(SITE_CONFIG.whatsapp, text);

  return (
    <a
      href={whatsappLink}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'focus-ring',
        className ||
          'inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors rounded-lg shadow-md hover:shadow-lg'
      )}
    >
      {children || 'WhatsApp'}
    </a>
  );
}
