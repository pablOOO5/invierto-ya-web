// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://inviertoya.com', // Cambia por tu dominio
  integrations: [
    sitemap(),
    tailwind(),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
