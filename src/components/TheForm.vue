<script>
import InputForm from "@/components/InputForm.vue";
export default {
  name: "TheForm",
  components: { InputForm },
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
      numRegExp: /^[0-9]/,
      orientationRegExp: /[neswNESW]/,
      ordersRegExp: /[lraLRA]/,
    };
  },
  methods: {
    start: function () {
      // Normailize data for class methods
      this.info.currentOrientation = this.info.currentOrientation.toLowerCase();
      this.info.orders = this.info.orders.toLowerCase();
      this.$emit("setObject", this.info);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="form" @submit.prevent="start">
      <form class="form-group" @submit.prevent="inputData">
        <input-form
          :label="label.positionX"
          :label-name="label.nameX"
          v-model="info.positionX"
          :reg-exp="numRegExp"
        />
        <input-form
          :label="label.positionY"
          :labelName="label.nameY"
          v-model="info.positionY"
          :reg-exp="numRegExp"
        ></input-form>
        <input-form
          :label="label.orientation"
          :label-name="label.nameOrientation"
          v-model="info.currentOrientation"
          :reg-exp="orientationRegExp"
        />
        <input-form
          :label="label.width"
          :label-name="label.nameWidth"
          v-model="info.width"
          :reg-exp="numRegExp"
        />
        <input-form
          :label="label.height"
          :labelName="label.nameHeight"
          v-model="info.height"
          :reg-exp="numRegExp"
        />
        <input-form
          :label="label.orders"
          :label-name="label.nameOrders"
          v-model="info.orders"
          :reg-exp="ordersRegExp"
        />
        <input type="submit" />
      </form>
    </div>
  </div>
</template>
