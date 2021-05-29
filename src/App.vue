<template>
  <div id="app">
    <div :class="[$style.center]">
      <header :class="[$style.header]">My personal costs</header>
      <main>
        <br /><br />

        <div class="router">
          <h2>router</h2>
          <div class="nav">
            <router-link to="/">My personal costs</router-link> <br />
            <router-link to="/PaymentForm">Payment Form</router-link>
          </div>
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$router.push({ name: "PaymentsList" });
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