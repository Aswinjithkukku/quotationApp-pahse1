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
              sm: "12px 12px 16px 0 rgba(255, 255, 255, 0.3) inset,-8px -8px 12px 0 rgba(0, 0, 0, .25) inset",
              md: "12px 12px 16px 0 rgba(0, 0, 0, 0.25),-8px -8px 12px 0 rgba(255, 255, 255, 0.3)"
          },
      },
  },
  plugins: [],
};