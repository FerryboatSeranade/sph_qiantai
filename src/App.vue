<template>
  <div id="app">
    <Header/>
    ------------------------------------
    <router-view></router-view>
    ------------------------------------
    <!--    <Footer></Footer>-->
    <!--    在路由到/login和/register时不展示footer组件-->
    <Footer v-show="$route.meta.showFooter"></Footer>


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
  },
  mounted() {
    this.$store.dispatch('typeNav/getCategoryList');
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
