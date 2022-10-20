<script setup>
import { ref } from 'vue';
const like = ref(0)
const onLike = ()=>{
    like.value ++
}
</script>
<template>
    <h1>Reviews</h1>
    <p>Likes {{like}}</p>
    <button @click="onLike">Like</button>
</template>