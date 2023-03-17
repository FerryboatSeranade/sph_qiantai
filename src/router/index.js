//vue-router的index.js文件,
import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/Home.vue";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                showFooter: true
            }
        },
        // 引入pages下的所有组件作为路由配置项
        {
            path: '/search/:searchText',
            name: 'Search',
            component: () => import('@/pages/Search.vue'),
            meta: {
                showFooter: true
            },
            // props: true
            props: (route) => ({
                searchText: route.params.searchText,
                testStr001: 'testStr001',
                testStr002: 'testStr002'
            })
        },
        {
            path: '/register',
            component: () => import('@/pages/Register.vue'),
            meta: {
                showFooter: false
            }
        },
        {
            path: '/login',
            component: () => import('@/pages/Login.vue'),
            meta: {
                showFooter: false
            }
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})
