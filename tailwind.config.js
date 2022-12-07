/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('../assets/images/dan-gold-220226-1024x576.jpg')",
        "img-1": "url('../assets/images/1.png')",
        "img-2": "url('../assets/images/2.jpg')",
        "img-3": "url('../assets/images/3.jpg')",
        "img-4": "url('../assets/images/4.jpg')",
        "img-5": "url('../assets/images/5.jpg')",
        "img-6": "url('../assets/images/6.webp')",
      },
      boxShadow: {
        "1xbb": "0px 0px 0px 4000px rgba(27, 61, 88, 0.5) inset",
        "1xcc": "0px 0px 0px 4000px rgb(80 80 80 / 51%) inset",
      },
      rotate: {
        135: "135deg",
      },
    },
  },
  plugins: [],
};
