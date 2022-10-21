<script setup>
import { useReviewStore } from '../stores/review.js'
const review = useReviewStore()
</script>
<template>
    <h1>Review</h1>
    <h2>Likes {{review.like}}</h2>
    <button @click="review.onLike">Like</button>
</template>