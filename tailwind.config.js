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
        lightGreenAccent: '#4a5d3a',
        mediumGreenAccent: '#3d4f2f',
        logoGreen: '#2d3d24',
      },
    },
  },
  plugins: [],
};
