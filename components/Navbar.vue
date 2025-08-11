<template>
  <nav :class="['bg-transparent fixed w-full transition-all duration-300', { 'bg-opacity-90 bg-white dark:bg-black shadow-md ': isScrolled, 'bg-opacity-50': !isScrolled }]">
    <div class="container mx-auto p-4 flex justify-between items-center">
      <!-- Logo Section -->
      <div class="flex items-center">
        <p class="text-xl font-semibold text-slate-800 dark:text-primary-dark px-4">KAIRAV <span>
          <DarkModeToggle />
        </span></p>
      </div>
      <!-- Menu Toggle Section -->
      <div class="flex items-center">
        <div @click="playMenuSound">
          <FullScreenMenu/>
        </div>
      </div>
    </div>
    
    <!-- Audio element for sound effect -->
    <audio ref="menuSoundEffect" preload="auto">
      <source src="/public/sound-effect/menu-sound-effect.mp3" type="audio/mpeg">
    </audio>
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
    playMenuSound() {
      try {
        // Reset audio to beginning and play
        this.$refs.menuSoundEffect.currentTime = 0;
        this.$refs.menuSoundEffect.play().catch(error => {
          console.log('Audio play failed:', error);
        });
      } catch (error) {
        console.log('Sound effect error:', error);
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    
    // Preload audio for better performance
    if (this.$refs.menuSoundEffect) {
      this.$refs.menuSoundEffect.volume = 0.5; // Set volume to 50%
    }
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

/* Add hover effect for better UX */
.flex.items-center div:hover {
  cursor: pointer;
}
</style>