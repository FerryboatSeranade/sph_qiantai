<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link to="/home" class="logo" title="尚品汇">
          <img src="images/logo.png" alt="">
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="searchText"
                 placeholder="请输入一些东西进行搜索"/>
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
  methods: {
    goSearch() {
      this.$router.push({
        // path: '/search',
        name: 'Search',
        params: {
          searchText: this.searchText
        }
      }).catch(()=>{});

    }
  },
  data() {
    return {
      searchText: null
    }
  }
}
</script>
<style scoped lang="less">

.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }

      }

    }
  }
}
</style>