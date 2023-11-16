/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'hero-pattern': "url('https://i.ibb.co/K0jHj0t/bg.jpg')",
      'hero-footer': "url('https://i.ibb.co/wRtxtGC/image.png')"
    }},
  },
  plugins: [require("daisyui")],
}

