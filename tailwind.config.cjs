/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#ffffff",
      primaryshade: "#f7f7f7",
      secondary: "#474747",
      secondaryshade: "#3d3d3d",
    },
    fontFamily: {
      main: ["Prompt", "sans-serif"],
      sub: ['"IBM Plex Mono"', "monospace"],
    },
  },
};
