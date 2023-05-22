<script lang="ts" setup>
const props = defineProps<{
  code: string;
}>();

const code = computed(() => props.code);
</script>
<template>
  <img :src="`https://img.youtube.com/vi/${code}/0.jpg`" :alt="code" />
</template>
