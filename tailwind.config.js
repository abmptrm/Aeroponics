/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        satu : "#F0EAD2",
        dua: "#DDE5B6",
        tiga: "#ADC178",
        empat: "#A98467",
        lima : "#6C584C",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

