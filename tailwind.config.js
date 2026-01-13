/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        xgreen: '#0b6b2b',
        xred: '#b91c1c',
      }
    },
  },
  plugins: [],
};