<script lang="ts" setup>
const props = defineProps<{
  color?: "green";
}>();
</script>
<template>
  <div class="the-card" :class="props.color">
    <slot />
  </div>
</template>
<style scoped lang="scss">
.the-card {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &.green {
    background: yellowgreen;
    color: #fff;
  }
}
</style>
