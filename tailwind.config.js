const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['node_modules/flowbite-react/**/*.{js,ts,jsx,tsx,}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],

  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      colors: {
        primary: colors.blue,
        secondary: colors.blue,
      },
      
      fontFamily: {
        sans: ['var(--font-custom)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')],
  darkMode: 'class',
};
