/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{jsx,ts,tsx,js}"
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          100:'#05DBF2',
          200:"#04B2D9",
          300:"#049DD9",
          400:"#0477BF",
          500:"#0468BF"
        },
        skyBlue:{
          100:'#5648fb',
        },
        pink:{
          100:'#a232fe',
        },
        orange:{
          100:'#fe5e00',
        },
        voilet:{
          100:"#a130ff"
        }
      }
    },
  },
  plugins: [],
}

