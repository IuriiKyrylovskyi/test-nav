<script setup lang="ts">
import { key } from 'src/store';
import { useStore } from 'vuex';
import NavComponent from './NavComponent.vue';
import RangeComponent from './RangeComponent.vue';

const store = useStore(key);
</script>

<template>
  <NavComponent />

  <RangeComponent />

  <div>{{ store.state.prevFrequency }}</div>
  <div>{{ store.state.nextFrequency }}</div>

  <button @click="$store.commit('increaseFrequency', store.state.isPrevActive)">
    ++++
  </button>
  <button @click="$store.commit('decreaseFrequency', store.state.isPrevActive)">
    -----
  </button>
</template>
<style scoped></style>
