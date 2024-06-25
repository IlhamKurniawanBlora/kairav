/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#fff92b', // Warna kuning terang
          dark: '#f8af18',  // Warna kuning gelap
        },
        secondary: {
          light: '#fffcb3', // Warna kuning sangat terang
          dark: '#fde800',  // Warna kuning cerah
        },
        accent: {
          light: '#ffffde', // Warna kuning pucat
          dark: '#fff92b',  // Warna kuning terang
        },
        neutral: {
          light: '#f3f4f6', // Warna abu-abu terang
          dark: '#374151',  // Warna abu-abu gelap
        },
      },
    },
  },
  plugins: [],
  
}

