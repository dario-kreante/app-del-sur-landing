// Google Analytics 4 helpers
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Track page view
export function trackPageView(url: string) {
  if (typeof window.gtag !== 'undefined' && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
}

// Track custom event
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, unknown>
) {
  if (typeof window.gtag !== 'undefined' && GA_MEASUREMENT_ID) {
    window.gtag('event', eventName, eventParams);
  }
}

// Predefined events
export const trackGenerateLead = (formLocation: string) => {
  trackEvent('generate_lead', {
    form_location: formLocation,
    event_category: 'conversion',
  });
};

export const trackClickWhatsApp = (source: string) => {
  trackEvent('click_whatsapp', {
    source,
    event_category: 'engagement',
  });
};

export const trackSelectPromotion = (promotionName: string) => {
  trackEvent('select_promotion', {
    promotion_name: promotionName,
    event_category: 'engagement',
  });
};
