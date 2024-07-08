/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  content: [],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        float2: 'float2 4s ease-in-out infinite',
      },
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
          dark: '#010001',  // Warna abu-abu gelap
        },
      },
    },
  },
  plugins: [],
  
}

