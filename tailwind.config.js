/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      red: 'hsl(0, 78%, 62%)',
      cyan: 'hsl(180, 62%, 55%)',
      orange: 'hsl(34, 97%, 64%)',
      blue: 'hsl(212, 86%, 64%)',
      very_dark_blue: 'hsl(234, 12%, 34%)',
      grayish_blue: 'hsl(229, 6%, 66%)',
      very_light_gray: 'hsl(0, 0%, 98%)',
      white: 'hsl(0, 0%, 100%)'
    },
    fontWeight: {
      light: '200',
      normal: '400',
      heavy: '600'
    },
    screens: {
      desktop: '600px'
    }
  },
  plugins: [],
}
