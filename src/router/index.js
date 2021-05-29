import Vue from 'vue'
import Router from 'vue-router'
import PaymentsList from "../components/PaymentsList1";
import PaymentForm from "../components/PaymentForm1";
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'PaymentsList',
            component: PaymentsList,
            props: true
        },
        // {
        //     path: '/PaymentForm/:page',
        //     name: 'PaymentForm',
        //     component: PaymentForm
        // },
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


const titles = {
        PaymentsList: 'My personal costs',
        PaymentForm: 'ADD NEW COST +',
    }
    // router.beforeEach((to, from, next) => {
    //   if (to.name === 'dashboard' && !userAuth) {
    //     next({ name: 'NotFound' })
    //   } else {
    //     next()
    //   }
    // })

router.afterEach((to) => {
    document.title = titles[to.name]
})
export default router