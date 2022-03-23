<template>
  <div class="form">
    <label :for="label">{{ labelName }}</label>
    <input
      type="text"
      :value="modelValue"
      @input="inputValidate"
      :maxlength="maxlength"
    />
  </div>
</template>

<script>
export default {
  name: "InputForm",
  props: ["label", "labelName", "modelValue", "regExp", "maxlength"],
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
<style scoped>
.form {
  display: flex;
  flex-flow: wrap column;
  align-content: center;
  justify-content: center;
}
input {
  background: transparent;
  border: none;
  border-bottom: 1px grey solid;
  border-radius: 0;
  margin-bottom: 1rem;
  color: rgb(0, 225, 255);  
  width: 80%;
}
input:focus {
  outline: none;
  border-bottom: 1px rgb(0, 225, 255) solid;
}
</style>
