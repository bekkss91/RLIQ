/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        darkBackground: '#063231',
        whiteAccent: '#f9f9f9',
        lightGreenAccent: '#a8d5ba',
        mediumGreenAccent: '#7fb069',
        logoGreen: '#588157',
      },
    },
  },
  plugins: [],
};
