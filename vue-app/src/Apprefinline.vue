<script setup>
import { ref } from 'vue'
let like = ref(1)
let dislike =ref(100)
</script>
<template>
    <div>
        <h1>Reactive State</h1>
        <h1>Like : {{like}} Dislike {{dislike}}</h1>
        <button @click="like++">Like</button>
        <button @click="dislike++">Dislike</button>
    </div>
</template>