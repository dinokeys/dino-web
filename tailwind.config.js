/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './assets/**/*.{vue,js,ts,css}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
};
