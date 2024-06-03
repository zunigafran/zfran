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
        primary: '#1a191d',
        secondary: '#3a393e',
        accent: '#6a696e',
        accent2: '#9a999e',
    },
  },
  plugins: [],
};
