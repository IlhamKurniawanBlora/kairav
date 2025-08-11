<template>
  <button @click="toggleDarkMode"
    class="h-12 w-12 rounded-lg p-2 transition-all duration-200">
    <IconSun class="dark:hidden block" />
    <IconMoon class="hidden dark:block"/>
  </button>
</template>

<script>
export default {
  data() {
    return {
      switchAudio: null
    }
  },
  methods: {
    toggleDarkMode() {
      // Play sound effect first
      this.playSwitchSound();
      
      // Toggle dark mode
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
    },
    
    playSwitchSound() {
      if (process.client && this.switchAudio) {
        try {
          this.switchAudio.currentTime = 0; // Reset to start
          this.switchAudio.play().catch(() => {
            // Handle autoplay policy restrictions
            console.log('Audio autoplay prevented');
          });
        } catch (error) {
          console.warn('Could not play switch sound:', error);
        }
      }
    }
  },
  
  mounted() {
    // Setup dark mode from localStorage
    if (localStorage.getItem('darkMode') === 'true') {
      document.documentElement.classList.add('dark');
    }
    
    // Initialize audio
    if (process.client) {
      try {
        this.switchAudio = new Audio('/sound-effect/swicth-theme-sound-effect.mp3');
        this.switchAudio.volume = 0.3; // Set volume
        this.switchAudio.preload = 'auto'; // Preload audio
      } catch (error) {
        console.warn('Switch theme audio could not be loaded:', error);
      }
    }
  }
}
</script>

<style scoped>
/* Optional styling for better UX */
button {
  transition: transform 0.1s ease;
}

button:active {
  transform: scale(0.95);
}
</style>