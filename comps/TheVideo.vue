<script lang="ts" setup>
const props = defineProps<{
  code: string;
}>();

const code = computed(() => props.code);
</script>
<template>
  <iframe
    style="width: 1000px; aspect-ratio: 9/6"
    :src="`https://www.youtube.com/embed/${code}?autoplay=1`"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</template>
