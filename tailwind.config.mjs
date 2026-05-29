/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // Palette sampled from the lab's overview figure.
      colors: {
        ink: {
          DEFAULT: "#1B2A3A", // deep navy body text
          soft: "#34465A",
          muted: "#5B6C7E",
        },
        cream: {
          DEFAULT: "#FBF6EB", // background
          deep: "#F4ECDA",
          card: "#FFFBF1",
        },
        ember: {
          DEFAULT: "#E07B3F", // warm orange
          dark: "#C56630",
          soft: "#F6DDC8",
        },
        gold: {
          DEFAULT: "#D4A02A", // ochre / gold
          dark: "#B5851D",
          soft: "#F1E2B5",
        },
        teal: {
          DEFAULT: "#3A8C8C", // teal
          dark: "#2C6E6E",
          soft: "#CFE3E1",
        },
        // semantic aliases
        accent: "#E07B3F",
        rule: "#E5D9BE",
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
        card: "0 1px 0 rgba(27,42,58,0.04), 0 8px 24px -12px rgba(27,42,58,0.18)",
        cardHover:
          "0 1px 0 rgba(27,42,58,0.06), 0 18px 36px -16px rgba(27,42,58,0.28)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.2, 0.7, 0.2, 1)",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.ink.DEFAULT"),
            a: { color: theme("colors.ember.dark") },
          },
        },
      }),
    },
  },
  plugins: [],
};
