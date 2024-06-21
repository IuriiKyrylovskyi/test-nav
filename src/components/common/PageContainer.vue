<script setup lang="ts"></script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
</style>
