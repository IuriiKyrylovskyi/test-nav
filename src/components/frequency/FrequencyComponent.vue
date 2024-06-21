<script setup lang="ts">
import NavComponent from './NavComponent.vue';
import RangeComponent from './RangeComponent.vue';
</script>

<template>
  <div class="">{{ $store.state.entered }}</div>
  <NavComponent />
  <RangeComponent />
</template>
<style scoped></style>
