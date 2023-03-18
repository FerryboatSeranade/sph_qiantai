//vuex数据
import {reqCategoryList} from '@/api';
const state = {
    categoryList: []
};
const mutations = {
    //接收分类列表
    RECEIVE_CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    }
};
const actions = {
    //获取分类列表
    async getCategoryList({ commit }) {
        const result = await reqCategoryList();
        if (result.code === 200) {
            commit('RECEIVE_CATEGORYLIST', result.data);
        }
    }
};
const getters = {};
//导出
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}