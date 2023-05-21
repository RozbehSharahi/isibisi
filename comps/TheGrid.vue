<script lang="ts" setup>
const props = defineProps<{
  columns?: number;
  gap?: string;
}>();

const columns = ref(props.columns || 12);
const gap = computed(() => props.gap || "1em");

const styleVars = ref({
  "--columns": columns.value,
  "--gap": gap.value,
});
</script>
<template>
  <div class="the-grid" :style="styleVars">
    <slot />
  </div>
</template>
<style scoped lang="scss">
.the-grid {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: var(--gap, 1em);

  :deep(> *) {
    grid-column: span 12;
  }

  :deep(> .span-1) {
    grid-column: span 1;
  }

  :deep(> .span-2) {
    grid-column: span 2;
  }

  :deep(> .span-3) {
    grid-column: span 3;
  }

  :deep(> .span-6) {
    grid-column: span 6;
  }
}
</style>
