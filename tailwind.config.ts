import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        black: "#0A0A0A",
        white: "#FFFFFF",
        "gray-100": "#F5F5F3",
        "gray-400": "#999999",
        "gray-600": "#555555",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "cursor-expand": "cursorExpand 0.2s ease",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        cursorExpand: {
          "0%": { transform: "translate(var(--x), var(--y)) scale(1)" },
          "100%": { transform: "translate(var(--x), var(--y)) scale(4)" },
        },
      },
      letterSpacing: {
        tightest: "-0.25em",
        tighter: "-0.125em",
        "heading-xl": "-4px",
        "heading-lg": "-2px",
      },
      lineHeight: {
        relaxed: "1.9",
      },
      maxWidth: {
        content: "1140px",
      },
      spacing: {
        "section": "120px",
        "section-sm": "80px",
      },
    },
  },
  plugins: [],
};

export default config;
