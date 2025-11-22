import type { Metadata } from 'next';
import '@/styles/globals.css';
import { GA_MEASUREMENT_ID } from '@/lib/analytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://apps-del-sur.cl'),
  verification: {
    google: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CL">
      <head>
        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
