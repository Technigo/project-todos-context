/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00003f", // Dark blue
        secondary: "#fafafa", // Light gray
        accent: "#fbcfe8", // Pink
        darkAccent: "#E959A0", // Dark pink
        bgLight: "#fffafa", // Main background for light mode
        bgDark: "#001427", // Main background for dark mode

        // Category colors:
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
          DEFAULT: "#f0f0f0", // Light gray
          text: "#374151", // Dark gray
        },
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(to top right, #e05298, #ff69b4, #ff85c0)",
      },
    },
  },
  plugins: [],
};
