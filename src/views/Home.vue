<template>
  <div class="home">
    <h1> Home </h1>
    <PostList :posts="posts"/>
  </div>
</template>

<script>
import {ref} from 'vue'
import PostList from '../components/PostList.vue';

export default {
  components: { PostList },
  name: 'Home',
  setup() {
    const posts = ref([
     { title: 'test1', body: 'lorem' ,id:1},
      {title:'test2', body:'body2',id:2}
    ]);
    return {posts}
  }
}
</script>
