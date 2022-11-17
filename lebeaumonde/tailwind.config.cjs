/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      verdana: ["Verdana", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        "green-sapin": "#458966",
        "beige-nounours": "#FFFAF0",
        "black-black": "#242424",
      },
    },
  },
  plugins: [],
};
