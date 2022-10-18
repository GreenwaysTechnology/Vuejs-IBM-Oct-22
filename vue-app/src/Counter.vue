<script setup>
const props = defineProps({
    counter: Number,
    inc:Function
})
console.log(props)
</script>
<template>
    <div>
        <h1>Counter App</h1>
        <h2>Value {{props.counter}}</h2>
        <button @click="inc">+</button>
    </div>
</template>
<style>

</style>