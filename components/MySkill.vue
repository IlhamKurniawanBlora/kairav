<template>
    <div class="bg-gray-100 sm:p-10 md:p-16 lg:p-20 dark:bg-neutral-dark text-gray-800 dark:text-white">
      <div class="flex justify-between items-center gap-10 mb-8 text-center">
        <div>
          <h2 class="text-gray-600 font-bold mb-4">LANGUAGE & FRAMEWORK</h2>
          <p class="text-gray-700">
            <span v-for="(item, index) in languagesFrameworks" :key="index" class="font-bold">
              {{ item }}<span v-if="index < languagesFrameworks.length - 1"> | </span>
            </span>
          </p>
        </div>
        <div>
          <h2 class="text-gray-600 font-bold mb-4">TOOLS</h2>
          <p class="text-gray-700">
            <span v-for="(item, index) in tools" :key="index" class="font-bold">
              {{ item }}<span v-if="index < tools.length - 1"> | </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MySkill',
    data() {
      return {
        languagesFrameworks: [
          'HTML', 'CSS', 'Javascript', 'Typescript', 'React', 'NextJS',
          'TailwindCSS', 'Bootstrap', 'NodeJS', 'ExpressJS', 'MongoDB',
          'MySQL', 'Firebase', 'PHP', 'Laravel', 'Python'
        ],
        tools: [
          'Visual Studio Code', 'Jet Brains', 'Git', 'Github', 'Figma',
          'Adobe Photoshop', 'Adobe Premiere Pro', 'Adobe After Effects'
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Tambahan styling bisa ditaruh di sini jika perlu */
  </style>
  