<template>
  <div class="search">
    <h1>这是Search</h1>
    <h2>接受参数searchText: {{ searchText }}</h2>
    <h2>接受参数testStr001:{{ testStr001 }}</h2>
    <h2>接受参数testStr002:{{ testStr002 }}</h2>
  </div>

</template>

<script>
export default {
  name: "Search",
  props: {
    searchText: {
      type: String,
      default: 0
    },
    testStr001: {type: String, default: null, required: false},
    testStr002: {type: String, default: null, required: false}
  },
}
</script>

<style scoped>

</style>