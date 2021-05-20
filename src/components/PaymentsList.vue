<template>
  <div>
    <div>
      <table class="table">
        <tr>
          <td class="cell"><b>№</b></td>
          <td class="cell dateDate"><b>Date</b></td>
          <td class="cell select"><b>Category</b></td>
          <td class="cell price"><b>Price</b></td>
        </tr>
        <!-- <tr v-for="(item, index) in items" :key="index"> -->
        <!-- <tr
          v-for="(item, index) in this.$store.getters.getPaymentsList"
          :key="index"
        > -->
        <tr v-for="(item, index) in this.getPaymentsList" :key="index">
          <td class="cell">{{ index + 1 }}</td>
          <td class="cell dateDate">{{ item.date }}</td>
          <td class="cell select">{{ item.category }}</td>
          <td class="cell price">{{ item.price }}</td>
        </tr>
      </table>
      <div class="pagination">
        <button class="buttonPagin" @click="turnPages">&lt;&lt;</button>
        <button class="buttonPagin" @click="turnPages">&lt;--</button>
        <div class="pageNamber">{{ currentNamberPage + 1 }}</div>
        <button class="buttonPagin" @click="turnPages">--&gt;</button>
        <button class="buttonPagin" @click="turnPages">&gt;&gt;</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      pageCounter: 0,
      currentNamberPage: 0,
      maxPaymentsView: 5,
      pageList: [],
    };
  },

  methods: {
    ...mapMutations(["setPaymentsListData"]),
    turnPages() {},
  },
  computed: {
    ...mapGetters(["getPaymentsList"]),
    //  slicer(items) {
    // if (items.length !== 0) {
    //  // items/maxPaymentsView;
    //  for (i = 0; i < 10; i++) {}
    //     }
    // },
  },
  mounted() {
    ////////////////////////////////////////////////////
    var xhr = new XMLHttpRequest();
    let url =
      "https://raw.githubusercontent.com/dr-arntholcz/online-store-api/master/responses/paymentsList.json";
    xhr.open("GET", url, true); // true - асинхронный запрос
    xhr.onreadystatechange = () => {
      // xhr.readyState
      // 0 - запрос не инициализирован
      // 1 - загрузка данных
      // 2 - запрос принят сервером
      // 3 - идет обмен данными
      // 4 - запрос выполнен
      if (xhr.readyState !== 4) return;
      if (xhr.status !== 200) {
        console.log("Error " + xhr.status + " " + xhr.statusText);
      } else {
        // console.log("Ok! ", xhr.responseText);
        // let data = JSON.parse(xhr.responseText);
        ///////////////////////////////////////////
        // this.$store.commit("setPaymentsListData", JSON.parse(xhr.responseText));
        this.setPaymentsListData(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  },
};
</script>

<style lang="scss">
.pagination {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  .buttonPagin {
    background-color: #1ea896;
    color: white;
    padding: 7px;
    border: none;
    border-radius: 5px;
    width: 80px;
    margin: 0 10px 0;
  }
  .pageNamber {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
