<script setup lang="ts">
import TheHeadline from "~/comps/TheHeadline.vue";
import TheGrid from "~/comps/TheGrid.vue";
import TheBigButton from "~/comps/TheBigButton.vue";
</script>
<template>
  <the-grid>
    <the-headline>Escolhe um jogo</the-headline>
    <the-big-button
      class="span-3"
      @click="navigateTo({ path: '/games/fill-game' })"
    >
      Facil
    </the-big-button>
    <the-big-button
      class="span-3"
      @click="
        navigateTo({
          path: '/games/fill-game',
          query: { hard: 1 },
        })
      "
    >
      Dificil
    </the-big-button>
  </the-grid>
</template>
