<template>
  <form class= "form" @submit.prevent="handleSubmit">
      <label class="form__label"> Title:</label>
      <input class= "form__input" type="text" v-model="title" required>
      <label class="form__label">Details:</label>
      <textarea class="form__input" v-model="body" requried></textarea>
      <label> Tags (hit enter to add a tag) </label>
      <input 
       v-model="tag" 
       type="text"
       @keydown.enter.prevent="tagSubmission"
      >
      <div v-for="tag in tags" :key="tag"> 
        #{{ tag }}
      </div>
      <button class="btn"> Add Project </button>
  </form>

  
</template>

<script>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
export default {
  setup() {
    const title = ref('')
    const body = ref('')
    const tag = ref('')
    const tags = ref([])
    const router = useRouter()
    console.log("router from vue-router with methods",router)

    const tagSubmission = () => {
      if(!tags.value.includes(tag.value)){
        tag.value = tag.value.replace(/\s/,'') // removes the whitespaces
        tags.value.push(tag.value);
      }
      tag.value='';
    }
    const handleSubmit = async () => {
      let post = {
        title: title.value,
        body: body.value,
        tags: tags.value

      }
      await fetch(process.env.VUE_APP_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(post)
        });
        router.push({name: 'Home'});
        console.log(post);

      }

  return {title, body, tag, tags, tagSubmission, handleSubmit}
  }

}
</script>

<style>

</style>