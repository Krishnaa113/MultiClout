/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'seekho-bg': '#ffffff',
        'seekho-card': '#f8faff',
        primary: {
          light: '#33c9df',
          DEFAULT: '#00b8d9',
          dark: '#0092ad',
        },
        navy: {
          light: '#2c5387',
          DEFAULT: '#1e3a5f',
          dark: '#112238',
        }
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
