<template>
  <div class="bg-gray-100 sm:p-6 md:p-10 lg:p-16 xl:p-20 dark:bg-neutral-dark text-gray-800 dark:text-white">
    <div class="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10 mb-8 text-center">
      <div class="w-full md:w-1/2">
        <h2 class="text-gray-600 font-bold mb-4 text-lg md:text-xl">LANGUAGE & FRAMEWORK</h2>
        <p class="text-gray-700 text-sm md:text-base">
          <ButtonBorder v-for="(item, index) in languagesFrameworks" :key="index">
            <span class="font-bold">
              {{ item }}<span v-if="index < languagesFrameworks.length - 1"> </span>
            </span>
          </ButtonBorder>
        </p>
      </div>
      <div class="w-full md:w-1/2">
        <h2 class="text-gray-600 font-bold mb-4 text-lg md:text-xl">TOOLS</h2>
        <p class="text-gray-700 text-sm md:text-base">
          <ButtonBorder v-for="(item, index) in tools" :key="index">
            <span class="font-bold">
              {{ item }}<span v-if="index < tools.length - 1"> </span>
            </span>
          </ButtonBorder>
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
  