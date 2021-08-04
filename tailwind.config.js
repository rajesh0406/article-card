module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme:{
      screens: {
        // NEW
        xs: "0px",
        sm: "361px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors:{
        darkblue:"#48556a",
        lightblue:"#9eafc2",
        lightgray:"#ecf2f8",
        white:"#ffffff",
        black:"#000000"
      },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
