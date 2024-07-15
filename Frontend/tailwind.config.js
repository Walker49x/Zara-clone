/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#f5f5dc', // Custom beige color
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};