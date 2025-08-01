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
        lightGreenAccent: '#dbe3bc',
        mediumGreenAccent: '#bdcd7f',
        logoGreen: '#a0b743',
      },
    },
  },
  plugins: [],
};
