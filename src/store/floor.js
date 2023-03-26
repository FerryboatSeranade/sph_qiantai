//vuex数据
import {reqFloors} from '@/api';

const state = {
    floors: []
};
const mutations = {
    //接收分类列表
    RECEIVE_FLOORS(state, floors) {
        state.floors = floors;
    }
};
const actions = {
    //获取轮播图数据
    async getFloors({commit}) {
        const result = await reqFloors();
        if (result.code === 200) {
            commit('RECEIVE_FLOORS', result.data);
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