// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL und BASE_PATH werden beim Veröffentlichen von der GitHub Action gesetzt.
// Lokal läuft die Seite unter "/". Mit eigener Domain später: BASE_PATH="/" setzen.
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
});
