/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  colors: {
    bodyColor: "#f0f0f0",     /* Light barva*/
    lightText: "#c4cfde",
    boxBg: "#linear-gradient(145deg, #1e2024, #23272b)", 
    designColor:"#0292ff",      /*Modra barva*/             
    iconColor: "000000",
    iconBg: "#111111",
    textColor: "#111111",
    textRed: "#ff014f",        /* Dark barva textu*/   // potřeba prohodit VAR za text-white ve všech komponentách
  },
  plugins: [],
}