/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary":"#0B192C",
        "secondary":"#1E3E62",
        "text-white": "#FFFFFF",
        "highlight":"#FF6500"
      },
      fontFamily:{
        "title":['Merriweather', 'serif'],
        "lato":['Lato', 'sans-serif'],
      },
      screens:{
        "xs":"375px",
        "3xl":"1920px",
      },
      keyframes: {
        "scroll": {
          "0%": { transform: "translate3d(0px,-100%,0px)" },
          "10%": { transform: "translate3d(0px,-100%,0px)" },
          "90%": { transform: "translate3d(0px,100%,0px)" },
          "100%": { transform: "translate3d(0px,100%,0px)" },
        },
        "hoverCV":{}
      },
      animation: {
        'scroll-arrow': 'scroll 2s infinite',
      },
    },
  },
  plugins: [
    ("autoprefixer"),
    ("tailwindcss"),
  ],
};