/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this matches your file paths
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        julius: ['"Julius Sans One"', 'sans-serfid'],
      },
    },
  },
  plugins: [],
}
