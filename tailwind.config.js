/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F172A',
          50: '#F8FAFC',
          100: '#E2E8F0',
          200: '#CBD5E1',
          600: '#475569',
          800: '#1E293B',
        },
        teal: {
          DEFAULT: '#0EA5E9',
          600: '#0284C7',
          100: '#E0F2FE',
        },
        amber: {
          DEFAULT: '#F59E0B',
          100: '#FEF3C7',
          600: '#D97706',
        },
      },
    },
  },
  plugins: [],
};
