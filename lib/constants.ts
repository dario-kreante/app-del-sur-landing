// Site-wide constants for Apps del Sur
export const SITE_CONFIG = {
  name: 'Apps del Sur',
  url: 'https://apps-del-sur.cl',
  phone: '+56-XX-XXXXXXX',
  email: 'contacto@apps-del-sur.cl',
  whatsapp: '56XXXXXXXXX', // WhatsApp number without + or spaces
  locale: 'es_CL',
  timezone: 'America/Santiago',
} as const;

export const BUSINESS_HOURS = {
  schedule: 'Lun–Vie 09:00–18:00',
  daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  opens: '09:00',
  closes: '18:00',
} as const;

export const SERVICE_AREAS = [
  'Talca',
  'Curicó',
  'Linares',
  'Chillán',
  'Concepción',
  'Los Ángeles',
  'Temuco',
  'Villarrica',
  'Rancagua',
  'San Fernando',
  'Maule costa',
] as const;

export const REGIONS = [
  { name: 'Región del Maule', code: 'ML' },
  { name: 'Región de Ñuble', code: 'NB' },
  { name: 'Región del Biobío', code: 'BI' },
  { name: 'Región de La Araucanía', code: 'AR' },
  { name: 'Región del Libertador General Bernardo O\'Higgins', code: 'LI' },
] as const;
