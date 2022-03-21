<script>
import TheWelcome from "@/components/TheWelcome.vue";
import Rover from "@/utils/rover.js";
import { createConditionalExpression } from "@vue/compiler-core";
export default {
  components: { TheWelcome },
  data() {
    return {
      orders: "",
      rover: Rover,
      emitPayload: null,
      render: Object,
    };
  },
  methods: {
    runRover(info) {
      this.rover = new Rover(
        info.currentOrientation,
        info.positionX,
        info.positionY,
        info.width,
        info.height
      );
      this.orders = info.orders;
      this.rover.currentOrientation = info.currentOrientation;
      console.log(this.rover);
      console.log(this.rover.currentOrientation);
      this.emitPayload = info.possitionX;
      console.log(info);
      console.log(info.target);
      console.log(this.emitPayload);
    },
    doTheMath() {
      for (let i = 0; i <= this.orders.length - 1; i++) {
        switch (this.orders.charAt(i)) {
          case "l" || "r":
            this.rover.rotate(this.orders.charAt(i));
          case "a":
            this.rover.moveOn(this.rover.orientationNumber);
            break;
        }
        if (
          this.rover.position.x <= 0 ||
          this.rover.position.x >= this.rover.width ||
          this.rover.position.y <= 0 ||
          this.rover.position.y >= this.rover.height
        ) {
          this.colision();
          break;
        }
      }
      alert("endOfFoorLoop");
      return this.rover;
    },
    colision() {},
  },
};
</script>

<template>
  <main>
    <TheWelcome @setObject="runRover" />
    <button class="btn" @click="doTheMath">Do the Math</button>
    <pre>{{ rover }}</pre>
  </main>
</template>
