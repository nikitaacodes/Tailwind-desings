/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./main.html'],
  theme: {
    extend: {
      colors: {
        'pinkish':'#FF6F73',
        'purp':'#21183C',
        'y':'#FAB337',
        'gr': '#979797',
        'nw': '#808AC5',
      },
      fontFamily:{
        'mont' : ['Monteserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

