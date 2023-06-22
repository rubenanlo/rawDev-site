/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Poppins"', "sans-serif"],
    },
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
      colors: {
        backgroundLight: "#FFFFFF",
        backgroundDark: "#000000",
        textLight: "#9199A5",
        textDark: "#E0E2E7",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("@tailwindcss/forms")],
};
