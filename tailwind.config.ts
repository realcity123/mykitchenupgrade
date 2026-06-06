import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#1c1a17",
        "ink-soft": "#322e29",
        muted: "#6f675b",
        "muted-2": "#9a9183",
        line: "#e6ddcf",
        cream: "#f7f2ea",
        "cream-2": "#efe7d9",
        paper: "#fffdf9",
        gold: "#c2974a",
        "gold-light": "#dcbd80",
        "gold-deep": "#a67c30",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
