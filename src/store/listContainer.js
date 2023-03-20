//vuex数据
import {reqBanners} from '@/api';
const state = {
    banners: []
};
const mutations = {
    //接收分类列表
    RECEIVE_BANNERS(state, banners) {
        state.banners = banners;
    }
};
const actions = {
    //获取轮播图数据
    async getBanners({ commit }) {
        const result = await reqBanners();
        if (result.code === 200) {
            commit('RECEIVE_BANNERS', result.data);
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