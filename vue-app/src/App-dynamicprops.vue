<script setup>
import { ref } from 'vue';
import  Counter  from './Counter.vue'
const counter = ref(10)
const inc = () => counter.value++
</script>
<template>
    <div>
        <Counter :counter="counter" :inc="inc" />
    </div>
</template>
<style>

</style>