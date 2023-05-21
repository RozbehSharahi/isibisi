<template>
  <the-grid class="the-navigation">
    <strong class="span-1">ISIBISI</strong>
    <nuxt-link class="span-1 text-center bg-black" to="/">Homepage</nuxt-link>
  </the-grid>
</template>
<script setup>
import TheGrid from "~/comps/TheGrid.vue";
</script>
<style scoped lang="scss">
.the-navigation {
  padding: 1em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #3b3b3b;
  color: #fff;
  margin-bottom: 1em;
}
</style>
