<template>
  <div class="home">
    <h1>这是Home</h1>
    <h2>当前购物车中的商品数量为：{{cartCount}}</h2>
<!--    添加商品数量的设置，下拉列表-->
    <select name="" id="" v-model.number="cardCountChange">
      <option value=1>1</option>
      <option value=2>2</option>
      <option value=3>3</option>
    </select>
    <button @click="addCartCount(cardCountChange)">添加商品数量</button>
    <button @click="subCartCount(cardCountChange)">减少商品数量</button>
<!--    三级商品联动-->
    <TypeNav></TypeNav>
<!--   轮播图 -->
    <ListContainer></ListContainer>
<!--    今日推荐-->
    <Recommend></Recommend>
<!--   商品排行 -->
    <Rank/>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>

</template>

<script>
import TypeNav from "@/pages/home/TypeNav.vue";
import ListContainer from "@/pages/home/ListContainer.vue";
import Recommend from "@/pages/home/Recommend.vue";
import Rank from "../../谷粒商城-辉洪/Rank.vue";
import Like from "@/pages/home/Like.vue";
import Floor from "@/pages/home/Floor.vue";
import Brand from "@/pages/home/Brand.vue";
import {mapMutations, mapState} from "vuex";

export default {
  name: "Home",
  components: {Brand, Floor, Like, Rank, Recommend, ListContainer, TypeNav},
  data() {
    return {
      cardCountChange: 1
    }
  },
  computed: {
    ...mapState(['cartCount'])
  },
  methods: {
    ...mapMutations(['addCartCount','subCartCount'])
  }
}
</script>

<style scoped>

</style>