/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#112A4E",
        secondary: "#E8E9EB",
        tertiary: "#09BC8A",
      },
      fontFamily: {
        sans: ['Playfair', 'sans-serif'],
      },
      boxShadow: {
        custom: '0 4px 20px rgba(0, 0, 0, 0.3), 0 6px 10px 1px rgba(0, 255, 255, 0.4)',
      },
    },
  },
  plugins: [],
}
