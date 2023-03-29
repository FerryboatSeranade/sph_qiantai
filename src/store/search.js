import {reqGetSearchInfo} from "@/api";

const state = {
    searchList: {}
}

const mutations = {
    //接收搜索信息
    GET_SEARCH_LIST(state, searchList) {
        state.searchList = searchList;
    }
}

const actions = {
    //获取搜索信息
    async getSearchList({commit}, params) {
        const result = await reqGetSearchInfo(params);
        if (result.code === 200) {
            commit('GET_SEARCH_LIST', result.data);
        }
    }
}

const getters = {
    goodsList: state => state.searchList.goodsList || [],
    trademarkList: state => state.searchList.trademarkList || [],
    attrsList: state => state.searchList.attrsList || [],
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}