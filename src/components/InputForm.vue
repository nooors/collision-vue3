<template>
  <div class="form">
    <label :for="label">{{ labelName }}</label>
    <input type="text" :value="modelValue" @input="inputValidate" />
  </div>
</template>

<script>
export default {
  name: "InputForm",
  props: ["label", "labelName", "modelValue", "regExp"],
  emits: ["update:modelValue"],
  methods: {
    // Only lets input characters that match with regular expres
    inputValidate(event) {
      const pattern = this.regExp;
      pattern.test(event.data)
        ? this.modelValue
        : (event.target.value = event.target.value.slice(
            0,
            event.target.value.length - 1
          ));
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style></style>
