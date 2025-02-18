import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), react()],
  site: "https://camilleprincipiano.netlify.app/",
  markdown: {
    // ...
    drafts: false, // defaults to false as well but can by controlled and set to true
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: "modern-compiler",
        },
      },
    },
  },
});
