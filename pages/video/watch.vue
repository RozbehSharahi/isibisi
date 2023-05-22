<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useRoute } from "~/composables/use-route";
import TheVideo from "~/comps/TheVideo.vue";
import TheCountdown from "~/comps/TheCountdown.vue";

const { getIntQueryParameter, getStringQueryParameter } = useRoute();
const router = useRouter();

const timeout = computed(() => getIntQueryParameter("timeout"));
const code = computed(() => getStringQueryParameter("code"));

setTimeout(() => router.push("/"), timeout.value * 1000);
</script>
<template>
  <the-countdown :seconds="timeout" class="mb-2em" />
  <the-video :code="code" :autoplay="true" />
</template>
