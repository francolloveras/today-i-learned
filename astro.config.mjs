import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  base: 'today-i-learned',
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    mdx()
  ],
  redirects: {
    '/2024': '/today-i-learned' // TODO - Delete, add years pages.
  }
})
