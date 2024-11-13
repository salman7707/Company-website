import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "xs":"320px",
      "sm":"640px",
      "md":"768px",
      "lg":"1024px",
      "xl":"1280px",
      "2xl":"1536px"
    },
    extend: {
      fontFamily:{
        custom:["MyCustomFont","sans-serif"]
      },
      animation: {
        'spin-slow': 'spin 35s linear infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "var(--black)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        secondaryPurple: "var(--secondary)",
        gray: "var(--gray)",
        yellow: "var(--yellow)",
      },
    },
  },
  plugins: [],
} satisfies Config;
