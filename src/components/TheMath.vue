<template>
  <main v-if="choice">
    <the-form @setObject="runRover" :showOrders="needTo" />
    <div class="do-math">
      <button class="btn" @click="doTheMath" v-if="needTo">Do the Math</button>
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
    <div class="reset">
      <button class="btn" @click="reset">Reset</button>
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
  props: ["choice", "needTo"],
  emits: ["views"],
  data() {
    return {
      orders: "",
      rover: Rover,
      emitPayload: null,
      objectNew: false,
      crash: false,
      movements: 0,
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
        parseInt(info.positionX),
        parseInt(info.positionY),
        parseInt(info.width),
        parseInt(info.height)
      );
      this.orders = info.orders;
      this.rover.currentOrientation = info.currentOrientation;
      this.emitPayload = info.positionX;
      this.objectNew = true;
    },
    doTheMath() {
      let crash = 0;
      for (let i = 0; i < this.orders.length; i++) {
        if (this.orders.charAt(i) == "l" || this.orders.charAt(i) == "r") {
          this.rover.rotate(this.orders.charAt(i));
        }
        if (this.orders.charAt(i) == "a") {
          this.rover.moveOn(this.rover.orientationNumber);
        }
        if (
          this.rover.position.x <= 0 ||
          this.rover.position.x >= this.rover.square.x ||
          this.rover.position.y <= 0 ||
          this.rover.position.y >= this.rover.square.y
        ) {
          this.colision(i + 1);
          crash = 1;
          break;
        }
      }
      // Before this correction, allways execute next group, even rover had crushed
      if (crash == 0) {
        this.rover.finished = true;
        this.rover.movements = this.orders.length;
        this.rover.crashed = true;
        return this.rover;
      }
    },
    colision(movement) {
      this.rover.finished = true;
      this.rover.movements = movement;
      this.rover.crashed = false;
      window.removeEventListener("keydown", this.keyHandler);
      return this.rover;
    },
    keyHandler(e) {
      this.movements++;
      switch (e.keyCode) {
        case 76:
          this.rover.rotate("L");
          break;
        case 82:
          this.rover.rotate("r");
          break;
        case 65:
          this.rover.moveOn(this.rover.orientationNumber);
          break;
      }
      if (
        this.rover.position.x <= 0 ||
        this.rover.position.x >= this.rover.square.x ||
        this.rover.position.y <= 0 ||
        this.rover.position.y >= this.rover.square.y
      ) {
        this.colision(this.movements);
      }
    },
    reset() {
      this.rover = new Rover();
      this.$emit("views", false);
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
  margin: 1rem 2rem 0.5rem 2rem;
}
.reset {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}
.reset .btn {
  border: 1px solid red;
  color: magenta;
}
</style>
