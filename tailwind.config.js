/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "2xl": "0 0 20px 007FFF",
      },
      screens: {
        3000: "3000px",
        1320: "1320px",
        1280: "1280px",
        1080: "1080px",
        915: "915px",
        800: "800px",
        650: "650px",
        550: "550px",
        460: "460px",
        440: "440px",
        400: "400px",
        375: "375px",
        310: "310px",
        220: "220px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
