/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{html,tsx}", "index.html"],
  theme: {
    extend: {
      zIndex: {
        9999: "9999",
      },
      animation: {
        "spin-1": "rotate180 0.6s ease",
      },
      keyframes: {
        rotate180: {
          '100%': { transform: 'rotate(180deg)' }
        }
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("children", "&>*");
    }),
  ],
};
