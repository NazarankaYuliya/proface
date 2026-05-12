/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./pl/**/*.html",
      "./js/**/*.js"
    ],
    theme: {
      extend: {
        fontFamily: {
          playfair: ['"Playfair Display"', 'serif'],
          dm: ['"DM Sans"', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }