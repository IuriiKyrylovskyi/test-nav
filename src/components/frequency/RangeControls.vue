<script setup lang="ts">
import { NavPositions } from '@/interfaces/navItems';
import ArrowButton from './ArrowButton.vue';
import PushButton from './PushButton.vue';
import arrLine from 'src/assets/images/arrow-line.svg';
</script>

<template>
  <div class="range-controls">
    <div class="range-controls__row">
      <ArrowButton
        :position="NavPositions.TOP"
        @click="$store.commit('toggleActiveFreq')"
      />
    </div>
    <div class="range-controls__row">
      <ArrowButton
        :position="NavPositions.LEFT"
        @click="$store.commit('increaseFrequency')"
      />
      <PushButton @click="$store.commit('toggleActiveFreq')" />
      <ArrowButton
        :position="NavPositions.RIGHT"
        @click="$store.commit('decreaseFrequency')"
      />

      <span class="sign plus">+</span>
      <span class="sign minus">-</span>
      <img class="line arrow-left" :src="arrLine" />
      <img class="line arrow-right" :src="arrLine" />
    </div>
    <div class="range-controls__row">
      <ArrowButton
        :position="NavPositions.BOTTOM"
        @click="$store.commit('toggleActiveFreq')"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
.range-controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 20px;
  &__row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    position: relative;
  }
}
.line {
  position: absolute;
  top: -30px;
  max-width: 30px;
}
.arrow-left {
  left: 0;
  transform: rotate(-45deg);
}
.arrow-right {
  right: 0;
  transform: rotate(225deg);
}
.sign {
  position: absolute;
  top: 0px;
}
.plus {
  left: 0;
}
.minus {
  right: 0;
}
</style>
