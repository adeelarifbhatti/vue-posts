import {ref} from 'vue'

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null)
    const url = process.env.VUE_APP_URL;
    const load  = async () => {
        try {
            console.log(url+'/'+ id);
            const data = await fetch(url+'/'+ id);
            if(!data.ok) {
            throw Error('no data available');
            }
            post.value = await data.json();
            console.log(data);
        }
        catch(err) {
            error.value= err.message;
            console.log(error.value);
        }
    }
    return {post,error, load }
}

export default getPost