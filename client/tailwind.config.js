module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins'],
      primary: ['Arial'],
    },
    extend: {
      colors: {
        primary: '#0097F7',
      },
      borderColor: {
        primary: '#0097F7',
      },
      textColor: {
        primary: '#0097F7',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
