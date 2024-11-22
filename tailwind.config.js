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
        personal: {
          DEFAULT: "#bfdbfe", // Light blue
          text: "#1e3a8a", // Dark blue
        },
        work: {
          DEFAULT: "#bbf7d0", // Light green
          text: "#065f46", // Dark green
        },
        home: {
          DEFAULT: "#fef3c7", // Light yellow
          text: "#92400e", // Dark yellow
        },
        school: {
          DEFAULT: "#e9d5ff", // Light purple
          text: "#6b21a8", // Dark purple
        },
        social: {
          DEFAULT: "#fbcfe8", // Light pink
          text: "#9d174d", // Dark pink
        },
        creative: {
          DEFAULT: "#fed7aa", // Light orange
          text: "#9a3412", // Dark orange
        },
        other: {
          DEFAULT: "#e5e7eb", // Light gray
          text: "#374151", // Dark gray
        },
      },
    },
  },
  plugins: [],
};
