/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        jal: {
          50:  '#f0f8ff',
          100: '#e0f1fe',
          200: '#b9e2fd',
          300: '#7cccfb',
          400: '#36b2f6',
          500: '#0c98e7',
          600: '#007ac5',
          700: '#02619f',
          800: '#065284',
          900: '#0b446d',
          950: '#072b49',
        },
        earth: {
          50:  '#faf7f2',
          100: '#f2ebdf',
          200: '#e3d4bc',
          300: '#d1b791',
          400: '#bc9866',
          500: '#a67f4c',
          600: '#8f6a3f',
          700: '#745336',
          800: '#5e4330',
          900: '#4c372a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
