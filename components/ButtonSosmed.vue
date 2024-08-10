<template>
  <div class="absolute -left-full top-1/2 transform -translate-y-1/2 text-sm font-bold text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-lg">
    Contact Me
  </div>
  <div class="fixed top-1/2 left-0 transform -translate-y-1/2 text-accent-light dark:text-accent-dark flex flex-col items-center space-y-4 p-2 z-20">

    <div 
      v-for="(sosmedItem, index) in sosmedItems" 
      :key="index"
      class="group relative flex items-center justify-center w-12 h-12 mb-2 cursor-pointer
        group-hover:opacity-100 transform group-hover:scale-125">
      <NuxtLink :to="sosmedItem.href">
        <button class="bg-gray-300 focus:outline-none rounded-full">
          <span class="absolute border-2 inset-0 rounded-full bg-yellow-400 opacity-50 group-hover:opacity-100 transition duration-300 transform group-hover:scale-125 flex items-center justify-center">
            <component :is="componentsMap[sosmedItem.component]" class="h-6 w-6 transform transition-transform duration-300 group-hover:scale-125 group-hover:text-slate-800" />
          </span>
        </button>
      </NuxtLink>
      <span class="absolute left-full top-1/2 transform -translate-y-1/2 z-20 mx-3 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
        {{ sosmedItem.name }}
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import IconSosmedInstagram from "~~/components/Icon/Sosmed/Instagram.vue";
  import IconSosmedGithub from "~~/components/Icon/Sosmed/Github.vue";
  import IconSosmedLinkedin from "~~/components/Icon/Sosmed/Linkedin.vue";
  import IconSosmedDiscord from "~~/components/Icon/Sosmed/Discord.vue";
  import IconSosmedEmail from "~~/components/Icon/Sosmed/Email.vue";
  
  const componentsMap = {
	IconSosmedInstagram,
	IconSosmedGithub,
	IconSosmedLinkedin,
	IconSosmedDiscord,
	IconSosmedEmail
};

  interface SosmedItems {
    name: string;
    component: string;
    hover: string;
    href: string;
  }
  const sosmedItems = ref<SosmedItems[]>([
  {
    name: 'Instagram',
    component: 'IconSosmedInstagram',
    href: 'https://www.instagram.com/kairav_/' // Ganti dengan link Instagram Anda
  },
  {
    name: 'GitHub',
    component: 'IconSosmedGithub',
    href: 'https://github.com/[username]' // Ganti dengan link GitHub Anda
  },
  {
    name: 'LinkedIn',
    component: 'IconSosmedLinkedin',
    href: 'https://www.linkedin.com/in/[username]' // Ganti dengan link LinkedIn Anda
  },
  {
    name: 'Discord',
    component: 'IconSosmedDiscord',
    href: 'https://discord.gg/[invitecode]' // Ganti dengan link Discord Anda (jika ada)
  },
  {
    name: 'Email',
    component: 'IconSosmedEmail',
    href: 'mailto:youremail@example.com' // Ganti dengan alamat email Anda
  }
]);

</script>