<template>
    <button @click="toggleDarkMode" class="bg-primary-light dark:bg-primary-dark text-neutral-dark dark:text-neutral-light p-2 rounded">
      Toggle Dark Mode
    </button>
  </template>
  
  <script>
  export default {
    methods: {
      toggleDarkMode() {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
      },
    },
    mounted() {
      if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Optional styling */
  </style>
  