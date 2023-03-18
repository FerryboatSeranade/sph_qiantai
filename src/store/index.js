//引入vuex

import Vue from 'vue'
import Vuex from 'vuex'
import typeNav from "@/store/typeNav";

Vue.use(Vuex)
//创建store对象
const store = new Vuex.Store({
    modules: {
        typeNav: typeNav
    }
})
export default store