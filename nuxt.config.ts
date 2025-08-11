// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      geminiApiKey: process.env.GEMINI_API_KEY || 'AIzaSyARoFgl1_wir-c6ahNMA6WqmarkvNi77UY' // ambil api key dari .env
    }
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' },
      ]
    }
  }
})