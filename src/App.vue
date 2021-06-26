<template>
  <div id="app">
    <div :class="[$style.center]">
      <header :class="[$style.header]">My personal costs</header>
      <main>
        <br /><br />

        <div class="router">
          <div class="nav">
            <router-link to="/" v-show="added"
              ><button class="myButton" @click="added = false">
                Cansel
              </button></router-link
            >
            <router-link to="/PaymentForm/add" v-show="!added"
              ><button class="myButton" @click="added = true">
                ADD +
              </button></router-link
            >
          </div>
          <br />
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  data() {
    return {
      added: false,
    };
  },
  methods: {
    ...mapActions(["loadData"]),
  },
  updated() {
    if (this.$route.params.category === "") {
      this.added = false;
    }
  },
  mounted() {
    if (this.$route.params.category !== "") {
      let str = location.pathname;
      let regexp = /PaymentForm/;
      if (regexp.test(str)) {
        this.added = true;
      }
    }
    this.$store.dispatch("loadData");
    // this.$router.push({ name: "PaymentsList" });
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