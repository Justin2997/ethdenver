/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scale: {
          "0%": { transform: "scale(0.70)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.70)" },
        },
      },
      colors: {
        primary: "#00A0B4",
        secondary: "#87B925",
        threedary: "#133B62",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
