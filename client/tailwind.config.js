/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      extend: {
          colors: {
              primaryColor: "#F7F7F7",
              secondaryColor: "#F2E7D5",
              tertiaryColor: "#6D9886",
              darkColor: "#393E46",
              btnHoverColor: "#af41ee",
              boxColor: "#F9DFDC",
          },
          boxShadow: {
              sm: "0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)",
          },
      },
  },
  plugins: [],
};