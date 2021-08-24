// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "m-blue": {
          400: "#0055C1",
          700: "#0055BA"
        },
        "m-gray": {
          400: "#D9E3EF"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  fontFamily: {
    sans: ["Alegreya Sans", "sans-serif"],
    mono: ["DM Sans", "sans-serif"]
  },
  plugins: [],
};
