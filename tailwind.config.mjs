/** @type {import('tailwindcss').Config} */
//
// Inkwell — the lab's dark editorial theme.
//
// The token NAMES kept their original cream/ink semantics so existing
// components don't need to be rewritten:
//   - `cream`        = the page background (now deep navy)
//   - `cream-deep`   = a slightly darker section background
//   - `cream-card`   = matted card surface (slightly lighter than page)
//   - `ink`          = the primary foreground (now warm off-white)
//   - `ink-soft`     = secondary text
//   - `ink-muted`    = quiet, low-priority text and hairline accents
// A new `paper` token is the *only* light surface — used to mat
// paper-figure images so they keep their original paper-on-paper feel
// instead of becoming bright islands on the dark page.
//
// To preview the OLD light theme, replace the values in `cream` and
// `ink` with the comments shown to the right of each token.
//
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Foreground (was deep navy; now warm cream).
        ink: {
          DEFAULT: "#F1E5CE", // body text — warm cream (was "#1B2A3A")
          soft: "#C8D1DC", // secondary, paired with ink as eyebrow body
          muted: "#8DA0B5", // quiet labels and timestamps
        },
        // Surface (was cream tones; now deep navy tones).
        cream: {
          DEFAULT: "#1B2A3A", // page background       (was "#FBF6EB")
          deep: "#16222F", // slightly darker section (was "#F4ECDA")
          card: "#243648", // matted card surface     (was "#FFFBF1")
        },
        // Paper — kept light, only used for figure mats so academic
        // figures still look like figures on paper, not glowing
        // islands. Use sparingly.
        paper: {
          DEFAULT: "#FBF6EB",
          deep: "#F4ECDA",
        },
        // Accent palette — brightened a touch so colors land on a
        // dark background with the same liveliness they had on cream.
        ember: {
          DEFAULT: "#F08A4A", // warm orange  (light was "#E07B3F")
          dark: "#E07B3F",
          soft: "#F6DDC8",
        },
        gold: {
          DEFAULT: "#E4B43A", // ochre        (light was "#D4A02A")
          dark: "#D4A02A",
          soft: "#F1E2B5",
        },
        teal: {
          DEFAULT: "#4FA8A8", // teal         (light was "#3A8C8C")
          dark: "#3A8C8C",
          soft: "#CFE3E1",
        },
        // semantic aliases
        accent: "#F08A4A",
        // Hairlines and rules — subdued blue-gray that reads at
        // ~0.4 opacity against the navy background.
        rule: "#3A506B",
      },
      fontFamily: {
        // Loaded via Google Fonts in BaseLayout
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      maxWidth: {
        prose: "68ch",
        page: "76rem",
      },
      boxShadow: {
        // Shadows now use deep navy with higher opacity so they read
        // on a dark surface (subtle on light, more present on dark).
        card: "0 1px 0 rgba(0,0,0,0.25), 0 8px 24px -12px rgba(0,0,0,0.45)",
        cardHover:
          "0 1px 0 rgba(0,0,0,0.30), 0 18px 36px -16px rgba(0,0,0,0.55)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.2, 0.7, 0.2, 1)",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.ink.DEFAULT"),
            a: { color: theme("colors.ember.DEFAULT") },
          },
        },
      }),
    },
  },
  plugins: [],
};
