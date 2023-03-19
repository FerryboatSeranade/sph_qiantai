<template>
  <div class="search">
    <!--    <h1>这是Search</h1>-->
    <!--    <h2>接受参数searchText: {{ searchText }}</h2>-->
    <!--    <h2>接受参数testStr001:{{ testStr001 }}</h2>-->
    <!--    <h2>接受参数testStr002:{{ testStr002 }}</h2>-->
    <TypeNav></TypeNav>
  </div>

</template>

<script>
import TypeNav from "@/components/sub/TypeNav.vue";

export default {
  name: "Search",
  components: {TypeNav},
  props: {
    searchText: {
      type: String,
      default: ''
    },
    testStr001: {type: String, default: null, required: false},
    testStr002: {type: String, default: null, required: false}
  },
}
</script>

<style scoped>

</style>