<template>
  <nav :class="['bg-transparent fixed w-full transition-all duration-300', { 'bg-opacity-90 bg-white dark:bg-black shadow-md ': isScrolled, 'bg-opacity-50': !isScrolled }]">
    <div class="container mx-auto px-4 py-2 flex justify-around items-center">
      <!-- Logo Section -->
      <div class="flex items-center space-x-2">
        <span class="text-lg font-semibold text-slate-800 dark:text-primary-dark">KAIRAV</span>
      </div>

      <!-- Language Switcher Section -->
      <div class="flex items-center space-x-2">
        <label for="Toggle3" class="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-100">
		<input id="Toggle3" type="checkbox" class="hidden peer border-2">
		<span class="px-4 py-2 rounded-l-md dark:bg-primary-dark peer-checked:dark:bg-gray-700 bg-primary-dark peer-checked:bg-gray-200">IDN</span>
		<span class="px-4 py-2 rounded-r-md dark:bg-gray-700 peer-checked:dark:bg-primary-dark bg-gray-200 peer-checked:bg-primary-dark">EN</span>
	</label>
      </div>

      <!-- Menu Toggle Section -->
      <div class="flex items-center">
        <DarkModeToggle />
      </div>
    </div>
    <FullScreenMenu/>
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
