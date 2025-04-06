/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a56db", // Changed from potentially undefined primary color
        secondary: "#6B7280",
        background: {
          light: "#ffffff",
          dark: "#0a0a0a",
        },
        text: {
          light: "#171717",
          dark: "#f5f5f5",
        }
      },
    },
  },
  plugins: [],
  darkMode: "media",
} 