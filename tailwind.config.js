/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      videoxs: '550px',
      videosm: '700px',
      videomd: '1000px',
    },
    extend: {},
  },
  plugins: [],
};
