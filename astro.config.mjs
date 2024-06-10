import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    mdx()
  ],
  redirects: {
    '/2024': '/' // TODO - Delete, add years pages.
  }
})
