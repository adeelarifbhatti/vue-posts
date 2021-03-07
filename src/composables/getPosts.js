import {ref} from 'vue'

const getPosts = () => {
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
    return {posts,error, load }
}

export default getPosts