<script setup lang="ts">
import PageContainer from '../common/PageContainer.vue';
import Keyboard from './Keyboard.vue';
import Controls from './Controls.vue';
import insertDot from '@/helpers/insertDot';
</script>

<template>
  <PageContainer>
    <div class="">{{ $store.state.navItems }}</div>
    <div class="">{{ insertDot($store.state.entered) }}</div>
    <Keyboard />
    <Controls />
  </PageContainer>
</template>

<style scoped></style>
