/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#646cff',
        secondary: '#535bf2',
      },
      backgroundColor: {
        'dark': '#121212',
      },
    },
  },
  plugins: [],
}