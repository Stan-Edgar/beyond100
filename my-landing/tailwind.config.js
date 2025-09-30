/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",       // your root HTML
    "./src/**/*.{js,ts,jsx,tsx}" // all JS/TS/React files
  ],
  theme: {
  extend: {
    fontFamily: {
      satoshi: ['Satoshi', 'sans-serif'],
      manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
