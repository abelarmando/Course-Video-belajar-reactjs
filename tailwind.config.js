/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerheaderImg: "url('./images/Background_Image/Background_banner.jpg')",
      },
    },
  },
  plugins: [],
}