/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#e7e7e7',
        fontGrey: '#747272',
        fontGrey2: '#504f4f',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        cabin: ["Cabin", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
