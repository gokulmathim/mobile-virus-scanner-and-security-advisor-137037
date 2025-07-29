<template>
  <div class="app-main">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Set root color variables for theming (mobile root-level)
onMounted(() => {
  document.documentElement.style.setProperty('--color-primary', '#2196F3')
  document.documentElement.style.setProperty('--color-secondary', '#607D8B')
  document.documentElement.style.setProperty('--color-accent', '#00C853')
  document.documentElement.style.setProperty('--color-bg', '#FAFAFA')
})
</script>

<style>
body, html, #__nuxt, .app-main {
  background: var(--color-bg, #fafafa);
  min-height: 100vh;
}
</style>
