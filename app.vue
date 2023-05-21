<script setup>
import TheContainer from "~/comps/TheContainer.vue";
</script>
<template>
  <the-container style="padding: 2em">
    <nuxt-page />
  </the-container>
</template>
<style>
html {
  height: 100%;
}
body {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
  height: 100%;
}
</style>
