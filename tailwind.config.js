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
      },
      boxShadow: {
        "1xbb": "0px 0px 0px 4000px rgba(27, 61, 88, 0.5) inset",
      },
    },
  },
  plugins: [],
};
