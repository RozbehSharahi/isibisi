<script lang="ts" setup>
const props = defineProps<{
  code: string;
  autoplay?: boolean;
}>();

const autoplay = computed(() => props.autoplay);
const code = computed(() => props.code);
</script>
<template>
  <iframe
    style="width: 100%; aspect-ratio: 9/6"
    :src="`https://www.youtube.com/embed/${code}?${
      autoplay ? 'autoplay=1' : ''
    }`"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</template>
