// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    imageService: true,
    imagesConfig: {
      sizes: [400, 720, 800, 1080],
      formats: ["image/webp"],
      dangerouslyAllowSVG: true
    }
  }),
});
