<template>
  <div class="display">
    <div class="label"><slot></slot></div>
    <div class="value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>

<style scoped>
.display {
  display: flex;
  flex-flow: wrap row;
}

.value {
  border: 1px solid rgb(0, 225, 255);
  height: 1.75rem;
  width: 3rem;
  margin-left: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
}
</style>
