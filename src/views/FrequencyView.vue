<script setup lang="ts">
import { useIpcRendererOn } from '@vueuse/electron';
import FrequencyComponent from '../components/frequency/FrequencyComponent.vue';
import { useStore } from '@/store';

const store = useStore();

// !! breaks page
// // enable nodeIntegration if you don't provide ipcRenderer explicitly
// // @see: https://www.electronjs.org/docs/api/webview-tag#nodeintegration
// // remove listener automatically on unmounted
// useIpcRendererOn('vuex-scoreboard-mutation', (event, mutation, ...args) => {
//   console.log(args, store.state);
//   store.commit(mutation.type, mutation.payload);
// });
</script>

<template>
  <div class="">{{ $store.state.entered }}</div>
  <div class="">{{ store.state }}</div>
  <FrequencyComponent />
</template>
