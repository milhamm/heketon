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
        cheese: '#F7D167',
      },
      borderColor: {
        primary: '#0097F7',
      },
      textColor: {
        primary: '#0097F7',
        disclaimer: '#FF3274',
      },
      height: {
        map: 'calc(100vh - 4rem)',
      },
      minWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      backgroundImage: {
        disclaimer: "url('/images/disclaimer.png')",
      },
      backgroundPosition: {
        'bottom-right-4': 'right 1rem bottom 1rem',
      },
      flex: {
        2: '1 1 50%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
