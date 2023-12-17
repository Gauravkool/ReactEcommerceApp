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
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      indigo: colors.indigo,
      green: colors.green,
      red: colors.red,
    },
  },
  plugins: [],
};
