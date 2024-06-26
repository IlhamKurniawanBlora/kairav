<template>
    <div
      @click="toggleActive"
      :class="['group flex h-12 w-12 md:h-16 md:w-16 xl:h-18 xl:w-18 lg:h-20 lg:w-20 cursor-pointer items-center justify-center rounded-3xl bg-transparent p-2', { 'active': isActive }]"
    >
      <div class="space-y-2">
        <span :class="['block h-1 w-10 origin-center rounded-full bg-primary-light transition-transform ease-in-out', { 'group-hover:translate-y-1.5 group-hover:rotate-45': !isActive, 'translate-y-1.5 rotate-45': isActive }]"></span>
        <span :class="['block h-1 w-8 origin-center rounded-full bg-secondary-light transition-transform ease-in-out', { 'group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45': !isActive, 'w-10 -translate-y-1.5 -rotate-45': isActive }]"></span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isActive: false,
      };
    },
    methods: {
      toggleActive() {
        this.isActive = !this.isActive;
      },
    },
  };
  </script>
  
  <style scoped>
  .group.active span:first-child {
    transform: translateY(6px) rotate(45deg);
  }
  
  .group.active span:last-child {
    width: 2.5rem;
    transform: translateY(-6px) rotate(-45deg);
  }
  </style>
  