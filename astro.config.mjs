// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  site: 'https://julianperez.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
