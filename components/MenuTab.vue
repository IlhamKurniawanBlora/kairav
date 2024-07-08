<template>
	<div class="fixed top-1/2 left-0 transform -translate-y-1/2 text-accent-light dark:text-accent-dark flex flex-col items-center space-y-4 p-2 z-20">
	  <div 
		v-for="(menuItem, index) in menuItems" 
		:key="index"
		class="group relative flex items-center justify-center w-12 h-12 mb-2 cursor-pointer
        group-hover:opacity-100 transform group-hover:scale-125 ">
		  <span class="absolute border-2 inset-0 rounded-full bg-yellow-400 opacity-50 group-hover:opacity-100 transition duration-300 transform group-hover:scale-125 flex items-center justify-center">
			<component :is="componentsMap[menuItem.component]"/>
		</span>
	  </div>
	</div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import IconHome from "~~/components/Icon/Home.vue";
  import IconProject from "~~/components/Icon/Project.vue";
  import IconBlog from "~~/components/Icon/Blog.vue";
  import IconFoto from "~~/components/Icon/Foto.vue";
  import IconAbout from "~~/components/Icon/About.vue";

  const componentsMap = {
	IconHome,
	IconProject,
	IconBlog,
	IconFoto,
	IconAbout
};

  interface MenuItems {
    name: string;
    component: string;
    route: string;
  }
  const menuItems = ref<MenuItems[]>([
  {
      name: 'Home',
      component: 'IconHome',
      route: '/',
    },
    {
      name: 'Project',
      component: 'IconProject',
      route: '/#project',
    },
    {
      name: 'Blog',
      component: 'IconBlog',
      route: '/#blog',
    },
    {
      name: 'Foto',
      component: 'IconFoto',
      route: '/#gallery',
    },
    {
      name: 'About',
      component: 'IconAbout',
      route: '/#about',
    },
    // Tambahkan item menu lain jika diperlukan
    
  ]);
  </script>
  
  <style scoped>
  /* Tambahkan gaya khusus jika diperlukan */
  </style>