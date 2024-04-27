import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "color-scheme": "light",
          primary: "#06ab6c",
          "primary-content": "oklch(99.7% 0.004 134.85)",
          secondary: "oklch(69.71% 0.329 342.55)",
          "secondary-content": "oklch(98.71% 0.0106 342.55)",
          accent: "oklch(76.76% 0.184 183.61)",
          neutral: "#2B3440",
          "neutral-content": "#D7DDE4",
          "base-100": "oklch(99.7% 0.004 134.85)",
          "base-200": "oklch(96.7% 0.004 134.85)",
          "base-300": "#E5E6E6",
          "base-content": "#1f2937",
        },
        dark: {
          "color-scheme": "dark",
          primary: "#06ab6c",
          secondary: "#ef7b45",
          accent: "oklch(74.51% 0.167 183.61)",
          neutral: "#2a323c",
          "neutral-content": "#A6ADBB",
          "base-100": "#1d232a",
          "base-200": "#191e24",
          "base-300": "#15191e",
          "base-content": "#A6ADBB",
        },
      },
    ],
  },
};
export default config;
