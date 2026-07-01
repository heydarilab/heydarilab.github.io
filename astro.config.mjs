// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// MAGICS Lab site configuration.
// Served at the custom domain `magicslab.org` (via GitHub Pages) — the
// `site` value below is used by Astro for canonical URLs, sitemap
// entries, and absolute Open Graph image URLs.
// The custom domain itself is wired up by `public/CNAME`.
export default defineConfig({
  site: "https://magicslab.org",
  base: "/",
  trailingSlash: "ignore",
  integrations: [tailwind({ applyBaseStyles: false })],
  build: {
    format: "directory",
  },
});
