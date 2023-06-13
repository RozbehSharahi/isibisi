<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useRoute } from "~/composables/use-route";
import TheVideo from "~/comps/TheVideo.vue";
import TheCountdown from "~/comps/TheCountdown.vue";

const { getIntQueryParameter, getStringQueryParameter } = useRoute();
const router = useRouter();

const timeout = computed(() => getIntQueryParameter("timeout"));
const timeoutSeconds = computed(() => timeout.value * 1000);
const code = computed(() => getStringQueryParameter("code"));

let theTimeoutPointer = 0;

onMounted(() => {
  theTimeoutPointer = window.setTimeout(
    () => router.push("/"),
    timeoutSeconds.value
  );
});
onUnmounted(() => {
  window.clearTimeout(theTimeoutPointer || 0);
});
</script>
<template>
  <the-countdown :seconds="timeout" class="mb-2em" />
  <the-video :code="code" :autoplay="true" />
</template>
