<template>
  <div id="nav">
    <router-link to="/">Home</router-link> 

  </div>
  <router-view/>
</template>

<script>
export default {
  setup() {
    console.log("setup");
  }

}
</script>

<style lang="scss">
@import './assets/scss/scss.scss' 
</style>
