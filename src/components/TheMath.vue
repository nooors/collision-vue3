<template>
  <main>
    <the-form @setObject="runRover" />
    <button class="btn" @click="doTheMath">Do the Math</button>
    <div class="display" v-if="objectNew">
      <the-moves :value="rover.position.x">
        <slot>X:</slot>
      </the-moves>
      <the-moves :value="rover.position.y">
        <slot>Y:</slot>
      </the-moves>
      <the-moves :value="rover.orientationName[rover.orientationNumber]">
        <slot>Orientation:</slot>
      </the-moves>
    </div>
  </main>
</template>
<script>
import TheForm from "@/components/TheForm.vue";
import Rover from "@/utils/rover.js";

import { createConditionalExpression } from "@vue/compiler-core";
import TheMoves from "./TheMoves.vue";
export default {
  name: "TheMath",
  components: { TheForm, TheMoves },
  data() {
    return {
      orders: "",
      rover: Rover,
      emitPayload: null,
      objectNew: false,
      crash: false,
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
      this.objectNew = true;
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
      this.rover.movements = this.rover.orders.length;
      return this.rover;
    },
    colision(movement) {
      this.rover.finished = false;
      this.rover.movements = movement;
    },
  },
};
</script>
<style scoped>
.display {
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
}
</style>
