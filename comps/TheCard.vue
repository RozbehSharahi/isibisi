<template>
  <div class="the-card">
    <slot />
  </div>
</template>
<style scoped lang="scss">
.the-card {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
