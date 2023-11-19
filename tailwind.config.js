/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: "#A4FFAF",
        darkGray: "#24232C",
        lightGray: "#E6E5EA",
        darkColor: "#244232C",
      },
      backgroundColor: {
        blackbg: "#18171F",
        darkGray: "#24232C",
        lightGray: "#E6E5EA",
        bgAccent: "#A4FFAF",
      },
      fontFamily: {
        jetFont: "JetBrains Mono",
      },
    },
  },
  plugins: [],
};
