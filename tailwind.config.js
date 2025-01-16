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
        bannerfooterImg: "url('./images/Background_Image/Background_footer.jpg')",
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fit, minmax(400px, 1fr))',
      },
    },
  },
  plugins: [],
}