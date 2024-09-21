/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary":"#CCE5D7",
        "secondary":"#3C4510",
        "highlight":"#E3FFEF"
        
      },
      fontFamily:{
        "playfair":['Playfair Display', 'serif'],
        "lato":['Lato', 'sans-serif'],
        "logo":['Azeret Mono', 'Lato', 'sans-serif'],
      },
      screens:{
        "3xl":"1920px"
      }
    },
  },
  plugins: [],
};
