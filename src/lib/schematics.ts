// Ids of inline-SVG schematics registered in
// src/components/PaperSchematic.astro. Moved into its own .ts module so
// other components (e.g. PaperCard) can import the type cleanly.
export type SchematicId =
  | "core-periphery"
  | "covid-pipeline"
  | "decentralized-recovery"
  | "vae-rl"
  | "hgrl"
  | "llm-strategic";
