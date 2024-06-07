/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
    },
    container: {
      center: true
    },
    colors: {
        'primary': '#1a191d',
        'secondary': '#3a393e',
        'accent': '#6a696e',
        'accent2': '#9a999e',
    },
    boxShadow: {
      'fz': '10px 10px 5px 1px rgba(255, 255, 255, .2)',
      'fz2': '5px 5px 2px 1px rgba(255, 255, 255, .2)',
    }
  },
  plugins: [],
};
