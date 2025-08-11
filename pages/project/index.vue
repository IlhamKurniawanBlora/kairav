<template>
  <div>
    <!-- Hero Section -->
    <div class="px-4 py-16 mx-auto md:px-24 lg:px-32 lg:py-20 bg-neutral-light dark:bg-neutral-dark text-gray-800 dark:text-white">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class="mb-16 lg:mb-0 lg:pr-5">
          <div class="mb-6">
            <div>
              <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Portfolio
              </p>
            </div>
            <h1 class="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent text-4xl lg:text-6xl font-bold mb-6">
              My Projects
            </h1>
            <p class="text-base text-gray-700 dark:text-gray-300 md:text-lg max-w-xl">
              A collection of my IT accomplishments, showcasing innovative solutions and technical expertise across various domains.
            </p>
          </div>
          <div class="flex items-center space-x-3">
            <button class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore Projects
            </button>
          </div>
        </div>
        <div class="flex items-center justify-center lg:w-1/2">
          <div class="w-2/5">
            <img class="object-cover rounded-lg shadow-2xl" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400" alt="Development" />
          </div>
          <div class="w-5/12 -ml-16 lg:-ml-32">
            <img class="object-cover rounded-lg shadow-2xl" src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=400" alt="Technology" />
          </div>
        </div>
      </div>
      
      <!-- Scroll Down Arrow -->
      <a
        href="#projects"
        aria-label="Scroll down"
        class="flex items-center justify-center w-12 h-12 mx-auto text-gray-600 dark:text-gray-400 duration-300 transform border-2 border-gray-400 dark:border-gray-500 rounded-full hover:text-blue-600 hover:border-blue-600 hover:shadow-lg hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 12 12" fill="currentColor">
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
        </svg>
      </a>
    </div>

    <!-- Projects Grid Section -->
    <div id="projects" class="mx-auto px-6 lg:px-32 py-16 bg-white dark:bg-gray-900">
      <div class="mx-auto text-center mb-12">
        <h2 class="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent text-3xl lg:text-5xl font-bold mb-4">
          Featured Projects
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Take a look at some of the projects I've crafted, highlighting my skills, creativity, and commitment to quality solutions.
        </p>
      </div>

      <div class="mx-auto mt-12 grid auto-rows-fr grid-cols-1 gap-8 lg:grid-cols-3">
        
        <!-- Jurutani Project -->
        <article class="group relative isolate flex flex-col justify-end overflow-hidden rounded-3xl bg-gray-900 dark:bg-gray-800 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <img src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600" alt="Jurutani" class="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110">
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
          <div class="absolute inset-0 -z-10 rounded-3xl ring-1 ring-inset ring-gray-900/10"></div>
          
          <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <time datetime="2024" class="mr-8 bg-blue-600/20 px-2 py-1 rounded-full">2024</time>
            <div class="-ml-4 flex items-center gap-x-4">
              <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                <circle cx="1" cy="1" r="1"></circle>
              </svg>
              <div class="flex gap-x-2.5 items-center">
                <div class="h-6 w-6 flex-none rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">K</div>
                <span class="text-sm font-medium">Kairav</span>
              </div>
            </div>
          </div>
          
          <h3 class="mt-3 text-xl font-bold leading-6 text-white group-hover:text-blue-300 transition-colors">
            <NuxtLink :to="`/project/jurutani`">
              <span class="absolute inset-0"></span>
              Jurutani - Digital Agriculture Platform
            </NuxtLink>
          </h3>
          
          <p class="mt-2 text-sm text-gray-300 line-clamp-2">
            Innovative agricultural management system with IoT integration and real-time monitoring capabilities.
          </p>
          
          <div class="flex flex-wrap gap-2 mt-4">
            <span class="bg-green-600/20 text-green-300 text-xs px-2 py-1 rounded-full">Vue.js</span>
            <span class="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">IoT</span>
            <span class="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full">Agriculture</span>
          </div>
          
          <div class="flex gap-2 mt-4">
            <button type="button" class="flex-1 bg-blue-600/20 border border-blue-400/30 text-blue-300 rounded-lg px-3 py-2 text-sm transition-all duration-300 hover:bg-blue-600/40 hover:border-blue-400">
              Live Demo
            </button>
            <button type="button" class="flex-1 bg-gray-600/20 border border-gray-400/30 text-gray-300 rounded-lg px-3 py-2 text-sm transition-all duration-300 hover:bg-gray-600/40 hover:border-gray-400">
              GitHub
            </button>
          </div>
        </article>

        <!-- RuangNu Project -->
        <article class="group relative isolate flex flex-col justify-end overflow-hidden rounded-3xl bg-gray-900 dark:bg-gray-800 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600" alt="RuangNu" class="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110">
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
          <div class="absolute inset-0 -z-10 rounded-3xl ring-1 ring-inset ring-gray-900/10"></div>
          
          <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <time datetime="2024" class="mr-8 bg-purple-600/20 px-2 py-1 rounded-full">2024</time>
            <div class="-ml-4 flex items-center gap-x-4">
              <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                <circle cx="1" cy="1" r="1"></circle>
              </svg>
              <div class="flex gap-x-2.5 items-center">
                <div class="h-6 w-6 flex-none rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white text-xs font-bold">K</div>
                <span class="text-sm font-medium">Kairav</span>
              </div>
            </div>
          </div>
          
          <h3 class="mt-3 text-xl font-bold leading-6 text-white group-hover:text-purple-300 transition-colors">
            <NuxtLink :to="`/project/ruangnu`">
              <span class="absolute inset-0"></span>
              RuangNu - Co-working Space Management
            </NuxtLink>
          </h3>
          
          <p class="mt-2 text-sm text-gray-300 line-clamp-2">
            Modern workspace booking and management system with integrated payment and scheduling features.
          </p>
          
          <div class="flex flex-wrap gap-2 mt-4">
            <span class="bg-orange-600/20 text-orange-300 text-xs px-2 py-1 rounded-full">React</span>
            <span class="bg-green-600/20 text-green-300 text-xs px-2 py-1 rounded-full">Node.js</span>
            <span class="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">Management</span>
          </div>
          
          <div class="flex gap-2 mt-4">
            <button type="button" class="flex-1 bg-purple-600/20 border border-purple-400/30 text-purple-300 rounded-lg px-3 py-2 text-sm transition-all duration-300 hover:bg-purple-600/40 hover:border-purple-400">
              Live Demo
            </button>
            <button type="button" class="flex-1 bg-gray-600/20 border border-gray-400/30 text-gray-300 rounded-lg px-3 py-2 text-sm transition-all duration-300 hover:bg-gray-600/40 hover:border-gray-400">
              GitHub
            </button>
          </div>
        </article>

        <!-- AgriNuclear Project -->
        <article class="group relative isolate flex flex-col justify-end overflow-hidden rounded-3xl bg-gray-900 dark:bg-gray-800 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600" alt="AgriNuclear" class="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110">
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
          <div class="absolute inset-0 -z-10 rounded-3xl ring-1 ring-inset ring-gray-900/10"></div>
          
          <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <time datetime="2024" class="mr-8 bg-green-600/20 px-2 py-1 rounded-full">2024</time>
            <div class="-ml-4 flex items-center gap-x-4">
              <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                <circle cx="1" cy="1" r="1"></circle>
              </svg>
              <div class="flex gap-x-2.5 items-center">
                <div class="h-6 w-6 flex-none rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center text-white text-xs font-bold">K</div>
                <span class="text-sm font-medium">Kairav</span>
              </div>
            </div>
          </div>
          
          <h3 class="mt-3 text-xl font-bold leading-6 text-white group-hover:text-green-300 transition-colors">
            <NuxtLink :to="`/project/agrinuclear`">
              <span class="absolute inset-0"></span>
              AgriNuclear - Nuclear Agriculture Research
            </NuxtLink>
          </h3>
          
          <p class="mt-2 text-sm text-gray-300 line-clamp-2">
            Advanced research platform for nuclear techniques in agriculture with data visualization and analysis tools.
          </p>
          
          <div class="flex flex-wrap gap-2 mt-4">
            <span class="bg-red-600/20 text-red-300 text-xs px-2 py-1 rounded-full">Python</span>
            <span class="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">Data Science</span>
            <span class="bg-green-600/20 text-green-300 text-xs px-2 py-1 rounded-full">Research</span>
          </div>
          
          <div class="flex gap-2 mt-4">
            <button type="button" class="flex-1 bg-green-600/20 border border-green-400/30 text-green-300 rounded-lg px-3 py-2 text-sm transition-all duration-300 hover:bg-green-600/40 hover:border-green-400">
              Live Demo
            </button>
            <button type="button" class="flex-1 bg-gray-600/20 border border-gray-400/30 text-gray-300 rounded-lg px-3 py-2 text-sm transition-all duration-300 hover:bg-gray-600/40 hover:border-gray-400">
              GitHub
            </button>
          </div>
        </article>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 py-16">
      <div class="max-w-4xl mx-auto text-center px-6">
        <h3 class="text-3xl font-bold text-white mb-4">
          Interested in Working Together?
        </h3>
        <p class="text-blue-100 text-lg mb-8">
          Let's discuss how we can bring your ideas to life with innovative technology solutions.
        </p>
        <button class="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
          Get In Touch
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'My Projects - Portfolio',
  meta: [
    { name: 'description', content: 'Explore my collection of innovative IT projects showcasing technical expertise across various domains including agriculture, workspace management, and research platforms.' }
  ]
})
</script>