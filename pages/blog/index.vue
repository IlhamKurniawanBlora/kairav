<script setup lang="ts">
// const { data: articles } = await useAsyncData('articles', () => 
//   queryContent('blog')
//     .sort({ date: -1 }) // Urutkan berdasarkan tanggal terbaru
//     .find()
// )
</script>
<template>
<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid gap-10 lg:grid-cols-2">
        <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <div class="flex lg:justify-start items-center justify-center mb-4 ">
            <img src="../../public/kairav.png" alt="Logo" class="h-10 mr-2" />
          </div>
          </div>
          <div class="max-w-xl mb-6">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Coding, <br class="hidden md:block" />
              Coffee,
              <span class="inline-block text-deep-purple-accent-400">& Creativity</span>
            </h2>
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
<div class="w-full dark:bg-gray-800">

<div class="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
    <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">From The Blog</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Here are some of the Blog I've Written.
        </p>
    </div>
    <div class="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
        <!-- First blog post -->
        <article
            class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"><time
                    datetime="2023-10-11" class="mr-8">Oct 11, 2023</time>
                <div class="-ml-4 flex items-center gap-x-4"><svg viewBox="0 0 2 2"
                        class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                        <circle cx="1" cy="1" r="1"></circle>
                    </svg>
                    <div class="flex gap-x-2.5">
                        <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="" class="h-6 w-6 flex-none rounded-full bg-white/10">John
                    </div>
                </div>
            </div>
            <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="/tech-blog/post1"><span class="absolute inset-0"></span>The Future of Artificial
                    Intelligence: Trends and Challenges</a>
            </h3>
        </article>
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

    </div>
</div>

</div>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <pattern id="4314d5df-c4ea-4854-be21-f1fdbb6fe951" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#4314d5df-c4ea-4854-be21-f1fdbb6fe951)" width="52" height="24"></rect>
          </svg>
          <span class="relative">The</span>
        </span>
        quick, brown fox jumps over a lazy dog
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
      </p>
    </div>
  </div>
  <GetinTouch />
</template>


