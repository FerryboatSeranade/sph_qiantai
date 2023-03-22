import '@/mock/mockServer' //启动mockServer,加载mock数据
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
const vm = new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')

console.log("vm", vm)