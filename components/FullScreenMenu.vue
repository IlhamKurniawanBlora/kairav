<template>
    <div>
      <button @click="toggleMenu" class="absolute top-4 right-4 p-2 bg-yellow-400 rounded-full z-50">
        <IconMenu />
      </button>
  
      <transition name="bubble" mode="out-in">
        <div v-if="menuVisible" class="fixed inset-0 bg-yellow-400 z-40 flex items-center justify-center">
          
          <ul class="text-4xl text-white space-y-4">
            <li v-for="(menuItem, index) in menuItems" :key="index">
              <a :href="menuItem.route" @click="toggleMenu">{{ menuItem.name }}</a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuVisible: false,
        menuItems: [
          { name: 'Home', route: '/' },
          { name: 'Project', route: '/project' },
          { name: 'Gallery', route: '/gallery' },
          { name: 'Blog', route: '/blog' },
          { name: 'About', route: '/about' },
          // Tambahkan item menu lain jika diperlukan
        ],
      };
    },
    methods: {
      toggleMenu() {
        this.menuVisible = !this.menuVisible;
      },
    },
  };
  </script>
  
  <style>
  .bubble-enter-active, .bubble-leave-active {
    transition: transform 0.5s, opacity 0.5s;
  }
  .bubble-enter-from, .bubble-leave-to /* .bubble-leave-active in <2.1.8 */ {
    transform: scale(0);
    opacity: 0;
  }
  </style>
  