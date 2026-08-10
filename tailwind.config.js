/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#050505',
          900: '#080909',
          850: '#0D0F10',
          800: '#121415',
          700: '#1A1D1E',
          600: '#26292B',
        },
        gold: {
          light: '#F3E5AB',
          DEFAULT: '#D6B45A',
          bright: '#E6C766',
          dark: '#B08E35',
          glow: 'rgba(214, 180, 90, 0.15)',
        },
        emerald: {
          market: '#36D39A',
          muted: 'rgba(54, 211, 154, 0.2)',
        },
        coral: {
          market: '#E56A6A',
          muted: 'rgba(229, 106, 106, 0.2)',
        },
        cyan: {
          highlight: '#63D9E8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
