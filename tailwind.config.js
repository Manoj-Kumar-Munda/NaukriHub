/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Poppins: ["Poppins", "sans-serif"],
        Roboto: ['Roboto', "sans-serif"],
        SourceSans : ['Source Sans 3', 'sans-serif']
      },
      colors : {
        "primary-black" : '#121212',
      }
    },
  },
  plugins: [],
}

