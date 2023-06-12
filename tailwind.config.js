/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
  ],
  theme: {
    extend: {
      fontFamily: {
        'gilroy': ['Gilroy'],
      }
    },
  
  },
  plugins: [],
}

