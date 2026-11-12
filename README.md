# Terra Anima – Website

Statische Website mit [Astro](https://astro.build), veröffentlicht über GitHub Pages.

## Grundprinzip: modular & konsistent

Alles wird aus wiederverwendbaren Bausteinen zusammengesetzt. **Neue Seiten bauen wir aus bestehenden Modulen – nichts wird doppelt gebaut.**

| Ebene | Ort | Inhalt |
|---|---|---|
| Design-Tokens | `src/styles/tokens.css` | Farben, Schriften, Abstände, Rundungen – **einzige** Stelle für Gestaltungswerte |
| UI-Bausteine | `src/components/ui/` | Container, Section, Heading, Button, Card, Badge, Grid, Prose, FormField |
| Module | `src/components/modules/` | Header, Footer, Hero, PageHeader, PillarGrid, RetreatCard, RetreatList, RetreatMeta, CallToAction, ContactForm, InquiryEmbed |
| Layout | `src/layouts/BaseLayout.astro` | Rahmen für jede Seite (Meta-Daten, Kopf, Fuß) |
| Seiten | `src/pages/` | setzen sich nur aus Modulen zusammen |
| Inhalte | `src/content/retreats/*.md` | ein Retreat = eine Markdown-Datei mit festen Feldern |
| Zentrale Daten | `src/data/` | Seitenname, Navigation, Kontakt, Formular-Key, Kompass-Säulen |

**Regeln**

1. Keine festen Farben/Abstände in Komponenten – immer `var(--…)` aus den Tokens.
2. Interne Links immer über `url('/pfad/')` (bzw. `Button href`) – wegen des GitHub-Pages-Pfads.
3. Gibt es schon einen Baustein, wird er verwendet oder erweitert, nicht kopiert.

## Neues Retreat anlegen

Datei in `src/content/retreats/` kopieren, umbenennen (wird zur URL) und die Felder anpassen. `draft: true` versteckt es.

## Lokal starten

Voraussetzungen: [Node.js](https://nodejs.org) (aktuelle LTS-Version, mindestens 22) und [Git](https://git-scm.com).

```bash
npm install
npm run dev      # Vorschau unter http://localhost:4321
npm run build    # fertige Seite in dist/
```

## Veröffentlichen auf GitHub Pages

0. **Einmalig:** Die Datei `deploy.yml` aus dem Hauptordner nach `.github/workflows/deploy.yml` verschieben
   (Ordner `.github` und darin `workflows` anlegen). Im Explorer geht das; in PowerShell:
   ```powershell
   mkdir .github\workflows
   move deploy.yml .github\workflows\deploy.yml
   ```
1. Auf GitHub ein neues **öffentliches** Repository anlegen (z. B. `terra-anima`).
2. Im Projektordner:
   ```bash
   git init
   git add .
   git commit -m "Grundgerüst"
   git branch -M main
   git remote add origin https://github.com/DEIN-NAME/terra-anima.git
   git push -u origin main
   ```
3. Auf GitHub: **Settings → Pages → Source: „GitHub Actions“** auswählen.
4. Unter **Actions** läuft der Build (~1 Min.). Danach ist die Seite unter
   `https://DEIN-NAME.github.io/terra-anima/` erreichbar.

Jeder weitere `git push` aktualisiert die Seite automatisch.

## Formulare

- **Kontakt:** Kostenlosen Access Key auf web3forms.com holen und in `src/data/site.ts` bei `web3formsKey` eintragen. Bis dahin Demo-Modus.
- **Retreat-Anmeldung:** Formular auf tally.so erstellen und den Link im Retreat als `tallyUrl` eintragen.

## Vor dem echten Start

- [ ] Impressum und Datenschutzerklärung ausfüllen
- [ ] Echte E-Mail in `src/data/site.ts`
- [ ] Markenfarben in `tokens.css`, echtes Logo statt `CompassMark`
- [ ] Eigene Domain (dann `SITE_URL`/`BASE_PATH` im Workflow anpassen und `public/CNAME` anlegen)
