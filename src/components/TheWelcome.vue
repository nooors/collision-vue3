<script>
export default {
  name: "TheWelcome",
  data() {
    return {
      info: {
        positionX: "",
        positionY: "",
        currentOrientation: "",
        width: "",
        height: "",
        orders: "",
      },
    };
  },
  methods: {
    start: function () {
      this.$emit("setObject", this.info);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="form" @submit.prevent="start">
      <form class="form-group" @submit.prevent="inputData">
        <label for="posssitionX">Horizontal position</label>
        <input type="text" name="positionX" v-model="info.positionX" />
        <label for="posssitionY">Vertical position</label>
        <input type="text" name="positionY" v-model="info.positionY" />
        <label for="orientation">Initial orientation</label>
        <input
          type="text"
          name="orientation"
          v-model="info.currentOrientation"
        />
        <label for="width">Square width</label>
        <input type="text" name="width" v-model="info.width" />
        <label for="height">Square height X</label>
        <input type="text" name="height" v-model="info.height" />
        <label for="orders">Programming</label>
        <input type="text" name="orders" v-model="info.orders" />
        <input type="submit" />
      </form>
    </div>
  </div>
</template>
