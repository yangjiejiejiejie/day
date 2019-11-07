<template>
  <div>
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from '../components/Nav'

export default {
  components: {
    Nav
  },
  mounted() {
    this.$store.dispatch({ type: 'getNav' })
  }
}
</script>

<style>

</style>