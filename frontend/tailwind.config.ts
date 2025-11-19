import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          900: "#05060c",
          800: "#0c1320",
          700: "#141b2e"
        },
        plum: {
          900: "#05030b",
          800: "#0c0616",
          700: "#1a0c27"
        },
        accent: {
          start: "#ff6ac7",
          mid: "#ff9a7a",
          end: "#ffc271"
        },
        lavender: {
          200: "#e8d5ff",
          300: "#d4bee9"
        }
      },
      boxShadow: {
        glow: "0 28px 70px rgba(8, 3, 15, 0.65)",
        "card-soft": "0 24px 48px rgba(3, 0, 7, 0.55)",
        "accent-glow": "0 12px 32px rgba(255, 138, 150, 0.4)"
      }
    }
  },
  plugins: []
};

export default config;
