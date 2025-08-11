<template>
    <div>
      <ContentDoc v-slot="{ doc }">
        <!-- Hero Section -->
        <div class="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 py-24 overflow-hidden">
          <div class="absolute inset-0 bg-black/20"></div>
          <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div class="text-center">
              <div class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-6">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {{ doc.status || 'Featured Project' }}
              </div>
              
              <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {{ doc.title }}
              </h1>
              
              <p class="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                {{ doc.description }}
              </p>
  
              <div class="flex flex-wrap justify-center gap-3 mb-8">
                <span 
                  v-for="tech in doc.technologies" 
                  :key="tech"
                  class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20"
                >
                  {{ tech }}
                </span>
              </div>
  
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  v-if="doc.demo_url" 
                  :href="doc.demo_url" 
                  target="_blank"
                  class="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  Live Demo
                </a>
                
                <a 
                  v-if="doc.github_url" 
                  :href="doc.github_url" 
                  target="_blank"
                  class="inline-flex items-center px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 border border-white/20"
                >
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Project Details -->
        <div class="bg-white dark:bg-gray-900">
          <!-- Project Overview -->
          <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div class="grid lg:grid-cols-3 gap-12">
              <!-- Main Content -->
              <div class="lg:col-span-2">
                <div class="prose prose-lg dark:prose-invert max-w-none">
                  <ContentRenderer :value="doc" />
                </div>
              </div>
  
              <!-- Sidebar -->
              <div class="lg:col-span-1">
                <div class="sticky top-8 space-y-8">
                  <!-- Project Info -->
                  <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Project Details</h3>
                    
                    <div class="space-y-4">
                      <div v-if="doc.year">
                        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Year</dt>
                        <dd class="text-lg text-gray-900 dark:text-white">{{ doc.year }}</dd>
                      </div>
                      
                      <div v-if="doc.duration">
                        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</dt>
                        <dd class="text-lg text-gray-900 dark:text-white">{{ doc.duration }}</dd>
                      </div>
                      
                      <div v-if="doc.role">
                        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">My Role</dt>
                        <dd class="text-lg text-gray-900 dark:text-white">{{ doc.role }}</dd>
                      </div>
                      
                      <div v-if="doc.team_size">
                        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Team Size</dt>
                        <dd class="text-lg text-gray-900 dark:text-white">{{ doc.team_size }}</dd>
                      </div>
                    </div>
                  </div>
  
                  <!-- Technologies Used -->
                  <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Technologies Used</h3>
                    
                    <div class="grid grid-cols-2 gap-3">
                      <div 
                        v-for="tech in doc.technologies" 
                        :key="tech"
                        class="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
                      >
                        <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ tech }}</span>
                      </div>
                    </div>
                  </div>
  
                  <!-- Key Features -->
                  <div v-if="doc.features" class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h3>
                    
                    <ul class="space-y-3">
                      <li 
                        v-for="feature in doc.features" 
                        :key="feature"
                        class="flex items-start"
                      >
                        <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-sm text-gray-700 dark:text-gray-300">{{ feature }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Related Projects -->
        <div class="bg-gray-50 dark:bg-gray-800 py-16">
          <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Other Projects</h2>
              <p class="text-lg text-gray-600 dark:text-gray-400">Explore more of my work</p>
            </div>
  
            <div class="text-center">
              <NuxtLink 
                to="/project" 
                class="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m0 0l4-4m-4 4l4 4"></path>
                </svg>
                View All Projects
              </NuxtLink>
            </div>
          </div>
        </div>
      </ContentDoc>
    </div>
  </template>
  
  <script setup>
  const route = useRoute()
  
  // SEO Meta
  useHead({
    title: () => `${route.params.slug} - Project Details`,
    meta: [
      { name: 'description', content: 'Detailed overview of project implementation, technologies used, and key features.' }
    ]
  })
  
  // Handle 404
  await queryContent(`project/${route.params.slug}`).findOne().catch(() => {
    throw createError({ statusCode: 404, statusMessage: 'Project not found' })
  })
  </script>