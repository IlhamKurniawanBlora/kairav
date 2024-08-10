<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
      <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
        <div class="max-w-xl mb-6">
          <div>
            <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              new
            </p>
          </div>
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            My
            List
            <span class="inline-block text-deep-purple-accent-400">Project</span>
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            A Collection of My IT Accomplishments: Demonstrating My Skills and Expertise
          </p>
        </div>
        <div class="flex items-center space-x-3">
          <StyleButton>
            Scrolling Down
          </StyleButton>
        </div>
      </div>
      <div class="flex items-center justify-center lg:w-1/2">
        <div class="w-2/5">
          <img class="object-cover" src="https://kitwind.io/assets/kometa/one-girl-phone.png" alt="" />
        </div>
        <div class="w-5/12 -ml-16 lg:-ml-32">
          <img class="object-cover" src="https://kitwind.io/assets/kometa/two-girls-phone.png" alt="" />
        </div>
      </div>
    </div>
    <a
      href="/"
      aria-label="Scroll down"
      class="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
        <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
      </svg>
    </a>
  </div>
  <div class="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
    <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Projects that i've done</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Here are some of the projects I've worked on.
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
                    datetime="2023-10-11" class="mr-8">2024</time>
                <div class="-ml-4 flex items-center gap-x-4"><svg viewBox="0 0 2 2"
                        class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                        <circle cx="1" cy="1" r="1"></circle>
                    </svg>
                    <div class="flex gap-x-2.5">
                        <img src="../public/profile-blck.png" alt="" class="h-6 w-6 flex-none rounded-full bg-white/10">Kairav
                    </div>
                </div>
            </div>
            <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="/tech-blog/post1"><span class="absolute inset-0"></span>The Future of Artificial
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
  <GetinTouch />
</template>
