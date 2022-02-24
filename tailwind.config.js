module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        consola: ["consola"],
        consolab: ["consolab"],
        consolai: ["consolai"],
        consolaz: ["consolaz"],
        Shizuru: ["Shizuru"],
        Redressed: ["Redressed"],
        sans: ["consola", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        header: "url('/assets/ELEMENTS-PC/bkgnd-header-stroke-PC.png')",
        main: "url('/assets/ELEMENTS-PC/bkgnd-main-PC.png')",
        navSelected: "url('/assets/btn-header-mode-selected.png')",
        navDefault: "url('/assets/btn-header-mode-default.png')",
      }),
      colors: {
        night: "#0f1f3a",
        cardbg: { dark: "#000000b5", light: "#e4e4e4d1" },
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },

  variants: {
    extend: {
      fontFamily: ["hover", "focus"],
    },
  },

  plugins: [],

  corePlugins: {
    fontFamily: true,
  },
};
