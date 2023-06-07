/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        phone: "840px",
        tablet: "960px",
        laptop: "1280px",
        "wide-laptop": "1360px",
        desktop: "1440px",
        "wide-desktop": "1600px",
      },
      colors: {
        "berry-purple": "#803B64",
        magenta: "#B55B87",
        "misty-rose": "#FCECF6",
        "almost-white": "#FAFAFA",
        "classic-gray": "#E6E6E6",
        graphite: "#787878",
        charcoal: "#1E1E1E",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      "crete-round": ["Crete Round", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      "fira-code": ["Fira Code", "monospace"],
      tech: ["Share Tech", "sans-serif"],
      "tech-mono": ["Share Tech Mono", "monospace"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
