<template>
  <div class="search">
    <h1>这是Search</h1>
    <h2>接受参数searchText: {{searchText}}</h2>
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
  },
}
</script>

<style scoped>

</style>