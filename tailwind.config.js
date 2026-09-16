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
          900: '#0B0B0B',
          850: '#111111',
          800: '#161616',
          700: '#222222',
          600: '#2D2D2D',
          500: '#404040',
        },
        cream: {
          DEFAULT: '#FAF7F2',
          muted: '#E5E1D8',
          dim: '#BDB9AF',
        },
        gold: {
          light: '#F3E5AB',
          DEFAULT: '#D6B45A',
          bright: '#E5C56C',
          dark: '#9E7D2B',
          glow: 'rgba(214, 180, 90, 0.15)',
        },
        crimson: {
          deep: '#8F1118',
          DEFAULT: '#B51E25',
          vibrant: '#D52B32',
          glow: 'rgba(181, 30, 37, 0.2)',
          subtle: 'rgba(181, 30, 37, 0.08)',
        },
        emerald: {
          market: '#36D39A',
          muted: 'rgba(54, 211, 154, 0.15)',
        },
        coral: {
          market: '#E56A6A',
          muted: 'rgba(229, 106, 106, 0.15)',
        },
        cyan: {
          highlight: '#63D9E8',
          electric: '#1EC1CB',
          glow: 'rgba(30, 193, 203, 0.25)',
        },
        navy: {
          deep: '#1C1C28',
          surface: '#151520',
          glow: 'rgba(28, 28, 40, 0.5)',
        },
        burgundy: {
          noir: '#1A0A0F',
          deep: '#250E17',
          glow: 'rgba(37, 14, 23, 0.5)',
        },
        blush: {
          pink: '#F6E6EA',
          soft: '#EAD5DC',
        },
        opal: {
          silver: '#D9DDE2',
          pearl: '#EAEFF5',
          glow: 'rgba(217, 221, 226, 0.25)',
        },
        cosmic: {
          dark: '#23212C',
          nebula: '#30293D',
          glow: 'rgba(48, 41, 61, 0.4)',
        },
        vanilla: {
          matcha: '#F1FEC8',
          glow: 'rgba(241, 254, 200, 0.25)',
        },
        violet: {
          royal: '#36255C',
          deep: '#281747',
          glow: 'rgba(54, 37, 92, 0.4)',
        },
        lavender: {
          ethereal: '#D2C3F6',
          soft: '#E5DCFC',
          glow: 'rgba(210, 195, 246, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
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
