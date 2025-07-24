/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'galactic': {
          'deep': '#0D0221',
          'purple': '#A259FF',
          'pink': '#FB6F92',
          'lavender': '#D0A2F7',
          'rose': '#F9CFF2',
          'light': '#FAE5FF',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(162, 89, 255, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(251, 111, 146, 0.8)' },
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      }
    },
  },
  plugins: [],
};