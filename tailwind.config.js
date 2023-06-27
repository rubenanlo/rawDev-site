/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      comfortaa: ["Comfortaa", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        integrity: "url('/static/assets/integrity-13.avif')",
      },
      colors: {
        blue: {
          primary: "#00416a",
        },
        orange: {
          primary: "#934C0D",
          secondary: "#ed872d",
          tertiary: "#F3B177",
          quaternary: "#FBE5D2",
        },
        light: "#fffaf0",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("@tailwindcss/forms")],
};
