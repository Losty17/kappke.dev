module.exports = {
  content: [
    "./src/**/*.njs",
    "./src/**/*.jsx",
    "./src/**/*.nts",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      "crete-round": ["Crete Round", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      "fira-code": ["Fira Code", "monospace"],
    },
    screens: {
      phone: "840px",
      tablet: "960px",
      laptop: "1280px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
