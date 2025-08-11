<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>

<template>
    <KairavChatbot 
        :gemini-api-key="runtimeConfig.public.geminiApiKey"
    />
    <Navbar/>
    <main>
        <slot/>
    </main>
    <ButtonSosmed />
</template>