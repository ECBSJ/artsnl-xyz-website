/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      gray: "#929292",
      purple: "#B01AF7",
      darkPurple: "#0e0811",
    },
    fontFamily: {
      title: ["Russo One", "sans-serif"],
      text: ["Michroma", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
