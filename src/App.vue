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
            <PaymentForm :items="paymentsList" @add="onDataAdded" />
          </div>
        </div>
        <div class="PaymentsList" v-show="!newCoasts">
          <PaymentsList :items="paymentsList" />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import PaymentsList from "./components/PaymentsList";
import PaymentForm from "./components/PaymentForm";

export default {
  name: "App",
  components: {
    PaymentsList,
    PaymentForm,
  },
  data() {
    return {
      paymentsList: [
        {
          date: "13.05.2021",
          category: "Education",
          price: 123,
        },
        {
          date: "12.05.2021",
          category: "Education",
          price: 456,
        },
        {
          date: "11.05.2021",
          category: "Education",
          price: 789,
        },
        {
          date: "10.05.2021",
          category: "Education",
          price: 0,
        },
      ],
      newCoasts: false,
    };
  },
  methods: {
    onDataAdded(data) {
      this.paymentsList.push(data);
      this.newCoasts = !this.newCoasts;
    },
  },
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