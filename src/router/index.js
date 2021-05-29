import Vue from 'vue'
import Router from 'vue-router'
import PaymentsList from "../components/PaymentsList";
import PaymentForm from "../components/PaymentForm";
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'PaymentsList',
            component: PaymentsList
        },
        {
            path: '/PaymentForm/:page',
            name: 'PaymentForm',
            component: PaymentForm
        },
        {
            path: '/PaymentForm',
            name: 'PaymentForm',
            component: PaymentForm
        },
        // {
        //     path: '*',
        //     name: 'NotFound',
        //     component: Page404
        // }
    ]
})