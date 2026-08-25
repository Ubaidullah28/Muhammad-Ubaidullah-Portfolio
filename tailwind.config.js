/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#06080d',
          secondary: '#0b0f17',
          tertiary: '#111726',
          card: 'rgba(15, 23, 42, 0.65)',
          'card-hover': 'rgba(24, 34, 58, 0.8)',
        },
        cyber: {
          blue: '#3b82f6',
          cyan: '#00f0ff',
          indigo: '#6366f1',
          purple: '#a855f7',
          emerald: '#10b981',
          amber: '#f59e0b',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(0, 240, 255, 0.25)',
          purple: 'rgba(168, 85, 247, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-gradient': 'linear-gradient(135deg, #00f0ff 0%, #3b82f6 50%, #a855f7 100%)',
        'dark-gradient': 'linear-gradient(180deg, #06080d 0%, #0b0f17 100%)',
      }
    },
  },
  plugins: [],
}

