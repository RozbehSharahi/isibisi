<script lang="ts" setup>
const props = defineProps<{
  seconds: number;
}>();

const emit = defineEmits(["finished"]);

const secondsLeft = ref(props.seconds);
const finish = computed(() => Math.floor(Date.now() / 1000));
const now = () => Math.floor(Date.now() / 1000);
const timeLeft = computed(() => {
  const date = new Date(0);
  date.setSeconds(secondsLeft.value);
  return date.toISOString().substring(14, 19);
});

watch(secondsLeft, () => {
  if (secondsLeft <= 0) {
    emit("finished");
  }
});

onMounted(() => {
  setInterval(() => {
    secondsLeft.value = props.seconds - (now() - finish.value);
  }, 1);
});
</script>
<template>
  <div class="the-countdown">{{ timeLeft }}</div>
</template>
<style lang="scss" scoped>
.the-countdown {
  display: inline-flex;
  height: 5em;
  width: 5em;
  border-radius: 100em;
  justify-content: center;
  align-items: center;
  background: crimson;
  font-weight: bold;
  color: #fff;
}
</style>
