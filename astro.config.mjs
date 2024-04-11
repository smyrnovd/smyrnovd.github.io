import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import preact from "@astrojs/preact";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://smyrnov.eu",
  integrations: [mdx(), sitemap(), preact(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), tailwind()],
  site: "https://smyrnov.eu"
});