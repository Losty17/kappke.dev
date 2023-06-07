/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
    screens: {
      phone: "840px",
      tablet: "960px",
      laptop: "1280px",
      "wide-laptop": "1360px",
      desktop: "1440px",
      "wide-desktop": "1600px",
    },
  },
  plugins: [require("flowbite/plugin")],
};
