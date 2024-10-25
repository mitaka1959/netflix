/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // Next.js app directory (if using app-based routing)
    "./pages/**/*.{js,ts,jsx,tsx}",     // Next.js pages directory
    "./components/**/*.{js,ts,jsx,tsx}",// Components directory
    "./src/**/*.{js,ts,jsx,tsx}",       // If you have a src directory
  ],
  theme: {
    extend: {},  // Extend the default theme here if needed
  },
  plugins: [],    // Add any Tailwind plugins here, if needed
}
