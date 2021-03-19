<template>
  <form class= "form" @submit.prevent="handleSubmit">
      <label class="form__label"> Title:</label>
      <input class= "form__input" type="text" v-model="title" required>
      <label class="form__label">Details:</label>
      <textarea class="form__input" v-model="body" requried></textarea>
      <label> Tags (hit enter to add a tag) </label>
      <input v-model="tag" type="text">
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

  return {title, body, tag}
  }

}
</script>

<style>

</style>