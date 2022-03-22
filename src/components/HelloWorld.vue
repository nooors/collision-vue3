<script>
export default {
  data() {
    return {
      title: "Are Robert gonna crash in Marth?",
      renderTitle: "",
    };
  },
  methods: {
    start() {
      for (let i = 0; i < this.title.length; i++) {
        this.renderTitle += this.title.charAt(i);
        setTimeout(function () {
          console.log(this.renderTitle);
        }, 2000);
        console.log(this.renderTitle);
      }
    },
  },
};
</script>

<template>
  <div class="greetings">
    <button @click="start">Start</button>
    {{ renderTitle }}
  </div>
</template>

<style scoped></style>
