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
        }
      },
      boxShadow: {
        glow: "0 20px 60px rgba(15, 23, 42, 0.65)"
      }
    }
  },
  plugins: []
};

export default config;
