<script lang="ts" setup>
import { isVideoTypeArray } from "~/type/video-type";
import TheGrid from "~/comps/TheGrid.vue";
import { useRoute } from "~/composables/use-route";
import { videoCollections } from "~/video-collections";
import TheVideoTeaser from "~/comps/TheVideoTeaser.vue";

const { getIntQueryParameter, getStringQueryParameter } = useRoute();

const timeout = computed(() => getIntQueryParameter("timeout"));
const collectionName = computed(() => getStringQueryParameter("collection"));
const videos = computed(() => {
  const collection = videoCollections.get(collectionName.value);

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
        <the-video-teaser :code="video.code" />
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
