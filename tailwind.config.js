module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,ts}', './dist/**/*.{html,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
};
