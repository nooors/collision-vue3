<template>
  <div class="result">
    <div class="label"><slot></slot></div>
    <div class="value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: "TheResult",
  props: ["value"],
};
</script>
<style>
.result .value {
  height: 1.75rem;
  border: 1px solid rgb(0, 255, 255);
  border-radius: 0.5rem;
  margin-left: 0.5rem;
  padding:0 1.2rem
}
</style>
