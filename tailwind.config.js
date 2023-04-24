/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  plugins: [],
  theme: {
    fontFamily: {
      primary: "Roboto, Helvetica, sans-serif"
    },
    colors: {
      // Keep in-sync. with style.css custom properties
      primary: "deepskyblue",
      secondary: "deeppink",
      darkcolor: "#263238",
      graycolor: "#595959",
      lightcolor: "#eee"
    },
  },
};

