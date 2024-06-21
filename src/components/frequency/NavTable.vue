<script setup lang="ts">
import NavItem from './NavItem.vue';
</script>

<template>
  <div class="nav-table">
    <NavItem
      v-for="item in $store.state.navItems"
      :item="item"
      :key="item.id"
    />
  </div>
</template>

<style scoped>
.nav-table {
  border: 3px solid #ffffff;
}
</style>
