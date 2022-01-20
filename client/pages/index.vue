<template>
  <h1>fjdkajfkla</h1>

  <div>pos: {{ x }}, {{ y }}</div>

  <nuxt-link to="home">home page</nuxt-link>
</template>

<script setup lang="ts">
const { x, y } = useMouse();
</script>
