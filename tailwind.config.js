/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EC9B27',
        'background': '#E4E1D9',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 