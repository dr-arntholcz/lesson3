import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: [],
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentsList = payload;
        },
        addPaymentsListData(state, payload) {
            state.paymentsList.push(payload);
        },
        editPaymentsListData(state, contents) {
            console.log(contents);
            ++contents.number;
            state.paymentsList[contents.number - 1] = contents;
            console.log(contents);
        },
        delPaymentsListData(state, payload) {
            // var index = this.paymentsList.findIndex(c => c.payload == payload);
            state.paymentsList.splice(payload, 1);
        },
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
    },
    actions: {
        // loadData() {
        //     let url =
        //         "https://raw.githubusercontent.com/dr-arntholcz/online-store-api/master/responses/paymentsList.json";
        //     ////fetch/////
        //     fetch(url)
        //         .then((res) => {
        //             return res.json();
        //         })
        //         .then((res) => {
        //             this.setPaymentsListData(res);
        //         })
        //         .catch((error) => {
        //             console.log("Error: ", error);
        //         });
        //     console.log("this.$store.dispatch(\"loadData\")");
        // },

    },
    modules: {},

})