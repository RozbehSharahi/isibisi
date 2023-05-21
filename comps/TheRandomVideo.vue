<script setup lang="ts">
import TheVideo from "~/comps/TheVideo.vue";
import { randomSample } from "~/utils/random";

type VideoType = {
  code: string;
};

const videos = ref<VideoType[]>([
  { code: "Hrph2EW9VjY" },
  { code: "pVHKp6ffURY" },
  { code: "cvvd-9azD1M" },
  { code: "1V_xRb0x9aw" },
]);

const video = computed((): VideoType => randomSample(videos.value));
</script>
<template>
  <the-video :code="video.code" />
</template>
