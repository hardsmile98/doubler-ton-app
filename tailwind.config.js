/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      white: '#FFFFFF',
      black: '#000000',
      primary: {
        light: '#12C57E',
        dark: '#12C57E',
      },
      label: {
        secondary: {
          light: '#828282',
          dark: '#C2C2C2',
        },
      },
      bg: {
        primary: {
          light: '#FCFCFC',
          dark: '#1C1B29',
        },
        secondary: {
          light: '#F1F1F1',
          dark: '#1E2432',
        },
      },
      separator: {
        light: '#F2F2F2',
        dark: '#3A435A',
      },
    },
  },
  plugins: [],
};