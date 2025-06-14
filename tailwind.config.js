/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  
  content: ["./views/**/*.html"],
  // safelist: [
  //   {pattern: /^(btn|navbar|dropdown|menu)/, variants: ['hover', 'focus']},
  // ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}

