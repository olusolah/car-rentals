/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    container:{
      padding: "1rem",
    },
    extend: {
      colors:{
        primary: "#5E17EB",
        icon: "#D1D1D1"
      },
      fontFamily: {
        'font': ['Nirmala UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

