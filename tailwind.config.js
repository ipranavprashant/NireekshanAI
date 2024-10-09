/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#A8A8A8",
        "custom-dark-green": "#282D2D",
        // "search-box-color": "#A8A8A833",
        "regal-blue": "#29403e",
        "navbar-color": "#535353",
        "shubham-start": "#255451",
        "shubham-end": "#15595E",
        "shubham-end1": "#1D1E1D",
      },
    },
  },
  plugins: [],
};
