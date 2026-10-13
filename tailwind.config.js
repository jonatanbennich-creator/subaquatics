/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        abyss: {
          50: '#e6f6fb',
          100: '#c0e9f5',
          200: '#88d6ea',
          300: '#4dbdd8',
          400: '#1ba3c2',
          500: '#088aaa',
          600: '#066f8a',
          700: '#07566e',
          800: '#0a4556',
          900: '#0d3144',
          950: '#061f2e',
        },
        deep: {
          50: '#f0f7fa',
          100: '#dfeef3',
          200: '#b8dde8',
          300: '#88c4d4',
          400: '#56a3ba',
          500: '#38849e',
          600: '#2d6a83',
          700: '#28566b',
          800: '#27485a',
          900: '#1f3a4a',
          950: '#0d2030',
        },
        coral: {
          400: '#f97362',
          500: '#ef5a48',
          600: '#db4434',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-delay-1': 'fadeInUp 0.8s ease-out 0.2s forwards',
        'fade-in-delay-2': 'fadeInUp 0.8s ease-out 0.4s forwards',
        'fade-in-delay-3': 'fadeInUp 0.8s ease-out 0.6s forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
