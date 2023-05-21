<script lang="ts" setup>
import TheGrid from "~/comps/TheGrid.vue";

const props = defineProps<{
  currentPoints: number;
  max?: number;
  minToAchieve?: number;
}>();

const emit = defineEmits(["success", "fail", "change"]);

const max = ref(props.max || 15);
const minToAchieve = computed(() => props.minToAchieve || max.value);
const currentPoints = computed(() => props.currentPoints);
const points = computed(() => Array(max.value).fill(true));
const columns = computed(() => Math.min(max.value, 15));

watch(currentPoints, () => {
  emit(currentPoints.value === minToAchieve.value ? "success" : "fail");
});
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
