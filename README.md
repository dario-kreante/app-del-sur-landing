# Apps del Sur - Landing Page

Landing SEO-first para captar leads de pymes en el centro-sur de Chile (Maule, Ñuble, Biobío, Araucanía y O'Higgins).

## Stack Técnico

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel

## Estructura del Proyecto

```
apps-del-sur/
├── app/                    # Next.js App Router
│   ├── (marketing)/       # Marketing pages group
│   │   ├── page.tsx       # Home page
│   │   ├── ohiggins/      # Regional landing
│   │   └── maule-costa/   # Regional landing
│   ├── api/               # API routes
│   └── sitemap.ts         # Sitemap generation
├── components/            # React components
├── content/              # Content JSON files
├── lib/                  # Utilities and helpers
└── public/               # Static assets
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file (copy from `.env.example`):
```bash
cp .env.example .env.local
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics measurement ID
- `SMTP_*`: Email configuration for contact form

## SEO Features

- Meta tags optimized for local search
- JSON-LD structured data (Organization, LocalBusiness, Service, FAQPage)
- Automatic sitemap generation
- OpenGraph and Twitter Card tags
- Regional landing pages with local content

## Performance Targets

- LCP < 2.5s
- CLS < 0.1
- INP < 200ms
- Accessibility: WCAG AA compliant

## Deployment

The site is configured for automatic deployment on Vercel:

```bash
npm run build
```

## License

Private - Apps del Sur
