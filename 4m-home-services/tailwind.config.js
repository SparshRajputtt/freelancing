/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#15212B",
          light: "#22323F",
        },
        linen: "#F6F2EA",
        paper: "#FCFAF6",
        brass: {
          DEFAULT: "#A9824C",
          light: "#C7A876",
          dark: "#8A6A3B",
        },
        sage: {
          DEFAULT: "#7C8C77",
          light: "#9DAC97",
        },
        stone: "#DCD5C6",
        char: "#2A2A26",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
}
