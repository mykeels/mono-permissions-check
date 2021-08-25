// tailwind.config.js
module.exports = {
  purge: false, // "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "m-blue": {
          400: "#0055C1",
          500: "#024BAC",
          700: "#0055BA"
        },
        "m-gray": {
          400: "#D9E3EF",
          500: "#E2E6EC"
        },
        "m-green": {
          400: "#60A944"
        }
      },
      width: () => ({
        "128": "32rem"
      })
    },
    fontFamily: {
      sans: ["Alegreya Sans", "sans-serif"],
      mono: ["DM Sans", "sans-serif"]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
