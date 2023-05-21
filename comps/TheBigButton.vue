<template>
  <div class="the-big-button">
    <div>
      <slot />
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.the-big-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 3/1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  transition: all 0.3s;
  cursor: pointer;
  background: #e3ea1e;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
