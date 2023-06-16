/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#f8fcfb",
        background: "#020403",
        "primary-button": "#439d81",
        "secondary-button": "#0c1d17",
        accent: "#3c8b72",
      },
      fontFamily: {
        primary: ["Inter", "ui-sans-serif"],
        accent: ["Dancing Script", "ui-serif"],
      },
      aspectRatio: {
        portrait: "3/4",
      },
    },
  },
  plugins: [],
};
