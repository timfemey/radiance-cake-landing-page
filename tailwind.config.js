/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#FFF8E1",
        text: "#333",
        header: "#8B4513",
        gray: {
          100: "#FFB6C1",
          200: "#FFB6C1",
          300: "#FFB6C1",
          400: "#FFB6C1",
          500: "#FFB6C1",
          600: "#FFB6C1",
          700: "#FFB6C1",
          800: "#FFB6C1",
          900: "#FFB6C1",
        },
      },
      spacing: {
        "9/16": "56.25%",
        "3/4": "75%",
        "1/1": "100%",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        "architects-daughter": [
          "var(--font-architects-daughter)",
          "sans-serif",
        ],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3.25rem",
        "6xl": "4rem",
      },
      inset: {
        full: "100%",
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
      minWidth: {
        10: "2.5rem",
      },
      scale: {
        98: ".98",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
