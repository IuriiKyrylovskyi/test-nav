<script setup lang="ts">
import PageContainer from '../common/PageContainer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <main>
    <PageContainer>
      <RouterView />
      <slot />
    </PageContainer>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
