/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {backgroundImage: {
      'geo': "url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')",
    },},
  },
  plugins: [],
}
