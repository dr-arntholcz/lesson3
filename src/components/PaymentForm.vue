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
          <td class="cell">{{ this.getPaymentsList.length + 1 }}</td>

          <td class="cell dateDate">
            <input
              class="inputDate dateDate"
              type="date"
              placeholder="Date"
              v-model="date"
            />
          </td>
          <td class="cell select">
            <!--  contenteditable="true" -->
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
    <button class="myButton" @click="save">ADD +</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
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
    };
  },

  methods: {
    ...mapMutations(["setPaymentsListData", "addPaymentsListData"]),
    save() {
      const { date, category, price } = this;
      // this.$emit("add", { date, category, price });
      this.addPaymentsListData({ date, category, price });
      this.$parent.newCoasts = !this.$parent.newCoasts;
      this.date = 0;
      this.category = 0;
      this.price = 0;
    },
  },

  computed: {
    ...mapGetters(["getPaymentsList"]),
  },
};
</script>

<style lang="scss">
</style>
<style lang="scss" module>
</style>
