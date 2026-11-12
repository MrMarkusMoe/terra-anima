/**
 * Zentrale Seitendaten. Name, Navigation, Kontakt und Formular-Einstellungen
 * stehen NUR hier – alle Module lesen von dieser Stelle.
 */
export const site = {
  name: 'Terra Anima',
  tagline: 'Retreats für Yoga, Psychologie & Selbsterfahrung',
  description:
    'Terra Anima – Offline-Retreats, die Yoga, Psychologie und Selbsterfahrung verbinden.',
  lang: 'de',
  owner: 'Markus Mörth',
  location: 'Graz, Österreich',
  email: 'hallo@example.com', // TODO: echte Adresse eintragen
};

export const nav = [
  { label: 'Start', href: '/' },
  { label: 'Retreats', href: '/retreats/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

export const legalNav = [
  { label: 'Impressum', href: '/impressum/' },
  { label: 'Datenschutz', href: '/datenschutz/' },
];

export const forms = {
  /** Web3Forms Access Key (kostenlos auf web3forms.com). Leer = Demo-Modus. */
  web3formsKey: '',
};
