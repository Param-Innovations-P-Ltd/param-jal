/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold:     '#F5B800',
          goldsoft: '#FBD24F',
          sky:      '#0A2540',
          skysoft:  '#12365E',
          ink:      '#0B1220',
        },
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
        sans:     ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script:   ['"Great Vibes"', '"Dancing Script"', 'cursive'],
        devanagari: ['"Noto Serif Devanagari"', 'ui-serif', 'serif'],
        mono:     ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'editorial': '-0.02em',
      },
      maxWidth: {
        prose: '68ch',
      },
      animation: {
        'fade-in':   'fadeIn 0.8s ease-out both',
        'slide-up':  'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'pulse-soft':'pulseSoft 3s ease-in-out infinite',
        'marquee':   'marquee 40s linear infinite',
      },
      keyframes: {
        fadeIn:    { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideUp:   { '0%': { opacity: 0, transform: 'translateY(16px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        pulseSoft: { '0%, 100%': { opacity: 0.6 }, '50%': { opacity: 1 } },
        marquee:   { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      boxShadow: {
        'soft':   '0 1px 2px rgba(11, 34, 68, 0.04), 0 8px 24px -12px rgba(11, 34, 68, 0.08)',
        'ring-gold': '0 0 0 6px rgba(245, 184, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
