import Link from 'next/link';
import { SITE_CONFIG, SERVICE_AREAS } from '@/lib/constants';
import { getPhoneLink, getEmailLink } from '@/lib/utils';

interface FooterProps {
  areas?: readonly string[];
}

export function Footer({ areas = SERVICE_AREAS }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info (NAP) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {SITE_CONFIG.name}
            </h3>
            <address className="not-italic space-y-2 text-sm">
              <p>
                <a
                  href={getPhoneLink(SITE_CONFIG.phone)}
                  className="hover:text-white transition-colors focus-ring rounded"
                >
                  {SITE_CONFIG.phone}
                </a>
              </p>
              <p>
                <a
                  href={getEmailLink(SITE_CONFIG.email)}
                  className="hover:text-white transition-colors focus-ring rounded"
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
              <p className="text-gray-400">Lun–Vie 09:00–18:00</p>
            </address>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Zonas de Atención
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {areas.slice(0, 11).map((area) => (
                <li key={area}>
                  <span className="text-gray-400">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Landings Locales
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/ohiggins"
                  className="hover:text-white transition-colors focus-ring rounded"
                >
                  O&apos;Higgins (Rancagua, San Fernando)
                </Link>
              </li>
              <li>
                <Link
                  href="/maule-costa"
                  className="hover:text-white transition-colors focus-ring rounded"
                >
                  Maule Costa (Constitución, Pelluhue)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Desarrollo de
            software a medida en el centro-sur de Chile.
          </p>
        </div>
      </div>
    </footer>
  );
}
