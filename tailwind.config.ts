import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#164b6a',
          dark: '#0f2f45',
          strong: '#033958'
        },
        secondary: '#41758c',
        accent: {
          DEFAULT: '#22c55e',
          light: '#5ce1a5',
          strong: '#1a8056'
        },
        soft: '#A8C4D4'
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #164B6A 0%, #41758C 100%)',
        'brand-overlay': 'linear-gradient(0deg, rgba(3, 57, 88, 0.7), rgba(3, 57, 88, 0.7))'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      maxWidth: {
        '8xl': '1600px'
      }
    }
  },
  plugins: []
};

export default config;
