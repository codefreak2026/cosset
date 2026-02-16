/** @type {import('tailwindcss').Config} */
module.exports = {
  // Disable class-based dark mode so `dark:` utilities won't apply via the `.dark` class
  // Keep media-based dark support off by setting to 'media' (prefers-color-scheme),
  // but this project will remain styled for the light theme only.
  darkMode: 'media',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // keep default for now; you can add custom colors here
    },
  },
  plugins: [],
};
