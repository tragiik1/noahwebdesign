import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#faf7f2',
          100: '#f3ede3',
          200: '#e6d9c6',
          300: '#d5bfa1',
          400: '#c2a17a',
          500: '#b4895e',
          600: '#a77652',
          700: '#8b5f45',
          800: '#724e3c',
          900: '#5e4234',
          950: '#0d0906',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#f9f1e4',
          300: '#f3e4ce',
          400: '#e9cfab',
          500: '#ddb88a',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
      },
    },
  },
  plugins: [],
}

export default config
