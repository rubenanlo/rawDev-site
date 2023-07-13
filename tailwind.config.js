/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
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
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        integrity: "url('/static/assets/integrity-13.webp')",
        error: "url('/static/assets/error.webp')",
        "collab-1": "url('/static/assets/collab-1.webp')",
        "collab-2": "url('/static/assets/collab-2.webp')",
        "collab-3": "url('/static/assets/collab-3.webp')",
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
