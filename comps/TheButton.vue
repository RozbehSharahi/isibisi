<script lang="ts" setup>
const props = defineProps<{
  color?: "green" | "red";
}>();

const color = ref(props.color || "green");
</script>
<template>
  <button class="the-button" :class="`color-${color}`">
    <slot />
  </button>
</template>
<style lang="scss" scoped>
.the-button {
  padding: 0.7em;
  border-radius: 1em;
  background: #151515;
  color: #fff;
  font-weight: bold;

  &.color-red {
    background: crimson;
  }
}
</style>
