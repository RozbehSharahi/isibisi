<script lang="ts" setup>
import TheGrid from "~/comps/TheGrid.vue";

const props = defineProps<{
  currentPoints: number;
  max?: number;
  minToAchieve?: number;
}>();

const max = ref(props.max || 15);
const currentPoints = computed(() => props.currentPoints);
const points = computed(() => Array(max.value).fill(true));
const columns = computed(() => 12);
</script>
<template>
  <div class="the-points">
    <the-grid :columns="columns">
      <div
        v-for="(point, index) in points"
        :key="index"
        class="point span-1"
        :class="index < currentPoints ? 'green' : ''"
      ></div>
    </the-grid>
  </div>
</template>
<style lang="scss" scoped>
.point {
  border-radius: 1000px;
  background: #eee;
  aspect-ratio: 1/1;
  transition: all 0.3s;

  &.green {
    transform: scale(1.3);
    background: #068100;
  }
}
</style>
