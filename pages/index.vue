<script setup lang="ts">
import TheHeadline from "~/comps/TheHeadline.vue";
import TheGrid from "~/comps/TheGrid.vue";
import TheBigButton from "~/comps/TheBigButton.vue";
</script>
<template>
  <div class="the-homepage">
    <the-headline>Choose a game</the-headline>
    <the-grid>
      <the-big-button class="span-3" @click="navigateTo('/games/sum-game')">
        Sum game
      </the-big-button>
    </the-grid>
  </div>
</template>
<style lang="scss" scoped>
.the-homepage {
  padding: 2em 0;
}
</style>
