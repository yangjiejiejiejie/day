<template>
  <div>
    <span v-for="item in navList" :key="item.id">{{item.title}}</span>
  </div>
</template>

<script>
export default {
  computed: {
    navList() {
      return this.$store.state.navList
    }
  }
}
</script>

<style>

</style>