/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#A8A8A8",
        "custom-dark-green": "#282D2D",
        "search-box-color": "#A8A8A833",
      },
    },
  },
  plugins: [],
};
