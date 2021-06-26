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
        <tr>
          <td class="cell">{{ this.index + 1 }}</td>

          <td class="cell">
            <input
              class="inputDate dateDate"
              id="dataNoTime"
              type="date"
              placeholder="Date"
              v-model="date"
              value=""
            />
          </td>
          <td class="cell select">
            <select
              class="inputDate select"
              placeholder="please choise category"
              v-model="category"
            >
              <option
                class="inputDate"
                v-for="item in categoryList"
                v-bind:key="item"
              >
                {{ item }}
              </option>
            </select>
          </td>
          <td class="cell price">
            <input
              class="inputDate price"
              type="number"
              placeholder="Price"
              v-model.number="price"
            />
          </td>
        </tr>
      </table>
    </div>
    <br />
    <br />

    <button class="myButton" @click="save">{{ this.buttonCaption }}</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      type: "",
      index: 0,
      date: "",
      categoryList: [
        "Relaxation",
        "Work",
        "Education",
        "Entertainment",
        "Travel",
      ],
      category: "",
      price: 0,
      buttonCaption: "",
    };
  },
  methods: {
    ...mapMutations(["addPaymentsListData", "editPaymentsListData"]),
    save() {
      if (this.type === "add") {
        if (this.date !== "" && this.category !== "" && this.price !== 0) {
          const {
            number = this.getPaymentsList.length + 1,
            date,
            category,
            price,
          } = this;
          // this.$emit("add", { date, category, price });
          this.addPaymentsListData({ number, date, category, price });
          this.date = 0;
          this.category = "";
          this.price = 0;
          this.$router.push({ name: "PaymentsList" });
        } else alert("Заполни все поля!!!");
      }
      if (this.type === "edit") {
        const { number = this.index, date, category, price } = this;
        // this.$emit("add", { date, category, price });
        this.editPaymentsListData({ number, date, category, price });
        this.date = 0;
        this.category = "";
        this.price = 0;
        this.$router.push({ name: "PaymentsList" });
      }
    },
  },

  computed: {
    ...mapGetters(["getPaymentsList"]),
  },
  mounted() {
    if (this.$route.params.category !== "") {
      let str = location.pathname;
      // let str = this.$route.params.category;
      // this.category = this.$route.params.category;
      // console.log(this.$route.params.category);
      // console.log(location.pathname.slice(1));
      // console.log(location);
      /////////////////////////////////////////////////////
      // console.log(location.pathname);
      let regexp = /add/;
      if (regexp.test(str)) {
        this.date = new Date().toLocaleDateString();
        this.buttonCaption = "ADD +";
        this.type = "add";
        this.index = this.getPaymentsList.length;
      }
      regexp = /edit/;
      if (regexp.test(str)) {
        this.buttonCaption = "SAVE";
        this.type = "edit";

        // regexp = /index=(\d+)/;
        // if (regexp.test(str)) {
        //   this.index = +str.match(regexp)[1];
        // }
        this.index = +this.$route.query.index;
        // regexp = /date=([0-9][0-9]).([0-9][0-9]).([0-9][0-9][0-9][0-9])/;
        // if (regexp.test(str)) {
        //   this.date = str.match(regexp)[0].slice(5);
        //   document.getElementById("dataNoTime").textContent = this.date;
        // }
        this.date = this.$route.query.date;
      }
      {
        /////////////////////////////////
        // str = str.slice(str.search(regexp) + 4);
        regexp = /payment/;
        if (regexp.test(str)) {
          // // str = str.slice(str.search(regexp), str.search(regexp) + 7);
          // str = str.slice(str.search(regexp) + 8);

          // this.category = str;
          // if (location.search !== "") {
          //   str = location.search;
          //   regexp = /=/;
          //   str = str.slice(str.search(regexp) + 1);
          //   this.price = str;
          //   // this.save();
          // }
          this.category = this.$route.query.category;
          this.price = +this.$route.query.price;
        }
      }
    }
  },
};
</script>

<style lang="scss">
</style>
<style lang="scss" module>
</style>
