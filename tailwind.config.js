module.exports = {
  // content: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{html,js}",
            "./scr/**/**/*.{html,js}"  ],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ["Poppins"],
    },
  },
  plugins: [],
};

// // tailwind.config.js
// module.exports = {
//   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };
