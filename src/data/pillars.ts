/** Die vier Kompass-Richtungen. Texte sind Platzhalter. */
export const pillars = [
  { id: 'psychologie', symbol: 'N', title: 'Psychologie', text: 'Fundiertes Wissen über uns selbst – verständlich und erfahrbar gemacht.' },
  { id: 'spirit', symbol: 'O', title: 'Spirit', text: 'Raum für Stille, Sinn und das, was größer ist als wir.' },
  { id: 'balance', symbol: 'S', title: 'Balance', text: 'Yoga, Tai Chi und Achtsamkeit für Körper und Nervensystem.' },
  { id: 'rhythmus', symbol: 'W', title: 'Rhythmus', text: 'Im Takt der Natur leben – offline, draußen, gemeinsam.' },
] as const;

export type PillarId = (typeof pillars)[number]['id'];
export const pillarTitle = (id: PillarId) => pillars.find((p) => p.id === id)?.title ?? id;
