/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        default: {
          primary: "#12a8cf",
          secondary: "#ff3829",
          accent: "#17c3f1",
          neutral: "#8f8d85",
          "base-100": "#12a8cf",
          "base-200": "#c33829",
          "base-300": "#f0a83b",
          "base-content": "#f0f0f0",
        },
      },
      "dark",
      "synthwave",
    ],
  },
};
