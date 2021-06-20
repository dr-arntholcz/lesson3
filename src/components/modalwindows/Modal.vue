<template>
  <transition name="fade">
    <div id="fade" v-show="shown">
      <div :class="[$style.wrapper]">
        <div :class="[$style.overlay]"></div>
        <router-link
          :to="
            '/PaymentForm/edit/' +
            'index=' +
            this.index +
            'date=' +
            this.date +
            'payment/' +
            this.category +
            '?value=' +
            this.price
          "
        >
          <button class="myButton" @click="edit">Edit</button></router-link
        >
        <br />
        <button class="myButton" @click="remove">Remove</button>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      // link: "",
      shown: "",
      target: "",
      index: 0,
      date: "",
      category: "",
      price: 0,
    };
  },
  props: {
    modal: String,
  },
  methods: {
    ...mapMutations(["delPaymentsListData"]),
    edit() {},
    remove() {
      this.delPaymentsListData(this.index);
      this.onClose();
    },
    onShow() {
      this.shown = true;
      document.getElementById("fade").style.left =
        (event.clientX - 620).toString() + "px";
      document.getElementById("fade").style.top =
        (event.clientY - 230).toString() + "px";
      this.target = event.currentTarget.cells;
      console.log(this.target);
      this.index = +this.target[0].innerHTML - 1;
      console.log(this.index);
      this.date = this.target[1].innerHTML;
      console.log(this.date);
      this.category = this.target[2].innerHTML;
      console.log(this.category);
      this.price = +this.target[3].innerHTML;
      console.log(this.price);
    },
    onClose() {
      this.shown = false;
    },
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("close", this.onClose);
  },
};
</script>
<style lang="scss" module>
:global(.fade-enter-active),
:global(.fade-leave-active) {
  transition: opacity 2s;
}
:global(.fade-enter),
:global(.fade-leave-to) {
  opacity: 0;
}
.wrapper {
}
.overlay {
}
</style>
<style lang="scss">
</style>