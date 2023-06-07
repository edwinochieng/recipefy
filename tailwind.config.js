/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        "poppins-medium": ["PoppinsMedium"],
        "poppins-bold": ["PoppinsBold"],
      },
      colors: {
        primary: "#E6EBF2",
        secondary: "#81BAB4",
        tertiary: "#32324D",
      },
    },
  },
  plugins: [],
};
