/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', 'test.html'],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      display: ['Nunito', 'sans-serif'],
      body: ['Nunito', 'sans-serif']
      },
    extend: {},
  },
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // ...
  ],
}

