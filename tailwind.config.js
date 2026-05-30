/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFDFB',
        accent: '#FF4801',
        text: '#521000',
      }
    },
  },
  plugins: [],
}

