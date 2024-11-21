/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001f3f", // Dark blue
        secondary: "#f5f5f5", // Light gray
        accent: "#ff69b4", // Pink
        bgLight: "rgb(255 250 250)", // Main background for light mode
        bgDark: "rgb(0 20 39)", // Main background for dark mode
      },
    },
  },
  plugins: [],
};
