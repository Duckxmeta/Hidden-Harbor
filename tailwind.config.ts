import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lake: {
          50: '#f0f6fa',
          100: '#e0edee',
          700: '#1a4156',
          800: '#112d3e',
          900: '#0c2333',
          950: '#071621',
        },
        sand: {
          50: '#faf7f2',
          100: '#f3ebe0',
          200: '#e6d7c3',
          300: '#d9be9b',
          400: '#ca9e6e',
          500: '#b8834c',
          600: '#9d6738',
        },
        cedar: {
          500: '#965b38',
          600: '#804a29',
          700: '#64381d',
        },
        cream: {
          50: '#fcfbfa',
          100: '#faf8f5',
          200: '#f4f0e8',
          300: '#ece5d8',
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(12, 35, 51, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(12, 35, 51, 0.16)',
      }
    },
  },
  plugins: [],
};
export default config;
