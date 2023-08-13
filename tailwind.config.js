/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "dana-font": ["dana-font"],
      "ray-font": ["ray-font"],
    },
    extend: {
      colors: {
        "main-blue": "#3431CE",
        "footer-blue": "#3500AA",
        "slider-blue": "#5956E9",
        "main-text-dark": "#292D32",
        "main-text-gray": "#474C52",
        "main-text-white": "#fff",
        "main-bg-input": "#F9F9F9",
      },
    },
  },
  plugins: [],
};
