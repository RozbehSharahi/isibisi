<script setup lang="ts">
const props = defineProps<{
  modelValue: string | number | null;
}>();

const emit = defineEmits(["update:modelValue"]);
</script>
<template>
  <input
    class="the-full-input"
    type="text"
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>
<style lang="scss" scoped>
.the-full-input {
  display: block;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  background: #eaef58;

  &:hover,
  &:focus {
    background: #e8ee40;
  }
}
</style>
