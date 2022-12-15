/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'chat': "url('/src/assets/chat.jpeg')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
