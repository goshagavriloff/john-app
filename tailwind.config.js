/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
	    colors:{
		'primary':'#FF6464',
		'secondary':'#00A8CC',
		'dark':'#21243D',
		'light':'#8695A4'
	    }
    },
  },
  plugins: [],
}
