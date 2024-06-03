import type { Config } from "tailwindcss";
// const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/dist/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // fontFamily: {
    //   sans: ['"Caros Soft Regular"', ...defaultTheme.fontFamily.sans],
    // },
    extend: {
      colors: {
        second: "#E6AB35",
      },
      textColor: {
        hover: "#E6AB35",
      },
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-bg": "url('/assets/images/bg2.jpg')",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
export default config;
