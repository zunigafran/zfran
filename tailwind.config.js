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
        primary: '#0f0f1a',
        secondary: '#2b2b3d',
        accent: '#4d4d5e',
    },
    boxShadow: {
      'fz': '5px 5px rgba(0, 0, 0, .1)',
    }
  },
  plugins: [],
};
