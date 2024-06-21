<script setup lang="ts">
import { keyboard } from 'src/utils/keyboard';
import KeyButton from './KeyButton.vue';
</script>

<template>
  <ul class="keyboard">
    <KeyButton :key="k.id" v-for="k in keyboard" :number="k.number" />
  </ul>
</template>

<style scoped>
.keyboard {
  display: flex;
  gap: 6px;
  justify-content: center;
  width: 100%;
}
</style>
