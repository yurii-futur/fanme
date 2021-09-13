module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      'xl' : 964,
      'lg' : 618,
      'md' : 616,
      'sm' : 300
    },
    extend: {
      colors: {
        magicBlue: '#0066FF'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
