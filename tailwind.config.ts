import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wag: {
          "0%, 100%": { rotate: "0deg" },
          "25%": { rotate: "-10deg" },
          "75%": { rotate: "10deg" },
        },
      },
      animation: {
        wag: "wag 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
