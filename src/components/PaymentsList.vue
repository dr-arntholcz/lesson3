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
        <tr v-for="(item, index) in items" :key="index">
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
export default {
  data() {
    return {
      pageCounter: 0,
      currentNamberPage: 0,
      maxPaymentsView: 5,
      pageList: [],
    };
  },
  props: {
    items: Array,
  },
  methods: {
    doSomething() {
      console.log(this.items);
    },
    turnPages() {},
  },
  computed: {
    //   slicer(items) {
    //   if (items.length !== 0) {
    //     // items/maxPaymentsView;
    //     for (i = 0; i < 10; i++) {}
    //   }
    // },
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
