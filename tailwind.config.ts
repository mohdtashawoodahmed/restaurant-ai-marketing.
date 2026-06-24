import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "Midnight Roast" palette — warm near-black, ember + gold accents
        roast: {
          950: "#0A0908",
          900: "#120F0C",
          800: "#1B1712",
          700: "#252019",
          600: "#332C22",
        },
        ember: {
          DEFAULT: "#FF7A45",
          50: "#FFF1EA",
          100: "#FFE0CC",
          300: "#FFAE85",
          500: "#FF7A45",
          600: "#E85A28",
          700: "#C4451C",
        },
        gold: {
          DEFAULT: "#C9A227",
          100: "#F1E3B0",
          300: "#DDC065",
          500: "#C9A227",
          600: "#A6831C",
        },
        cream: {
          DEFAULT: "#F5EFE6",
          muted: "#9B9388",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grain": "url('/grain.png')",
        "radial-fade": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      },
      animation: {
        "float-slow": "float 7s ease-in-out infinite",
        "float-slower": "float 11s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        "ticket-in": "ticketIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "steam": "steam 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(3deg)" },
        },
        ticketIn: {
          "0%": { opacity: "0", transform: "translateY(-12px) scaleY(0.8)" },
          "100%": { opacity: "1", transform: "translateY(0) scaleY(1)" },
        },
        steam: {
          "0%": { opacity: "0", transform: "translateY(0) scaleX(1)" },
          "30%": { opacity: "0.5" },
          "100%": { opacity: "0", transform: "translateY(-40px) scaleX(1.6)" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
        ember: "0 0 40px -8px rgba(255, 122, 69, 0.45)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
