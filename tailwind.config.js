/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      'first-font':['first-font'],
      'second-font':['second-font']
    },
    extend: {
      colors:{
        'main-yellow' : '#FFE381',
        'main-text' : '#222222',
        'main-menu' : '#C1CFD2'
      }
    },
  },
  plugins: [],
}

