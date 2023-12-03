/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        12.5: "50px",
      },
    },
    colors: {
      primary: {
        light: "rgb(245, 148, 148 )",
        default: "rgb(255, 81, 81 )",
        dark: "rgb(248, 48, 48 )",
      },
      gray: {
        200: "rgb(244, 245, 246)",
        700: "rgb(60,60,60)",
      },
      white: colors.white,
      black: colors.black,
    },
  },
  plugins: [],
};
