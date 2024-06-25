
<template>
	<div class="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col items-center space-y-4 p-2">
	  <div 
		v-for="(menuItem, index) in menuItems" 
		:key="index"
		class="group relative flex items-center justify-center w-12 h-12 mb-2 cursor-pointer"
		@mouseover="handleHover(index)"
		@mouseleave="handleLeave(index)"\
	  >
		<span class="absolute inset-0 rounded-full bg-yellow-400 opacity-50 group-hover:opacity-100 transition duration-300 transform group-hover:scale-125 flex items-center justify-center"  @click="navigateTo(menuItem.route)">
			<component :is="componentsMap[menuItem.component]"/>
		</span>
	  </div>
	</div>
  </template>
  
  <script lang="ts" setup>
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
      route: '/project',
    },
    {
      name: 'Blog',
      component: 'IconBlog',
      route: '/blog',
    },
    {
      name: 'Foto',
      component: 'IconFoto',
      route: '/foto',
    },
    {
      name: 'About',
      component: 'IconAbout',
      route: '/about',
    },
    // Tambahkan item menu lain jika diperlukan
    
  ]);

  function handleHover(index) {
    menuItems.value[index].hover = true;
  }

  function handleLeave(index) {
    menuItems.value[index].hover = false;
  }
  </script>
  
  <style scoped>
  /* Tambahkan gaya khusus jika diperlukan */
  </style>
  