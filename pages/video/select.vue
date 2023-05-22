<script lang="ts" setup>
import { shortMovies } from "~/video/short-movies";
import { isVideoTypeArray, VideoType } from "~/video/video-type";
import TheVideo from "~/comps/TheVideo.vue";
import TheGrid from "~/comps/TheGrid.vue";
import { useRoute } from "~/composables/use-route";
import { songVideos } from "~/video/song-videos";

const { getIntQueryParameter, getStringQueryParameter } = useRoute();

const timeout = computed(() => getIntQueryParameter("timeout"));

const collectionName = computed(() => getStringQueryParameter("collection"));

const videos = computed(() => {
  const collectionMap: Record<string, VideoType[]> = {
    "short-movies": shortMovies,
    "song-videos": songVideos,
  };

  const collection = collectionMap[collectionName.value] || null;

  if (!isVideoTypeArray(collection)) {
    throw new Error("Collection not found");
  }

  return collection;
});
</script>
<template>
  <the-grid>
    <nuxt-link
      v-for="video of videos"
      :key="video.code"
      :to="{
        path: '/video/watch',
        query: {
          code: video.code,
          timeout: timeout,
        },
      }"
      class="video-thumbnail span-6"
    >
      <div class="un-clickable">
        <the-video :code="video.code" :autoplay="false" />
      </div>
    </nuxt-link>
  </the-grid>
</template>
<style scoped lang="scss">
.video-thumbnail {
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
  }
}
.un-clickable {
  pointer-events: none;
}
</style>
