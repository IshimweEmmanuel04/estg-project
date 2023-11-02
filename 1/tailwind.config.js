/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      screens:{
       sm:"480px"
      },
      colors:{
        grey:"#ccc",
        skycolor:"#004ba0dc"
      }
    },
  },
  plugins: [],
}