/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f86a04",
        secondary: "#e65c00",
        dark: "#000000",
        lightGray: "#f3f4f6",
        customBlack: "#1a1a1a",
      },
      screens: {
        'xs': '480px',       // Extra small devices
        'sm': '640px',       // Small devices (default)
        'md': '768px',       // Medium devices (default)
        'lg': '1024px',      // Large devices (default)
        'xl': '1280px',      // Extra large devices (default)
        '2xl': '1536px',     // 2X large screens (default)
      },
    },
  },
  plugins: [],
}
