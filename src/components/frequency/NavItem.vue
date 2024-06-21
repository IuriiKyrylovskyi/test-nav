<script setup lang="ts">
import { INavItem } from '@/interfaces/navItems';
import insertDot from '@/helpers/insertDot';

const props = defineProps<{
  item: INavItem;
}>();
const { item } = props;
</script>

<template>
  <li class="nav-item">
    <p class="number">{{ item.id }}</p>
    <p class="frequency" :class="{ active: item.isActive }">
      {{ insertDot(item.frequency) }}
    </p>
  </li>
</template>

<style scoped>
.nav-item {
  display: flex;
  font-size: 22px;
  font-weight: 600;
  border: 1px solid #ffffff;
}
.number {
  display: flex;
  padding: 4px 16px;
  min-width: 47px;
  border-right: 1px solid #ffffff;
}
.frequency {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  min-width: 150px;
}
.active {
  color: #02afb9;
}
</style>
