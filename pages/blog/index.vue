<script setup lang="ts">
// const { data: articles } = await useAsyncData('articles', () => 
//   queryContent('blog')
//     .sort({ date: -1 }) // Urutkan berdasarkan tanggal terbaru
//     .find()
// )
</script>
<template>
<div class="px-4 py-16 mx-auto md:px-24 lg:px-32 lg:py-20 bg-neutral-light dark:bg-neutral-dark text-gray-800 dark:text-white">
      <div class="grid gap-10 lg:grid-cols-2">
        <div class="flex flex-col justify-center md:pr-8 xl:pr-0 ">
          <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <div class="flex lg:justify-start items-center justify-center mb-4 ">
            <img src="../../public/kairav.png" alt="Logo" class="h-10 mr-2" />
          </div>
          </div>
          <div class=" mb-6">
            <TextGradient>
              Coding, <br class="hidden md:block" />
              Coffee,
              <span class="inline-block text-deep-purple-accent-400">& Creativity</span>
            </TextGradient>
            <p class="text-base text-gray-700 md:text-lg">
              "Through this blog, I want to invite you to take a closer look at my creative process, the projects I'm working on, and the things that excite me."
            </p>
          </div>
          <div>
            <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
              Learn more
              <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex items-center justify-center -mx-4 lg:pl-8">
          <div class="flex flex-col items-end px-3">
            <img
              class="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="../../public/ilham05.jpg"
              alt=""
            />
            <img class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="../../public/ilham02.jpg" alt="" />
          </div>
          <div class="px-3">
            <img class="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80" src="../../public/profile-blck.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <HighLight />

    <div class="mx-auto px-6 lg:px-32 pt-8 bg-neutral-light dark:bg-neutral-dark text-gray-800 dark:text-white">
    <div class="mx-auto text-center">
        <TextGradient>Blogs that i've Written</TextGradient>
        <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Dive into a selection of insightful articles and reflections I've penned, sharing my expertise and perspectives on various topics.        </p>
    </div>
    <div class="mx-auto mt-8 grid auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:grid-cols-3 ">
        <!-- First project post -->
        <article
            class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"><time
                    datetime="2023-10-11" class="mr-8">2024</time>
                <div class="-ml-4 flex items-center gap-x-4"><svg viewBox="0 0 2 2"
                        class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                        <circle cx="1" cy="1" r="1"></circle>
                    </svg>
                    <div class="flex gap-x-2.5">
                        <img src="../../public/profile-blck.png" alt="" class="h-6 w-6 flex-none rounded-full bg-white/10">Kairav
                    </div>
                </div>
            </div>
            <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="/blog/second-blog"><span class="absolute inset-0"></span>The Future of Artificial
                    Intelligence: Trends and Challenges</a>
            </h3>
            <div class="text-xs">
              <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
              
              <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
              
              <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
            </div>
        </article>
        <!-- First project post -->
        <article
            class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"><time
                    datetime="2023-10-11" class="mr-8">2024</time>
                <div class="-ml-4 flex items-center gap-x-4"><svg viewBox="0 0 2 2"
                        class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                        <circle cx="1" cy="1" r="1"></circle>
                    </svg>
                    <div class="flex gap-x-2.5">
                        <img src="../../public/profile-blck.png" alt="" class="h-6 w-6 flex-none rounded-full bg-white/10">Kairav
                    </div>
                </div>
            </div>
            <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="/blog/first-blog"><span class="absolute inset-0"></span>The Future of Artificial
                    Intelligence: Trends and Challenges</a>
            </h3>
            <div class="text-xs">
              <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
              
              <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
              
              <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
            </div>
        </article>

    </div>
</div>
  <!-- <div>
    <h1>Blog</h1>
    <ul>
      <li v-for="article in articles" :key="article._path">
        <h2>
          <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
        </h2>
        <p>{{ article.description }}</p>
        <p>Oleh: {{ article.author }} pada {{ article.date }}</p>
      </li>
    </ul>
  </div> -->

  <GetinTouch />
</template>


