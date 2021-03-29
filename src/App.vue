<template>
  <div id="nav">
    <NavBar />
  </div>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: { NavBar }
}

</script>

<style lang="scss">
@import './assets/scss/scss.scss' 
</style>
