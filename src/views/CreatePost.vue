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
export default {
  setup() {
    const title = ref('')
    const body = ref('')
    const tag = ref('')
    const tags = ref([])

    const tagSubmission = () => {
      if(!tags.value.includes(tag.value)){
        tag.value = tag.value.replace(/\s/,'') // removes the whitespaces
        tags.value.push(tag.value);
      }
      tag.value='';
    }

  return {title, body, tag, tags, tagSubmission}
  }

}
</script>

<style>

</style>