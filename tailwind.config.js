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
      phone: "480px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [],
};
