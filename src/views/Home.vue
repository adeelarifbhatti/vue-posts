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
    const posts = ref([]);
    const error = ref(null)
    const url = process.env.VUE_APP_URL;
    const load  = async () => {
      try {
        const data = await fetch(url);

        if(!data.ok) {
          throw Error('no data available');
        }

        posts.value = await data.json();
        console.log(data);
      }
      catch(err) {
        error.value= err.message;
        console.log(error.value);
      }
    }
    load();
    return {posts}
  }
}
</script>
