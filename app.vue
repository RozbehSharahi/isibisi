<script setup>
import TheNavigation from "~/comps/TheNavigation.vue";
import TheContainer from "~/comps/TheContainer.vue";
</script>
<template>
  <the-container>
    <the-navigation />
    <nuxt-page />
  </the-container>
</template>
<style>
body {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}
</style>
