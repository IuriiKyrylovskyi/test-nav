<script setup lang="ts">
const emit = defineEmits<{
  (e: 'handleClick'): void;
}>();
const handleClick = () => {
  emit('handleClick');
};
</script>

<template>
  <div class="push-button">
    <div class="button push-button__inner" @click="handleClick"></div>
  </div>
</template>

<style scoped lang="less">
.push-button {
  flex: 0 0 60px;
  width: 60px;
  height: 60px;
  aspect-ratio: 1 / 1;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  overflow: hidden;
  &__inner {
    flex: 0 0 52px;
    width: 52px;
    height: 52px;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    overflow: hidden;
    cursor: pointer;
  }
}
</style>
