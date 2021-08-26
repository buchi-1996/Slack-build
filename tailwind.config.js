module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "san-serif"]
      },
      width: {
        '1/3.5': '26%',
      },
      backgroundColor: {
        "dark-purple": "#350D36",
        "light-purple": "#644565",
        "side-purple": "#3F0E40"
      },
      borderColor: {
        "dark-purple": "#350D36",
        "light-purple": "#644565",
      },
      borderWidth: {
       '3': '3px',
      },
      textColor: {
        "light-purple-text": "#9D869D",
        "white-shade": "#89728A"
      },
    },
  },
  variants: {
    extend: {}
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
