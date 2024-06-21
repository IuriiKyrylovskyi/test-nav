<script setup lang="ts"></script>

<template>
  <div class="controls-row">
    <div class="control-button button">
      <p>BKSP</p>
    </div>
    <div class="control-button button"><p>CLR</p></div>
    <div class="control-button button"><p>ENT</p></div>
  </div>
</template>

<style scoped>
.controls-row {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin: 8px 0;
}
.control-button {
  flex: 1 1 auto;
  padding: 14px 22px;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  background-color: #3b3b3b;
  box-shadow: rgba(71, 71, 72, 0.4) 0 2px 4px,
    rgba(47, 47, 48, 0.3) 0 7px 13px -3px, rgb(26, 22, 34) 0 -3px 0 inset;

  & p {
    font-size: 16px;
    margin-bottom: 4px;
  }
}
</style>
