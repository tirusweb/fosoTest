module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "lexend-deca": ["Lexend Deca", "sans-serif"],
        "barlow": ['Barlow', 'sans-serif'],
      },
      boxShadow: {
        'custom-shadow': '0px 0px 2px 0px #919EAB33',
      },
      colors:{
        primary: '#0375F3',
        secondary : '#141522'
      }
    },
  },
  plugins: [],
};
