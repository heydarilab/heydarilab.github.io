// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// MAGICS Lab site configuration.
// This is a GitHub Pages **user/org** site, so `site` is the bare domain
// and `base` is "/". If you ever move to a project page, set
// `base: "/repo-name/"` here and the rest of the site will follow.
export default defineConfig({
  site: "https://heydarilab.github.io",
  base: "/",
  trailingSlash: "ignore",
  integrations: [tailwind({ applyBaseStyles: false })],
  build: {
    format: "directory",
  },
});
