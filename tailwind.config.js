module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   sans: ["Graphik", "sans-serif"], //TODO add font
    //   serif: ["Merriweather", "serif"],
    // },
    extend: {
      backgroundImage: (theme) => ({
        header:
          "url('../public/assets/ELEMENTS-PC/bkgnd-header-stroke-PC.png')",
        main: "url('../public/assets/ELEMENTS-PC/bkgnd-main-PC.png')",
        navSelected: "url('../public/assets/btn-header-mode-selected.png')",
        navDefault: "url('../public/assets/btn-header-mode-default.png')",
      }),
      colors: {
        night: "#0f1f3a",
        cardbg: "#000000b5",
      },
    },
  },
  plugins: [],
};
