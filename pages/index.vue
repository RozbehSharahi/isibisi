<script setup lang="ts">
import TheHeadline from "~/comps/TheHeadline.vue";
import TheGrid from "~/comps/TheGrid.vue";
import TheBigButton from "~/comps/TheBigButton.vue";
</script>
<template>
  <the-grid>
    <the-headline>Escolhe um jogo</the-headline>
    <the-big-button class="span-3" @click="navigateTo('/games/fill-game')">
      Mistura de tarefas
    </the-big-button>
  </the-grid>
</template>
