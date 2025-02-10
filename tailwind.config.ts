import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        valentine: '#E24767',
        'light-valentine': '#e48397'
      },
    },
  },
  plugins: [],
} satisfies Config;

