import {ref} from 'vue'
import { projectPost} from '../firebase/config'

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null)
    const url = process.env.VUE_APP_URL;
    const load  = async () => {
        try {
            await new Promise(resolve => {
                setTimeout(resolve,2000);
                console.log("delay 2000");
            });
           const res = await projectPost.collection('posts')
           .orderBy('createTimeStamp', 'desc')
           .get();
           //console.log(res.docs)
           posts.value = res.docs.map(doc => {
               // id is not returned as it is not stored in the object rather on the object
               // ...doc.data() spread all the three properties and on top of it id:doc.id ID is put
               return{ ...doc.data(),id: doc.id}
           // console.log(doc.data());
           
        })
        }
        catch(err) {
            error.value= err.message;
            console.log(error.value);
        }
    }
    return {posts,error, load }
}

export default getPosts