/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./projects/**/*.{html,js}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        'theme-color': '#14b8a6',
      },
      height: {
        'dropdown-nav-height': 'var(--dropdown-nav-height)',
      },
    },
  },
};
