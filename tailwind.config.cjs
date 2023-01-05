/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: 'white',
      black: 'black',
      'gray-90': '#222',
      'blue-30': '#7295f6',
      'blue-40': '#557ff3',
      'blue-50': '#3969ef',
      'blue-60': '#2b55ca',
      'violet-70': '#342e42',
      'green-30': '#7bd66d',
      'green-40': '#63c853',
      'green-50': '#4cba3c',
      'green-60': '#399f29',
    },
    extend: {},
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins: [require('tailwindcss-radix')()],
};
