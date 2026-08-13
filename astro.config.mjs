// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://iberi22.github.io',
  base: '/iberi22/',
  integrations: [tailwind()],
});
