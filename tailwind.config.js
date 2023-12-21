/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // If you are using the src directory structure
    // "./pages/**/*.{js,jsx,ts,tsx}", // If your pages directory is not in src
    // "./components/**/*.{js,jsx,ts,tsx}", // If your components directory is not in src
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
