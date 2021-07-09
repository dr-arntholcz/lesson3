import mainVue from '../App.vue'
import PaymentsList from '../components/PaymentsList1.vue'
import PaymentForm from '../components/PaymentForm1.vue'
import store from '../store'
import router from '../router'
import modal from '../plugins'
import { mount, createLocalVue } from '@vue/test-utils' // ,
import Vuex from 'vuex'


const localVue = createLocalVue()
localVue.use(Vuex, router)

describe('mainVue', () => {
    test('Content of TestComponent', () => {
        const $route = {
            path: '' //'/some/path'
        }

        // let Wrapper = mount(mainVue, PaymentsList, PaymentForm, store, router, modal, { localVue })
        let Wrapper = ''

        beforeEach(() => {
            Wrapper = mount(mainVue, { localVue }, {
                mocks: {
                    $route: {
                        params: {
                            category: ''
                        }
                    }
                }
            })
        })

        // expect(Wrapper.isVueInstance()).toBeTruthy()
        // expect(Wrapper.is(mainVue)).toBeTruthy()
        // expect(Wrapper).toBeTruthy();

        // expect(Wrapper.is(PaymentsList)).toBeTruthy()
    })

})