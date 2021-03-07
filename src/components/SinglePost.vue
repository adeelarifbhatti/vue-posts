<template>
<div class="single-post">
    <h3>
        {{post.title}}
    </h3>
    <p>
        {{snippet}}
    </p>
    <div>
        <span v-for="tag in post.tags" :key="tag">
            #{{tag}}
        </span>
    </div>
</div>
  
</template>

<script>
import {computed} from 'vue'
export default {
    props: ['post'],
    setup(props) {
        const snippet = computed(()=>{
            return props.post.body.substring(0,3) +'...'
        });
        return {snippet}
    }


}
</script>

<style>

</style>