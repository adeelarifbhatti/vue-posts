import {ref} from 'vue'
import { projectPost} from '../firebase/config'

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null)
    const url = process.env.VUE_APP_URL;
    const load  = async () => {
        try {
            let res = await projectPost.collection('posts').doc(id).get();
            if(!res.exists) {
                throw Error ('This post does not exist');
            }
            post.value = {...res.data(), id: res.id};
            console.log(post.value)
        }
        catch(err) {
            error.value= err.message;
            console.log(error.value);
        }
    }
    return {post,error, load }
}

export default getPost