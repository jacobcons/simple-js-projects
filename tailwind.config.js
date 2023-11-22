/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./projects/**/*.{html,js}', './node_modules/flowbite/**/*.js'],
  plugins: [require('flowbite/plugin'), require('flowbite-typography')],
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
