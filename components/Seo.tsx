// SEO component for generating Next.js metadata
import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const defaultOpenGraph = {
  type: 'website' as const,
  locale: SITE_CONFIG.locale,
  siteName: SITE_CONFIG.name,
};

interface BuildMetadataParams {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  keywords?: string[];
}

export function buildMetadata({
  title,
  description,
  canonical,
  ogImage,
  keywords,
}: BuildMetadataParams): Metadata {
  const ogImageUrl = ogImage || `${SITE_CONFIG.url}/images/og/og-home.png`;

  return {
    title,
    description,
    keywords: keywords?.join(', '),
    alternates: {
      canonical,
    },
    openGraph: {
      ...defaultOpenGraph,
      title,
      description,
      url: canonical,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
