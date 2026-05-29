// Content collections for the MAGICS Lab site.
//
// Two collections are defined here:
//   - "highlights"  Key paper pages, one markdown file per paper.
//   - "news"        News / announcement items, one markdown file per item.
//
// To add a new paper or news item, drop a markdown file into the matching
// folder under src/content/. The README explains the required front-matter.

import { defineCollection, z } from "astro:content";

const highlights = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      authors: z.array(z.string()),
      venue: z.string(),
      year: z.number().int(),
      // The visual on the card and the paper page. Either:
      //   - a path to a local image file under src/assets/, processed by
      //     Astro's image pipeline, or
      //   - the special value "schematic" + a `schematicId` (see below) to
      //     render an inline SVG schematic component instead.
      image: image().optional(),
      imageAlt: z.string().default(""),
      // If `image` is omitted, the schematic with this id is rendered.
      // See src/components/PaperSchematic.astro for the registered ids.
      schematicId: z
        .enum([
          "core-periphery",
          "covid-pipeline",
          "decentralized-recovery",
          "vae-rl",
          "hgrl",
          "llm-strategic",
        ])
        .optional(),
      // External links shown under the title.
      links: z
        .array(
          z.object({
            label: z.string(),
            href: z.string().url(),
          }),
        )
        .default([]),
      // One-line hook used on the card grid.
      hook: z.string(),
      // Display order on the Highlights page. Lower numbers come first.
      order: z.number().int().default(100),
      // Set to true to hide a paper without deleting the file.
      draft: z.boolean().default(false),
    }),
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // ISO date, e.g. "2025-04-12". Newest dates surface first.
    date: z.coerce.date(),
    summary: z.string(),
    // Optional outbound link (e.g. a press article).
    link: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { highlights, news };
