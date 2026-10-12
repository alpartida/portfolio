import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alexpartida.com',
  integrations: [
    mdx(),
    // /thanks/ and 404 are noindex; keep them out of the sitemap too.
    sitemap({ filter: (page) => !page.includes('/thanks') }),
  ],
  build: { inlineStylesheets: 'auto' },
});
