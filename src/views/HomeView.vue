<script>
import TheForm from "@/components/TheForm.vue";
import Rover from "@/utils/rover.js";
import HelloWorld from "@/components/HelloWorld.vue";
import { createConditionalExpression } from "@vue/compiler-core";
export default {
  components: { TheForm, HelloWorld },
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
      this.emitPayload = info.possitionX;
    },
    doTheMath() {
      for (let i = 0; i <= this.orders.length - 1; i++) {
        switch (this.orders.charAt(i)) {
          case "l":
          case "r":
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
          this.colision(i + 1);
          break;
        }
      }
      this.rover.finished = true;
      this.rover.movements = i + 1;
      return this.rover;
    },
    colision(movement) {
      this.rover.finished = false;
      this.rover.movements = movement;
    },
  },
};
</script>

<template>
  <main>
    <hello-world />
    <the-form @setObject="runRover" />
    <button class="btn" @click="doTheMath">Do the Math</button>
    <pre>{{ rover }}</pre>
  </main>
</template>
