/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  './public/index.html',
];
export const theme = {
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
};
export const plugins = [];
