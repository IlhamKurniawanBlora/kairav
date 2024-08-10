<!-- pages/blog/_slug.vue -->
<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>
    <ContentRenderer :value="article" /> {/* Render konten Markdown */}
  </div>
</template>

  
  <script setup lang="ts">
  const route = useRoute()
  const { data: article } = await useAsyncData('article', () => 
    queryContent('blog')
      .where({ _path: `/blog/${route.params.slug}` })
      .findOne()
  )
  </script>
  
  