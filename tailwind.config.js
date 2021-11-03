module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['Zen Antique', 'serif'],
        sndFont: ['Fruktur', 'cursive'],
      },
      colors: {
        main: {
          primary: '#2B83BA',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
