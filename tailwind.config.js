const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1620px" },
      "xl": { max: "1486px" },
      "lg": { max: "1160px" },
      "md": { max: "990px" },
      "sm": { max: "800px" },
    },
    extend: {
      fontFamily: {
        primary: ["var(--font-inter)", ...fontFamily.sans],
        serif: ["var(--lora-inter)", ...fontFamily.serif],
      },
      colors: {
        brand: {
          primary: "#4798ad",
          secondary: "#51b0c9",
          hover: "#186578",
        },
      },
      backgroundImage: {
        dark: "url('/bg/bg-dark.svg')",
        light: "url('/bg/bg-light.svg')",
      },
    },
    plugins: [],
  },
};
