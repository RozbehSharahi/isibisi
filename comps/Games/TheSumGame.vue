<script lang="ts" setup>
import TheGrid from "~/comps/TheGrid.vue";
import TheCard from "~/comps/TheCard.vue";
import TheFullInput from "~/comps/TheFullInput.vue";

const items = [
  { quest: "2 + 3 = 4 + x", solution: 1 },
  { quest: "9 + 3 = x + 4", solution: 8 },
  { quest: "2 + 3 = 4 + x", solution: 1 },
  { quest: "9 + 3 = x + 4", solution: 8 },
];
</script>
<template>
  <the-grid class="the-sum-game">
    <div v-for="item in items" :key="item.quest" class="quest">
      <the-grid>
        <div
          v-for="questItem in item.quest.split(' ')"
          :key="questItem"
          class="span-1"
        >
          <the-card v-if="questItem !== 'x'" class="p-0">
            <div class="p-1em text-center">{{ questItem }}</div>
          </the-card>
          <the-full-input v-else class="p-1em text-center" />
        </div>
      </the-grid>
    </div>
  </the-grid>
</template>
<style lang="scss" scoped>
.quest {
}
</style>
