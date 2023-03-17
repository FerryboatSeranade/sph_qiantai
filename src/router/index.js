//vue-router的index.js文件,
import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/Home.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            component: Home
        },
        // 引入pages下的所有组件作为路由配置项
        {
            path: '/register',
            component: () => import('@/pages/Register.vue')
        },
        {
            path: '/login',
            component: () => import('@/pages/Login.vue')
        },
        {
            path: '/search',
            component: () => import('@/pages/Search.vue')
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})
