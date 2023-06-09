//引入vuex

import Vue from 'vue'
import Vuex from 'vuex'
import typeNav from "@/store/typeNav";
import listContainer from "@/store/listContainer";
import floor from "@/store/floor";
import search from "@/store/search";

Vue.use(Vuex)
//创建store对象
const store = new Vuex.Store({
    modules: {
        typeNav: typeNav,
        listContainer: listContainer,
        floor: floor,
        search: search
    }
})
export default store