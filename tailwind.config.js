/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkGrey: '#3A3A3A',
        darkBrown: '#84522F',
        lightBrown: '#D89F73',
        darkBlue: '#303841',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }      
    },
  },
  plugins: [],
};
