# MAGICS Lab — website

The site for the **MAGICS Lab** (Multi-Agent Intelligent Complex Systems) at
Northeastern University.

- **Live site:** <https://heydarilab.github.io>
- **Stack:** [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), static output.
- **Hosting:** GitHub Pages, deployed automatically by a GitHub Actions workflow on every push to `main`.

This README is written for someone who does **not** code. If you can edit text
files and run two commands in a terminal, you can keep this site up to date.

---

## 1. The everyday workflow

You won't usually touch the code. To add a paper, a news item, or a team
member, you just **add or edit a small text file** and push. The site rebuilds
itself.

If you want to preview your change before publishing:

```bash
npm install      # one time, on a new computer
npm run dev      # then open the URL it prints (usually http://localhost:4321)
```

To publish, just commit and push:

```bash
git add .
git commit -m "Add: paper Foo"
git push
```

GitHub Actions takes ~1 minute to rebuild and redeploy.

---

## 2. Where things live

```
src/
├── content/
│   ├── highlights/         ← Key papers — ONE markdown file per paper
│   │   ├── _TEMPLATE.md    ← Copy this when adding a new paper
│   │   └── 01-…-…md
│   └── news/               ← News items — ONE markdown file per item
│       ├── _TEMPLATE.md
│       └── 2025-…-…md
├── pages/
│   ├── team.astro          ← Team page (members live here)
│   ├── publications.astro  ← Full publications list (placeholder for now)
│   ├── research.astro
│   ├── news.astro
│   ├── highlights/
│   │   ├── index.astro
│   │   └── [slug].astro    ← Per-paper page template (don't touch)
│   └── index.astro         ← Homepage
├── components/             ← Building blocks; don't edit unless you want to.
├── layouts/                ← Page shell (head, header, footer).
├── styles/global.css       ← Global CSS — palette etc. lives in tailwind.config.mjs
└── assets/
    └── papers/             ← Images used on Highlight cards
public/
├── favicon.svg
├── og-image.svg            ← Social-share preview image
└── figures/overview/       ← (Optional) drop the original lab figure PNG here
```

Files whose name starts with `_` (like `_TEMPLATE.md`) are **ignored** by Astro
— they're there only as copy-paste starting points.

---

## 3. Adding a news item

1. Copy `src/content/news/_TEMPLATE.md` to a new file in the same folder.
   Name it anything ending in `.md` (a date prefix is nice, e.g. `2026-01-news.md`).
2. Open the new file and edit the front-matter at the top:

   ```yaml
   ---
   title: "Short headline."
   date: 2026-01-15            # YYYY-MM-DD. Newest dates show first.
   summary: "One short paragraph for the homepage and news page."
   link: "https://link-to-the-press-article-or-paper"   # optional
   ---
   ```

3. Save, commit, push:

   ```bash
   git add src/content/news/<your-new-file>.md
   git commit -m "Add news: <short description>"
   git push
   ```

That's it — the homepage teaser and the `/news` page will pick it up
automatically.

---

## 4. Adding a highlighted paper

Highlights are the **card-grid** of "key papers" on the homepage and on
`/highlights`. Each card links to a per-paper page with a figure, a short
summary, and outbound links.

1. Drop the paper's figure image into `src/assets/papers/`
   (PNG or JPG works). Skip this step if you'd rather use one of the
   built-in **schematics** — see step 3 below.
2. Copy `src/content/highlights/_TEMPLATE.md` to a new file in the same
   folder. A name like `07-llm-policy-followup.md` keeps the list tidy.
3. Edit the front-matter:

   ```yaml
   ---
   title: "Full paper title."
   authors:
     - "Author One"
     - "Author Two"
   venue: "Venue (journal or conference)"
   year: 2026
   order: 70                 # Lower numbers come first on the grid.

   # Use EITHER `image` OR `schematicId`, not both.
   image: "../../assets/papers/your-figure.png"
   imageAlt: "Describe the figure (used for screen readers)."
   # schematicId: "core-periphery"   # see list below

   links:
     - label: "Publisher"
       href: "https://example.com/paper"
     - label: "arXiv"
       href: "https://arxiv.org/abs/0000.00000"

   hook: "One-line takeaway shown on the card."
   ---

   Two or three short paragraphs of summary go here, in markdown.
   ```

4. Save, commit, push.

### Built-in schematic IDs

If you don't have a publishable figure, you can use one of the inline SVG
illustrations registered in `src/components/PaperSchematic.astro`:

- `core-periphery` — firm network with a core and periphery
- `covid-pipeline` — four-step contact network → policy → epidemic curve
- `decentralized-recovery` — disrupted network re-forms bottom-up
- `vae-rl` — graph → latent space → RL policy
- `hgrl` — hierarchical control of an evolving network
- `llm-strategic` — games × framings × language models

To add a new schematic, copy one of the cases in `PaperSchematic.astro` and
add the new id to the `SchematicId` union.

---

## 5. Adding or editing team members

The team list lives in `src/pages/team.astro`. Open that file, find the
`members` array near the top, and add an entry:

```ts
{
  name: "Ada Lovelace",
  role: "PhD student · Multi-agent RL",
  kind: "phd",                              // or "postdoc", "alumni", "collaborator"
  bio: "One short sentence.",
  link: "https://example.com/ada",          // optional
  photo: "/team/ada.jpg",                   // optional — put image in public/team/
},
```

If you provide a `photo`, drop the image into `public/team/` (e.g.
`public/team/ada.jpg`). If you don't, the site renders the person's initials in
a soft gradient placeholder.

Remove the `TODO` placeholder entries once you have real members in.

---

## 6. The publications page

`src/pages/publications.astro` currently uses a hand-curated array of entries.
The plan is to drive it from a BibTeX file later — there's a `TODO` comment
block at the top explaining the path. Until then, edit the `entries` array to
add or update papers.

---

## 7. Deploy — one-time GitHub setup

When you push the very first commit, you need to flip one switch:

1. Open the repo at <https://github.com/heydarilab/heydarilab.github.io>.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **"GitHub Actions"**.
4. Save.

That's the only manual step. From then on, every push to `main` triggers
`.github/workflows/deploy.yml`, which builds the site and deploys it. You can
watch the run live in the **Actions** tab; it typically takes about a minute.

---

## 8. Local development reference

```bash
npm install           # install dependencies (only on first checkout)
npm run dev           # local dev server with hot reload
npm run build         # produce dist/ — what GitHub Actions runs in CI
npm run preview       # serve the built dist/ locally to sanity-check
```

Node 20+ is recommended. If you use `nvm`, there's an `.nvmrc` so `nvm use`
picks the right version.

---

## 9. About the lab overview figure

The overview figure on the homepage is rendered as an **inline SVG**
(`src/components/OverviewFigure.astro`). This keeps it crisp at any size and
lets the colors come from the same Tailwind palette as the rest of the site.

If you'd rather use the original PNG version of the figure:

1. Drop the PNG at `public/figures/overview/magics-overview.png`.
2. In `src/pages/index.astro`, replace the `<OverviewFigure />` line with an
   `<img>` tag pointing to that file.

---

## 10. Color palette and typography

Both are configured in `tailwind.config.mjs`. The palette is sampled from the
lab's overview figure:

| Token   | Hex      | Used for                          |
| ------- | -------- | --------------------------------- |
| `ink`   | `#1B2A3A` | body text, headings               |
| `cream` | `#FBF6EB` | page background                   |
| `ember` | `#E07B3F` | warm orange accent                |
| `gold`  | `#D4A02A` | ochre / secondary accent          |
| `teal`  | `#3A8C8C` | cool accent                       |

Fonts: **Fraunces** (display serif) and **Inter** (sans), both from Google
Fonts.

---

## 11. Accessibility & motion

- The animated network in the hero respects `prefers-reduced-motion` and
  falls back to a static SVG.
- Scroll-reveal animations also short-circuit under reduced motion.
- All decorative SVGs are marked `aria-hidden`; meaningful figures use
  `imageAlt`. Please **always** fill in `imageAlt` when you add a paper image.

---

## 12. Questions?

If the site stops building, the Actions tab on GitHub will show the error.
Most of the time it's a typo in a markdown front-matter block — a missing
quote or a wrong field name.
