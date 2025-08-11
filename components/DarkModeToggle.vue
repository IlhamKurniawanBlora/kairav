<template>
    
  <button  @click="toggleDarkMode"
        class="h-12 w-12 rounded-lg p-2">
        <IconSun class="dark:hidden block" />
        <IconMoon class="hidden dark:block"/>
        
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
  