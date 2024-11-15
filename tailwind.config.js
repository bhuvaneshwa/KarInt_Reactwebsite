/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f86a04", // Add your primary color
        secondary: "#e65c00", // Add another custom color
        dark: "#000000", // Add a dark color if needed
        lightGray: "#f3f4f6", // Add a light gray
        customBlack: "#1a1a1a", // Another black variant
      },
    },
  },
  plugins: [],
}
