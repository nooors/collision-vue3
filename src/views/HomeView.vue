<template>
  <h1>Are Rover gonna crush?</h1>
  <form action="choice" class="action" @change="choice">
    <div class="program">
      <input type="radio" name="choice" value="program" id="program" />
      <label for="program">Do you wanna program Rover</label>
    </div>
    <div class="drive">
      <input type="radio" name="choice" value="drive" id="drive" />
      <label for="drive">Do you prefer drive Rover</label>>
    </div>
  </form>
  <the-math></the-math>
</template>

<script>
import TheMath from "../components/TheMath.vue";

export default {
  components: { TheMath },
  methods: {
    choice() {
      alert();
    },
  },
};
</script>

<style>
.action {
  display: flex;
  flex-flow: column wrap;
  margin-bottom: 1rem;
}
label {
  margin-left: 0.5rem;
}
</style>
