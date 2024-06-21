<script setup lang="ts">
defineProps<{
  number: number;
}>();
</script>

<template>
  <li class="key-wrap">
    <div class="key-button">
      <p>
        {{ number }}
      </p>
    </div>
  </li>
</template>

<style scoped lang="less">
.key-wrap {
  flex: 0 0 34px;
  aspect-ratio: 1 / 1;
  padding: 2px;
  background: #0c0d0d;
  list-style: none;
  border: 2px solid #252828;
  border-radius: 100%;
}
.key-button {
  flex: 0 0 30px;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  background-clip: padding-box;
  background-color: initial;
  background-image: none;
  border-style: none;
  box-sizing: border-box;
  cursor: pointer;
  flex-shrink: 0;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  line-height: 24px;
  margin: 0;
  outline: none;
  overflow: visible;
  pointer-events: auto;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  word-break: keep-all;
  z-index: 0;
}
.key-button:before,
.key-button:after {
  border-radius: 100%;
}
.key-button:before {
  background-image: linear-gradient(92.83deg, #516fe8 0, #0440d9 100%);
  content: '';
  display: block;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -2;
}
.key-button:after {
  background-color: initial;
  background-image: linear-gradient(#2c2c2c 0, #1d1d1d 100%);
  bottom: 2px;
  content: '';
  display: block;
  left: 2px;
  overflow: hidden;
  position: absolute;
  right: 2px;
  top: 2px;
  transition: all 100ms ease-out;
  z-index: -1;
}
.key-button:active:not(:disabled) {
  color: #ccc;
  &:before {
    background-image: linear-gradient(92.83deg, #4863d0 0, #002d9d 100%);
  }
}
p {
  margin-bottom: 1px;
}
</style>
