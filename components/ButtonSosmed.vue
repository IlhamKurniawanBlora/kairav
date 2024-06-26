<template>
  <div class="flex space-x-4">
    <div class="group relative inline-block" v-for="(sosmedItem, index) in sosmedItems" :key="index">
      <NuxtLink :to="sosmedItem.href">
        <button class="bg-gray-300 focus:outline-none p-2 rounded-full" >
          <component :is="componentsMap[sosmedItem.component]" class="h-6 w-6 transform transition-transform duration-300 group-hover:scale-125 group-hover:text-slate-800" />
        </button>
      </NuxtLink>
      <span
        class="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100"
      >{{ sosmedItem.name }}</span>
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
      name: 'instagram',
      component: 'IconSosmedInstagram',
      href: 'https://www.instagram.com/kairav_/'
    },
    {
      name: 'github',
      component: 'IconSosmedGithub',
      href: 'https://www.instagram.com/kairav_/'
    },{
      name: 'Linkedin',
      component: 'IconSosmedLinkedin',
      href: 'https://www.instagram.com/kairav_/'
    },{
      name: 'Discord',
      component: 'IconSosmedDiscord',
      href: 'https://www.instagram.com/kairav_/'
    },{
      name: 'Email',
      component: 'IconSosmedEmail',
      href: 'https://www.instagram.com/kairav_/'
    },
    
  ]);

</script>