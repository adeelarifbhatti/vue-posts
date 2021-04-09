<template>
 <div v-if="error">
      {{error}}
    </div>
    <div v-if="post">
        ID is {{post.id}}
        <p class="p-body"> Body is > {{post.body}}</p>

        <h6>{{post.tags}}</h6>
    </div>
    <div v-else>
      <Loading />
    </div>
</template>

<script>
import getPost from '../composables/getPost'
import Loading from '../components/Loading.vue'
import {useRoute} from 'vue-router'
export default {
    components: { Loading },
    props: ['id'],
    setup(props) {
        const route = useRoute();
    const {post,error, load} = getPost(route.params.id);
    load();
    return {post, error }
    }
}
</script>

<style>
.p-body {
    background-color: rgb(193, 203, 212);
}

</style>