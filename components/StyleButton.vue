<template>
    <button 
      class="text-red hover:before:bg-red border-red-500 relative h-[50px] overflow-hidden border border-primary-dark bg-white dark:bg-black px-8 py-3 text-lg font-semibold rounded text-primary-dark shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-red-500 before:to-yellow-500 before:transition-all before:duration-500 hover:shadow-primary-dark hover:before:left-0 hover:before:w-full group"
      @mouseenter="playHoverSound"
      @click="playClickSound"
    >
      <span class="relative z-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-800 group-hover:text-white">
        <slot />
      </span>
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  // Audio references
  const hoverAudio = ref(null)
  const clickAudio = ref(null)
  
  // Initialize audio objects
  onMounted(() => {
    if (process.client) {
      try {
        hoverAudio.value = new Audio('/sound-effect/hover-sound-effect.mp3')
        clickAudio.value = new Audio('/sound-effect/click-sound-effect.mp3')
        
        // Set volume (optional)
        if (hoverAudio.value) hoverAudio.value.volume = 0.3
        if (clickAudio.value) clickAudio.value.volume = 0.5
        
        // Preload audio files
        hoverAudio.value.preload = 'auto'
        clickAudio.value.preload = 'auto'
      } catch (error) {
        console.warn('Audio files could not be loaded:', error)
      }
    }
  })
  
  // Play hover sound
  const playHoverSound = () => {
    if (process.client && hoverAudio.value) {
      try {
        hoverAudio.value.currentTime = 0 // Reset to start
        hoverAudio.value.play()
      } catch (error) {
        console.warn('Could not play hover sound:', error)
      }
    }
  }
  
  // Play click sound
  const playClickSound = () => {
    if (process.client && clickAudio.value) {
      try {
        clickAudio.value.currentTime = 0 // Reset to start
        clickAudio.value.play()
      } catch (error) {
        console.warn('Could not play click sound:', error)
      }
    }
  }
  </script>