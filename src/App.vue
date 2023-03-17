<template>
  <div id="app">
    <router-link to="/home">这是首页。--------------</router-link>
    <router-link to="/search">这是搜索--------------</router-link>
    <router-link to="/register">这是注册--------------</router-link>
    <router-link to="/login">这是登录--------------</router-link>

    <Header/>
    ------------------------------------
    <router-view></router-view>
    ------------------------------------
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
