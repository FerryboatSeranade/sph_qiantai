//引入vuex

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//创建store对象
const store = new Vuex.Store({
    state: {
        //商品数量
        cartCount: 0
    },
    mutations: {
        addCartCount(state, increment) {
            state.cartCount += increment
        },
        subCartCount(state, decrement) {
            state.cartCount -= decrement
        }
    },
    actions: {},
    getters: {}
})
export default store