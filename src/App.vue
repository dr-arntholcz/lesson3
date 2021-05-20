<template>
  <div id="app">
    <div :class="[$style.center]">
      <header :class="[$style.header]">My personal costs</header>
      <main>
        <br /><br />
        <div>
          <button class="myButton" @click="newCoasts = !newCoasts">
            <div v-if="!newCoasts">ADD NEW COST +</div>
            <div v-else>cancel</div>
          </button>
          <br /><br /><br />
          <div class="PaymentForm" v-show="newCoasts">
            <PaymentForm />
            <!-- :items="paymentsList" @add="onDataAdded" -->
          </div>
        </div>
        <div class="PaymentsList" v-show="!newCoasts">
          <PaymentsList />
          <!--:items="paymentsList" -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import PaymentsList from "./components/PaymentsList";
import PaymentForm from "./components/PaymentForm";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    PaymentsList,
    PaymentForm,
  },
  data() {
    return {
      newCoasts: false,
    };
  },
  methods: {
    ...mapActions(["fetchData"]),
  },
  mounted() {},
};
</script>

<style lang="scss" module>
.header {
  color: red;
  font-size: 40px;
}
.center {
  margin: 50px calc(50% - 400px);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<style lang="scss">
.myButton {
  background-color: #1ea896;
  color: white;
  padding: 7px;
  border: none;
  border-radius: 5px;
  width: 135px;
}
.myButton:hover {
  background-color: calc(#1ea896 + #100);
}
.inputDate {
  width: 95%;
  height: 30px;
  border: none;
  text-align: center;
  vertical-align: middle;
  background-color: white;
}
.dateDate {
  margin-top: -1px;
}
.select {
  height: 34px;
  width: 150px;
}
.price {
  width: 100px;
}
.table {
  width: 600px;
  border: none;
  border-collapse: collapse;
  .cell {
    border: solid 0.5px lightgray;
    height: 30px;
    text-align: center;
    vertical-align: middle;
  }
}
</style>