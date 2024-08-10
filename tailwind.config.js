/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      'backgroundImage': {
        'contactme-bg': "url('/src/assets/cmebg.jpg')"
      },
    },
  },
  plugins: [],
}

