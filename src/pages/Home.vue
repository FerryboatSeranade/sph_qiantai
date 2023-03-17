<template>
  <div class="home">
    <h1>这是Home</h1>
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

export default {
  name: "Home",
  components: {Brand, Floor, Like, Rank, Recommend, ListContainer, TypeNav}
}
</script>

<style scoped>

</style>