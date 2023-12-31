/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#de6b54",
        dark: "#334155",
        secondary: "#64748b",
        bgsec: "#f9d6cf",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
