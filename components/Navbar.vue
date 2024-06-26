<template>
  <nav :class="['bg-white shadow-md fixed w-full transition-all duration-300', { 'bg-opacity-90': isScrolled, 'bg-opacity-50': !isScrolled }]">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
      <!-- Logo Section -->
      <div class="flex items-center space-x-2">
        <span class="text-lg font-semibold">KAIRAV</span>
      </div>

      <!-- Language Switcher Section -->
      <div class="flex items-center space-x-2">
        <button class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700">EN</button>
        <button class="px-3 py-1 bg-gray-200 text-black rounded hover:bg-gray-400">ID</button>
      </div>

      <!-- Menu Toggle Section -->
      <div class="flex items-center">
        <FullScreenMenu />
      </div>
    </div>
  </nav>
</template>

<script>
import FullScreenMenu from '~/components/FullScreenMenu.vue';

export default {
  components: {
    FullScreenMenu,
  },
  data() {
    return {
      isScrolled: false,
    };
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
nav {
  top: 0;
  z-index: 50;
}
</style>
