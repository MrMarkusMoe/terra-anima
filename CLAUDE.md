# Terra Anima – Website (Übergabe an Claude Code)

Statische Website für Markus Mörths Retreats (Yoga, Psychologie, Selbsterfahrung) unter der Marke **Terra Anima**. Sprache der Seite und der Kommunikation: Deutsch.

## Feste Regel für ALLE Änderungen
**Alles modular und sehr konsistent. Bausteine werden immer wiederverwendet, nie dupliziert.**
- Gestaltungswerte (Farben, Schriften, Abstände, Radien, Schatten) nur aus `src/styles/tokens.css` (`var(--…)`), nie feste Werte in Komponenten.
- Neue Seiten bestehen nur aus vorhandenen Modulen. Fehlt etwas: neues Modul bzw. neuen UI-Baustein anlegen oder einen bestehenden erweitern, nicht kopieren.
- Interne Links immer über `url('/pfad/')` aus `src/lib/url.ts` bzw. `<Button href>` (wegen des GitHub-Pages-Basispfads).
- Inhalte (Retreats) als Markdown in `src/content/retreats/`, Schema in `src/content.config.ts`.

## Stack
- Astro 7 (static output), schlichtes CSS, keine UI-Frameworks
- Schriften lokal via @fontsource (Fraunces = Überschriften, Inter = Text); kein Google-Fonts-CDN (DSGVO)
- Hosting: GitHub Pages über `.github/workflows/deploy.yml` (setzt `SITE_URL`/`BASE_PATH` aus Owner/Repo-Namen)
- Node ≥ 22.23 (siehe `.nvmrc`), `npm run dev` / `npm run build`

## Struktur
- `src/styles/tokens.css`, `global.css`
- `src/components/ui/` – Container, Section, Heading, Button, Card, Badge, Grid, Prose, FormField
- `src/components/modules/` – Header, Footer, Hero, PageHeader, PillarGrid, RetreatCard, RetreatList, RetreatMeta, CallToAction, ContactForm, InquiryEmbed, CompassMark (Platzhalter-Logo)
- `src/layouts/BaseLayout.astro` – Rahmen jeder Seite
- `src/data/site.ts` (Name, Navigation, E-Mail, Web3Forms-Key), `src/data/pillars.ts` (4 Kompass-Richtungen: Psychologie, Spirit, Balance, Rhythmus)
- `src/lib/url.ts` (url, Datumsformat de-AT), `src/lib/retreats.ts`
- Seiten: Start, /retreats/, /retreats/[slug]/, /kontakt/, /impressum/, /datenschutz/, 404

## Entscheidungen
- Kontaktformular: eigenes Formular + Web3Forms (Demo-Modus, solange `web3formsKey` leer ist)
- Retreat-Anmeldung: Tally (EU-Hosting), Link pro Retreat als `tallyUrl` im Frontmatter
- Google Forms verworfen (Design, US-Server, Fremdinhalt beim Laden)
- Newsletter: MailerLite (später einbinden); Zahlung optional später per Stripe-Zahlungslinks
- Kein Tracking, keine Cookies → kein Cookie-Banner
- Alle Retreats sind bewusst offline (Teil der Markenbotschaft)

## Stand (12.11.2026)
- Grundgerüst + Demo-Seite fertig, Build lokal getestet (Desktop + Mobil), alle Texte Platzhalter
- GitHub-Konto: **MrMarkusMoe**; leeres öffentliches Repo: **github.com/MrMarkusMoe/terra-anima**
- Noch NICHT hochgeladen, Pages noch nicht aktiviert

## Nächste Schritte
1. Im Ordner: `git init`, `git add .`, `git commit -m "Grundgerüst"`, `git branch -M main`,
   `git remote add origin https://github.com/MrMarkusMoe/terra-anima.git`, `git push -u origin main`
   (Anmeldung bei GitHub macht Markus selbst, z. B. über `gh auth login` oder den Git Credential Manager)
2. GitHub → Settings → Pages → Source: **GitHub Actions**
3. Prüfen, ob die Action durchläuft; Seite: https://mrmarkusmoe.github.io/terra-anima/
4. Danach: Inhalte (Markenfarben, Logo, Brand Pillars, Texte aus dem früheren 5-Seiten-Mockup)

## Offen
- Sprachen (nur DE oder DE/EN?)
- Eigene Domain (dann `SITE_URL`/`BASE_PATH="/"` im Workflow und `public/CNAME`)
- Impressum & Datenschutz ausfüllen, echte E-Mail in `src/data/site.ts`
