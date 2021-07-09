import mainVue from '../App.vue'
import { mount, createLocalVue } from '@vue/test-utils' // 
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)

describe('mainVue', () => {
    test('Content of TestComponent', () => {
        const Wrapper = mount(mainVue, { localVue })
            //  mainVue, PaymentsList, PaymentForm, store, router, modal
            // expect(Wrapper.isVueInstance()).toBeTruthy()
            // expect(Wrapper.is(modal)).toBeTruthy()
        expect(Wrapper.find('.myButton')).toBeTruthy()
        this.console.log = jest.fn();
        log('hello');
    })
})