/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        xmasGreen: '#0f766e',
        xmasRed: '#b91c1c',
        xmasLight: '#f8fafc'
      }
    }
  },
  plugins: []
}
