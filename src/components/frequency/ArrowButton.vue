<script setup lang="ts">
import { NavPositions } from '@/interfaces/navItems';
import { computed } from 'vue';
const props = defineProps<{
  position: NavPositions;
}>();
const { position } = props;
const emit = defineEmits<{
  (e: 'handleClick'): void;
}>();
const handleClick = () => {
  emit('handleClick');
};
</script>

<template>
  <div class="arrow-button" :class="position" @click="handleClick"></div>
</template>

<style scoped lang="less">
.arrow-button {
  cursor: pointer;
  transition: all 0.3s ease;
}
.top {
  width: 0;
  height: 0;
  border-style: solid;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  border-bottom: 12px solid #ffffff;
  border-top: 0;
  &:hover {
    border-bottom: 12px solid #bcbcbc;
  }
}
.bottom {
  width: 0;
  height: 0;
  border-style: solid;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  border-top: 12px solid #ffffff;
  border-bottom: 0;
  &:hover {
    border-top: 12px solid #bcbcbc;
  }
}
.left {
  width: 0;
  height: 0;
  border-style: solid;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 12px solid #ffffff;
  border-left: 0;
  &:hover {
    border-right: 12px solid #bcbcbc;
  }
}
.right {
  width: 0;
  height: 0;
  border-style: solid;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 12px solid #ffffff;
  border-right: 0;
  &:hover {
    border-left: 12px solid #bcbcbc;
  }
}
</style>
