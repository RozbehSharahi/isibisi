<script setup lang="ts">
import TheVideo from "~/comps/TheVideo.vue";
import { randomSample } from "~/utils/random";
import { VideoType } from "~/video/video-type";

const stopped = ref(false);

const props = defineProps<{
  videos: VideoType[];
  stopAfterXSeconds?: number;
}>();

onMounted(() => {
  if (props.stopAfterXSeconds) {
    setTimeout(() => (stopped.value = true), props.stopAfterXSeconds * 1000);
  }
});

const video = computed((): VideoType => randomSample(props.videos));
</script>
<template>
  <div v-if="!stopped">
    <the-video :code="video.code" />
  </div>
  <div v-else>Acabou o tempo para ver o video</div>
</template>
