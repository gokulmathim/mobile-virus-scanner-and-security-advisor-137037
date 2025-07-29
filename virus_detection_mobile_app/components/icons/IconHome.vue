<template>
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none">
    <path d="M4 11L12 4l8 7v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7Z"
     :stroke="color" stroke-width="1.5" fill="none" />
    <rect x="9" y="14" width="6" height="7" rx="1.5" :stroke="color" stroke-width="1.5" fill="none" />
  </svg>
</template>
<script setup lang="ts">
const color = "currentColor"
</script>
