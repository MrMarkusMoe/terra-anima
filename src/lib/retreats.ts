import { getCollection } from 'astro:content';

/** Alle veröffentlichten Retreats, nach Startdatum sortiert. */
export async function getRetreats() {
  const all = await getCollection('retreats', ({ data }) => !data.draft);
  return all.sort((a, b) => a.data.start.getTime() - b.data.start.getTime());
}

/** Nur Retreats, die noch nicht vorbei sind. */
export async function getUpcomingRetreats() {
  const now = new Date();
  return (await getRetreats()).filter((r) => r.data.end >= now);
}
