/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./layout.html"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0},
          "100%": { opacity: 1 }
        }
      },
      variants: {
        animation: ['motion-safe']
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        primary: "#468EF9",
        secondary: "#0C66EE",
        blue: "#2F7CF0",
        black: "#222222",
        gray: "#666666",
        lightgray: "#DDDDDD",
        green: "#28C165",
        red: "#F4574D",
      },
    },
  },
  plugins: [],
};
