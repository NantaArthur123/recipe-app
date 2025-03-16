import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize:{
        'xxs': '0.625rem'
      },
      colors: {
        background: {
          DEFAULT: "var(--background)",
          200: "var(--background-200)",
          300: "var(--background-300)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          200: "var(--accent-200)",
        },
        text: {
          DEFAULT: "var(--text)",
          title: "var(--text-title)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;