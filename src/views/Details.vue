<template>
 <div v-if="error">
      {{error}}
    </div>
    <div class="home" v-if="post">
        ID is {{post.id}}
        <p> Body is > {{post.body}}</p>

        <h6>{{post.tags}}</h6>
        <button class="btn" @click="handleDelete"> Delete Post </button>
    </div>
    <div v-else>
      <Loading />
    </div>
</template>

<script>
import getPost from '../composables/getPost'
import Loading from '../components/Loading.vue'
import {useRoute,useRouter} from 'vue-router'
import { projectPost } from '../firebase/config'
export default {
    components: { Loading },
    props: ['id'],
    setup(props) {
        const route = useRoute();
        const router = useRouter();
    const {post,error, load} = getPost(route.params.id);
    load();
    const handleDelete = async () => {
        await projectPost.collection('posts')
        .doc(props.id)
        .delete();
        router.push('/');
    }
    return {post, error, handleDelete }
    }
}
</script>

<style>


</style>