<script lang="ts" setup>
const props = defineProps<{
  tag?: string;
}>();

const tag = props.tag || "div";
</script>
<template>
  <component :is="tag" class="the-container">
    <slot />
  </component>
</template>
<style scoped lang="scss">
.the-container {
  width: 800px;
  margin: 0 auto;
}
</style>
