/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
    },
    animation: {
        'gradient': 'gradient 8s linear infinite',
    },
    keyframes: {
        'gradient': {
            to: { 'background-position': '200% center' },
        }
    } 
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}