<template>
  <div class="home">
      <div v-if="error"> {{error}} </div>
      <div v-if="posts.length">
          <PostList :posts="postsWithTag" />
      </div>
      <div v-else>
          <Loading/>
      </div>

  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPosts';
import Loading from '../components/Loading.vue'
import {useRoute} from 'vue-router'
import {computed} from 'vue'
export default {
      components: { PostList, Loading },
    setup(){
        const route = useRoute();
        const {posts, error, load}= getPosts();
        load();
        const postsWithTag = computed(()=>{
            return posts.value.filter((p)=>p.tags.includes(route.params.tag))
        });
        return {error, posts, postsWithTag}
    }

}
</script>

<style>

</style>