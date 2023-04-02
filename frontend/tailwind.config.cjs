/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'red':'#793D3D',
        'redshade': '#9B4242',
        'pink': '#ECA3A3',
      },
    },
  },
  plugins: [],
}