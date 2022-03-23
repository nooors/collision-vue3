<template>
  <h1>Are Rover gonna crush?</h1>
  <form action="choice" class="action" @change="choice">
    <div class="program">
      <input type="radio" name="choice" value="program" id="program" />
      <label for="program">Do you wanna program Rover</label>
    </div>
    <div class="drive">
      <input type="radio" name="choice" value="drive" id="drive" />
      <label for="drive">Do you prefer drive Rover</label>
    </div>
    <div class="info">Crashed: False/Uncrushed: True</div>
  </form>
  <the-math :choice="selected" :needTo="program" @views="reset"></the-math>
</template>

<script>
import TheMath from "../components/TheMath.vue";

export default {
  components: { TheMath },
  data() {
    return {
      selected: false,
      program: false,
    };
  },
  methods: {
    choice(e) {
      this.selected = true;
      if (e.target.value == "program") {
        this.program = true;
      } else {
        this.program = false;
      }
    },
    reset() {
      this.selected = false;
      this.program = false;
      location.reload();
    },
  },
};
</script>

<style>
.action {
  display: flex;
  flex-flow: column wrap;
  margin-bottom: 1rem;
  position: relative;
}
label {
  margin-left: 0.5rem;
}
.info {
  align-self: flex-end;
  color: orange;
}
</style>
