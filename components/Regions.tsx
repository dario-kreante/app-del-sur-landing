import Link from 'next/link';

interface RegionLink {
  label: string;
  href: string;
}

interface RegionsProps {
  title: string;
  text: string;
  links: RegionLink[];
}

export function Regions({ title, text, links }: RegionsProps) {
  return (
    <section id="regiones" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600">{text}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="flex items-center justify-center px-6 py-4 bg-white hover:bg-brand-primary hover:text-white text-gray-700 font-medium rounded-lg shadow-sm hover:shadow-md transition-all focus-ring"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
