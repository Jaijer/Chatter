/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors:{
        'wheat': 'rgb(246, 244, 235)',
        'skyBlue': 'rgb(145, 200, 228)',
        'grayBlue': 'rgb(116, 155, 194)',
        'deepBlue': 'rgb(70, 130, 169)'
      },
    },
  },
  plugins: [],
}

