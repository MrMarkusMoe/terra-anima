/**
 * Baut interne Links mit dem richtigen Basis-Pfad (wichtig für GitHub Pages).
 * Immer url('/pfad/') statt '/pfad/' direkt verwenden.
 */
export function url(path = '/'): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

/** Datum im österreichischen Format, z. B. "12. März 2027". */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('de-AT', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}

export function formatDateRange(start: Date, end: Date): string {
  const sameYear = start.getFullYear() === end.getFullYear();
  const startFmt = new Intl.DateTimeFormat('de-AT', {
    day: 'numeric', month: 'long', ...(sameYear ? {} : { year: 'numeric' }),
  }).format(start);
  return `${startFmt} – ${formatDate(end)}`;
}
