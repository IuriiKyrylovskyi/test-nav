<script setup lang="ts">
import Letters from './Letters.vue';
import NavTable from './NavTable.vue';
</script>

<template>
  <div class="table-wrap">
    <Letters />
    <NavTable />
  </div>
</template>

<style scoped>
.table-wrap {
  display: flex;
}
</style>
