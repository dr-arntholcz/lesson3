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
        > 
        <tr v-for="(item, index) in this.getPaymentsList" :key="index">-->
        <tr v-for="(item, index) in this.paymentsListView" :key="index">
          <td class="cell">{{ index + 1 }}</td>
          <td class="cell dateDate">{{ item.date }}</td>
          <td class="cell select">{{ item.category }}</td>
          <td class="cell price">{{ item.price }}</td>
        </tr>
      </table>
      <div class="pagination">
        <button class="buttonPagin" @click="turnPages('toStart')">
          &lt;&lt;
        </button>
        <button class="buttonPagin" @click="turnPages('-')">&lt;--</button>
        <div class="pageNamber">{{ this.currentNamberPage }}</div>
        <button class="buttonPagin" @click="turnPages('+')">--&gt;</button>
        <button class="buttonPagin" @click="turnPages('toEnd')">
          &gt;&gt;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      currentNamberPage: 1,
      maxPaymentsView: 3,
      pageList: [],
    };
  },

  methods: {
    ...mapMutations(["setPaymentsListData"]),
    turnPages(arg) {
      switch (arg) {
        case "toStart":
          this.currentNamberPage = 1;
          break;
        case "toEnd":
          this.currentNamberPage = this.getMaxPage;
          break;
        case "-":
          if (this.currentNamberPage !== 1) {
            this.currentNamberPage -= 1;
          }
          break;
        case "+":
          if (this.currentNamberPage !== this.getMaxPage) {
            this.currentNamberPage += 1;
          }

          break;
        default:
          break;
      }
    },
  },
  computed: {
    ...mapGetters(["getPaymentsList"]),
    paymentsListView() {
      let data = [];
      if (this.getPaymentsList.length !== 0) {
        let arr = this.getPaymentsList,
          arrPosition =
            this.currentNamberPage * this.maxPaymentsView -
            this.maxPaymentsView,
          max = 0;
        if (
          this.currentNamberPage === this.getMaxPage &&
          parseInt(this.getPaymentsList.length % this.maxPaymentsView) !== 0
        ) {
          max = parseInt(this.getPaymentsList.length % this.maxPaymentsView);
        } else {
          max = this.maxPaymentsView;
        }
        for (let i = 0; i < max; i++) {
          data[i] = arr[arrPosition];
          arrPosition++;
        }
      }
      return data;
    },
    getMaxPage() {
      let counter = 0;
      counter = parseInt(this.getPaymentsList.length / this.maxPaymentsView);
      if (parseInt(this.getPaymentsList.length % this.maxPaymentsView) !== 0) {
        ++counter;
      }
      return counter;
    },
  }, ///////computed
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
// fdhf=this.$route.params.name_var;
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
