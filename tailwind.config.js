/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comforta: ["Comfortaa", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        blue: "#00A8E8",
        green: "#7BC043",
        orange: "#FF6F40",
        yellow: "#FDD835",
        gray: "#707070",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("@tailwindcss/forms")],
};
