<script>
import InputForm from "@/components/InputForm.vue";
export default {
  name: "TheForm",
  components: { InputForm },
  props: ["showOrders"],
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
      label: {
        positionY: "positionY",
        nameY: "Vertical Position",
        positionX: "positionX",
        nameX: "Horizontal Position",
        height: "height",
        nameHeight: "Square height",
        width: "width",
        nameWidth: "Square width",
        orientation: "orientation",
        nameOrientation: "Initial orientation",
        orders: "orders",
        nameOrders: "Code your movements",
      },
      maxlength: {
        positionY: 3,
        positionX: 3,
        orientation: 1,
        width: 3,
        height: 3,
      },
      numRegExp: /^[0-9]/,
      orientationRegExp: /[neswNESW]/,
      ordersRegExp: /[lraLRA]/,
      divError: false,
    };
  },
  methods: {
    start: function () {
      if (
        this.info.positionX != "" &&
        this.info.positionY != "" &&
        this.info.currentOrientation != "" &&
        this.info.height != "" &&
        this.info.width != ""
      ) {
        this.disable = false;
        // Normailize data for class methods
        this.info.currentOrientation = this.info.currentOrientation.toLowerCase();
        this.info.orders = this.info.orders.toLowerCase();
        this.$emit("setObject", this.info);
      } else {
        this.divError = true;
        setTimeout(() => {
          this.divError = false;
        }, 2000);
      }
    },
  },
  watch: {
    info() {},
  },
};
</script>

<template>
  <div class="container">
    <div class="form">
      <form class="form-group" @submit.prevent="start">
        <input-form
          :label="label.positionX"
          :label-name="label.nameX"
          v-model="info.positionX"
          :reg-exp="numRegExp"
          :maxlength="maxlength.positionX"
        />
        <input-form
          :label="label.positionY"
          :labelName="label.nameY"
          v-model="info.positionY"
          :reg-exp="numRegExp"
          :maxlength="maxlength.positionY"
        ></input-form>
        <input-form
          :label="label.orientation"
          :label-name="label.nameOrientation"
          v-model="info.currentOrientation"
          :reg-exp="orientationRegExp"
          :maxlength="maxlength.orientation"
        />
        <input-form
          :label="label.width"
          :label-name="label.nameWidth"
          v-model="info.width"
          :reg-exp="numRegExp"
          :maxlength="maxlength.width"
        />
        <input-form
          :label="label.height"
          :labelName="label.nameHeight"
          v-model="info.height"
          :reg-exp="numRegExp"
          :maxlength="maxlength.height"
        />
        <input-form
          :label="label.orders"
          :label-name="label.nameOrders"
          v-model="info.orders"
          :reg-exp="ordersRegExp"
          v-if="showOrders"
        />
        <input type="submit" value="Send" />
      </form>
      <div class="error" v-if="divError">
        You need to set all data, thank you.
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 50vw;
  border: 1px solid grey;
  padding: 1rem;
}
@media screen and (min-width: 1400px) {
  .container {
    width: 38vw;
  }
}
.form-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.error {
  color: red;
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}
</style>
