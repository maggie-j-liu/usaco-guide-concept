const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    // classes that are generated dynamically, e.g. `rounded-${size}` and must
    // be kept
    safeList: [],
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts}",
      // etc.
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors,
      animation: {
        blob1: "blob 9s infinite",
        blob2: "blob 9s infinite 2s",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)",
          },
          "33%": {
            transform: "scale(1.1) translateX(8rem) translateY(3rem)",
          },
          "66%": {
            transform: "scale(0.9) translateX(-8rem) translateY(-3rem)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
