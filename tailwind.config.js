/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js, jsx, ts, tsx}",
    "./components/**/*.{jsx, js, ts, tsx}"],
  theme: {
    extend: {
      color: {
        primary: '#161622'
      }
    },
  },
  plugins: [],
}

