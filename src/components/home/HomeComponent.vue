<script setup lang="ts">
import PageContainer from '../common/PageContainer.vue';
import Keyboard from './Keyboard.vue';
import Controls from './Controls.vue';
import insertDot from '@/helpers/insertDot';
</script>

<template>
  <PageContainer>
    <Keyboard />
    <Controls />
    <div class="">{{ $store.state.navItems }}</div>
    <div class="">{{ insertDot($store.state.entered) }}</div>
  </PageContainer>
</template>

<style scoped></style>
