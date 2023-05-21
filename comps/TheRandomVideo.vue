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
  { code: "l6rS8Dv5g-8" },
  { code: "l6rS8Dv5g-8" },
  { code: "MsXdUtlDVhk" },
  { code: "ZyhrYis509A" },
  { code: "r2LVJU6Qnkc" },
  { code: "9Wzr9EK47_U" },
  { code: "GibiNy4d4gc" },
  { code: "vP9r6UjCA7I" },
  { code: "uw5ajQ_ya0s" },
  { code: "ZXcTvbLwsRs" },
  { code: "DieDbDmNXE4" },
]);

const video = computed((): VideoType => randomSample(videos.value));
</script>
<template>
  <the-video :code="video.code" />
</template>
