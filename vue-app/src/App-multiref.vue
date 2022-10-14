<script setup>
import { ref } from 'vue'
//reactive
let like = ref(1)
let dislike =ref(100)
//listener
const onLike = () => {
    like.value++
}
//listener
const onDislike = () => {
    dislike.value--
}
</script>
<template>
    <div>
        <h1>Reactive State</h1>
        <h1>Like : {{like}} Dislike {{dislike}}</h1>
        <button @click="onLike">Like</button>
        <button @click="onDislike">Dislike</button>

    </div>
</template>