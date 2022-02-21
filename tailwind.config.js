module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px', //TODO delete it and if it worked ..
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'night': '#0f1f3a',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'], //TODO add font
      serif: ['Merriweather', 'serif'],
    },
    extend: {    
      backgroundImage: theme => ({
        'header': "url('../public/assets/ELEMENTS-PC/bkgnd-header-stroke-PC.png')",
        'main': "url('../public/assets/ELEMENTS-PC/bkgnd-main-PC.png')",
      }),    
    },

  },
  plugins: [],
}
