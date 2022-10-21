<script setup>
import { useCounterStore } from '../stores/counter.js'
const counterStore = useCounterStore()
</script>
<template>
    <h1>Counter App Using Pinia</h1>
    <h3>Value : {{counterStore.count}}</h3>
    <button @click="counterStore.increment">+</button>
</template>

