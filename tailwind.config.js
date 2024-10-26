// /** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
// const defaultTheme = require('tailwindcss/defaultTheme')
// module.exports = withMT({
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       backgroundColor: {
//         'rd': '#3F3D56'
//       },
//       animation: {
//         'bounce-slow': 'bounce 2s linear infinite',
//       },
//       gridTemplateColumns: {
//         'col-divide': '2.5fr 1fr',
//         'col-third':'1fr 1fr 2.5fr',
//       },
//       colors: {
//         customDark: 'hsl(225, 6%, 13%)',
//          // Add your custom color here
//       },
//     },
//     screens: {
//       '2xl': { 'max': '1536px' },
//       'xl': { 'max': '1280px' },
//       'lg': { 'max': '1024px' },
//       'md': { 'max': '768px' },
//       'sm': { 'max': '640px' },
//     },
//     fontFamily: {
//       sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
//     },
//   },
//   plugins: [],
// })

/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        rd: "#3F3D56",
      },
      animation: {
        "bounce-slow": "bounce 2s linear infinite",
        "scale-up": "scale-up 0.3s ease-out forwards", // Add your scale-up animation here
      },
      keyframes: {
        "scale-up": {
          "0%": {
            transform: "scale(0.8)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
      gridTemplateColumns: {
        "col-divide": "2.5fr 1fr",
        "col-third": "1fr 1fr 2.5fr",
      },
      colors: {
        customDark: "hsl(225, 6%, 13%)",
      },
    },
    screens: {
      "2xl": { max: "1536px" },
      "xl": { max: "1280px" },
      "lg": { max: "1024px" },
      "md": { max: "768px" },
      "sm": { max: "640px" },
    },
  },
  plugins: [],
});

