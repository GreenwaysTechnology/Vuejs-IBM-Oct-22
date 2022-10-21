import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useReviewStore = defineStore('review', () => {
    const like = ref(0)
    const doubleLike = computed(() => like.value * 2)
    const onLike = () => like.value++
    return { like, doubleLike, onLike }
})
