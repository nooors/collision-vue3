<template>
  <main>
    <the-form @setObject="runRover" />
    <div class="do-math">
      <button class="btn" @click="doTheMath">Do the Math</button>
    </div>
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
    <div class="result" v-if="rover.finished">
      <the-result :value="rover.crashed"><slot>Result:</slot></the-result>
      <the-result :value="rover.movements"><slot>Movement:</slot></the-result>
    </div>
  </main>
</template>
<script>
import TheForm from "@/components/TheForm.vue";
import Rover from "@/utils/rover.js";
import TheResult from "@/components/TheResult.vue";

import { createConditionalExpression } from "@vue/compiler-core";
import TheMoves from "./TheMoves.vue";
export default {
  name: "TheMath",
  components: { TheForm, TheMoves, TheResult },
  data() {
    return {
      orders: "",
      rover: Rover,
      emitPayload: null,
      objectNew: false,
      crash: false,
    };
  },
  mounted() {
    window.addEventListener("keydown", this.keyHandler);
  },
  destroyed() {
    window.removeEventListener("keydown", this.keyHandler);
  },
  methods: {
    runRover(info) {
      this.rover = new Rover(
        info.currentOrientation, // class constructor
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
      this.rover.movements = this.orders.length;
      this.rover.crashed = true;
      return this.rover;
    },
    colision(movement) {
      this.rover.finished = true;
      this.rover.movements = movement;
      this.rover.crashed = false;
      alert("crash");
    },
    keyHandler(e) {
      if (e.keyCode === 76 || e.keyCode === 82 || e.keyCode === 65) {
        alert();
      }
    },
  },
};
</script>
<style scoped>
.do-math {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
.btn {
  background-color: transparent;
  color: rgb(0, 225, 255);
  border: 1px solid rgb(0, 225, 255);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  transition: all 200ms;
  cursor: pointer;
}
.btn:hover {
  transform: scale(1.1);
}
.display {
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
}
.result {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  margin: 2rem;
}
</style>
