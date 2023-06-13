<script lang="ts" setup>
import { clearTimeout } from "timers";
import { useRouter } from "vue-router";
import { useRoute } from "~/composables/use-route";
import TheVideo from "~/comps/TheVideo.vue";
import TheCountdown from "~/comps/TheCountdown.vue";

const { getIntQueryParameter, getStringQueryParameter } = useRoute();
const router = useRouter();

const timeout = computed(() => getIntQueryParameter("timeout"));
const code = computed(() => getStringQueryParameter("code"));

const theTimeout = setTimeout(() => router.push("/"), timeout.value * 1000);

onUnmounted(() => clearTimeout(theTimeout));
</script>
<template>
  <the-countdown :seconds="timeout" class="mb-2em" />
  <the-video :code="code" :autoplay="true" />
</template>
