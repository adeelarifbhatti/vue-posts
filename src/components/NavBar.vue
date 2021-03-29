<template>
  <header>
      <h1> The Blog </h1>
  </header>
  <nav>
      <router-link :to="{name : 'Home'}"> Home </router-link>
      <router-link :to="{name : 'Create'}"> Create Post </router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>