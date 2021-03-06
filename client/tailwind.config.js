module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'checkered': "url('./landing.jpg')",
      })},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
