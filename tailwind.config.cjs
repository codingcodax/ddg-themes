/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: 'white',
      base: 'rgb(var(--gray-90) / <alpha-value>)',
      'gray-90': '#222',
      'blue-30': '#7295f6',
      'blue-40': '#557ff3',
      'blue-50': '#3969ef',
      'blue-60': '#2b55ca',
    },
    extend: {},
  },
  plugins: [],
};
